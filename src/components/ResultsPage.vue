<script setup>
import { computed, ref, watch } from 'vue';
import InteriorPage from '@/components/InteriorPage.vue';
import results from '@/data/results.json';
const props = defineProps({ year: { type: Number, required: true } });
const race = ref('Semimaraton');
const complete = ref(false);
const query = ref('');
const races = computed(() =>
  props.year === 2026 ? ['Semimaraton', 'Cros', 'Power Hiking'] : ['Semimaraton', 'Cros']
);
const hiking = computed(() => race.value === 'Power Hiking');
const distance = computed(() => (hiking.value ? 6 : race.value === 'Cros' ? 11 : 21));
watch(
  () => props.year,
  () => {
    if (!races.value.includes(race.value)) race.value = 'Semimaraton';
    query.value = '';
  }
);
watch(race, () => {
  query.value = '';
});
const board = computed(() => results[`${props.year}-${race.value}`]);
const normalize = (value) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('ro');
const visibleRows = computed(() =>
  board.value.rows.filter((row) =>
    normalize(`${row.name} ${row.bib || ''}`).includes(normalize(query.value.trim()))
  )
);
const provider = computed(() => (props.year === 2026 ? 'RaceTec' : 'RaceHub'));
const eventDate = computed(
  () => ({ 2024: '22.09.2024', 2025: '08.06.2025', 2026: '16.05.2026' })[props.year]
);
const source = computed(() =>
  props.year === 2026
    ? `https://cronometraj.racetecresults.com/results.aspx?CId=16648&RId=2463&EId=${hiking.value ? 3 : race.value === 'Cros' ? 2 : 1}`
    : props.year === 2024
      ? 'https://racehub.ro/results/g-live.html?f=events/timing/20240922/turnurosuchallenge.clax'
      : 'https://racehub.ro/results/g-live.html?f=events/timing/20250608/1/turnurosu.clax'
);
</script>
<template>
  <InteriorPage
    title="Rezultate"
    eyebrow="Turnu Roșu Challenge · Rezultate oficiale"
    description="Clasamentele edițiilor 2024, 2025 și 2026. Alege ediția și proba — rezultatele ediției 2027 vor apărea aici după cursă."
  >
    <section class="trc-panel trc-results-board" aria-label="Clasamente">
      <div class="trc-panel-toolbar">
        <nav class="trc-chip-group" aria-label="Ediția concursului">
          <RouterLink
            v-for="edition in [2026, 2025, 2024]"
            :key="edition"
            :to="`/rezultate/${edition}`"
            class="trc-chip"
            :class="{ 'is-selected': year === edition }"
            :aria-current="year === edition ? 'page' : undefined"
            >Ediția {{ edition }}</RouterLink
          >
        </nav>
        <div class="trc-chip-group" aria-label="Proba">
          <button
            v-for="option in races"
            :key="option"
            type="button"
            class="trc-chip"
            :class="{ 'is-selected': race === option }"
            :aria-pressed="race === option"
            @click="race = option"
          >
            {{ option }} {{ option === 'Power Hiking' ? 6 : option === 'Cros' ? 11 : 21 }} km
          </button>
        </div>
      </div>
      <div>
        <p class="trc-eyebrow">Ediția {{ year }} · {{ eventDate }}</p>
        <h2 class="trc-board-title">{{ race }} {{ distance }} km</h2>
      </div>
      <p v-if="hiking" class="trc-caption">
        Probă necompetitivă · {{ board.rows.length }} participanți. Nu se acordă locuri sau timpi de
        clasament.
      </p>
      <div v-if="!hiking" class="trc-results-stats">
        <div>
          <p class="trc-caption">Clasați / la start</p>
          <strong>{{ board.classified }}</strong>
        </div>
        <div>
          <p class="trc-caption">Timp câștigător</p>
          <strong>{{ board.winnerTime }}</strong>
        </div>
        <div>
          <p class="trc-caption">Prima femeie</p>
          <strong>{{ board.firstWoman }}</strong>
        </div>
      </div>
      <div v-if="!hiking" class="trc-podium">
        <article v-for="row in board.rows.slice(0, 3)" :key="row.place">
          <p class="trc-eyebrow">Locul {{ row.place }}</p>
          <h3>{{ row.name }}</h3>
          <p v-if="year !== 2026" class="trc-muted">{{ row.club }}</p>
          <strong>{{ row.time }}</strong>
        </article>
      </div>
      <div v-if="board.fullList" class="trc-panel-toolbar">
        <label class="trc-results-search"
          >Caută participant
          <input v-model="query" type="search" placeholder="Nume sau număr de concurs" />
        </label>
        <p class="trc-caption" role="status">
          {{ visibleRows.length }} din {{ board.rows.length }} participanți
        </p>
      </div>
      <div
        class="trc-table-scroll"
        tabindex="0"
        role="region"
        :aria-label="`${board.fullList ? 'Lista completă de participanți' : 'Primii zece clasați'} la ${race} ${year}`"
      >
        <table class="trc-results-table">
          <thead>
            <tr>
              <th v-if="!hiking" scope="col">Loc</th>
              <th v-if="board.fullList" scope="col">Nr.</th>
              <th scope="col">Participant</th>
              <th v-if="year !== 2026" scope="col">Club</th>
              <th scope="col">Categorie</th>
              <th v-if="!hiking" scope="col">Timp</th>
              <th v-if="board.fullList && !hiking" scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in visibleRows" :key="row.bib || row.place">
              <td v-if="!hiking">
                <span
                  class="trc-place"
                  :class="{ 'is-podium': Number(row.place) > 0 && Number(row.place) <= 3 }"
                  >{{ row.place || '—' }}</span
                >
              </td>
              <td v-if="board.fullList">{{ row.bib }}</td>
              <td>{{ row.name }}</td>
              <td v-if="year !== 2026">{{ row.club }}</td>
              <td>{{ row.category }}</td>
              <td v-if="!hiking">{{ row.time }}</td>
              <td v-if="board.fullList && !hiking">
                {{ row.status === 'FIN' ? 'Finisher' : row.status }}
              </td>
            </tr>
            <tr v-if="!visibleRows.length">
              <td :colspan="hiking ? 3 : year === 2026 ? 6 : 7">
                Nu am găsit participanți pentru această căutare.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="trc-panel-toolbar">
        <p class="trc-caption">
          <template v-if="board.fullList"
            >Lista completă: {{ board.rows.length }} participanți.<template
              v-if="!hiking && year === 2026"
            >
              DNF = nu a terminat cursa; DNS = nu a luat startul.</template
            ><template v-else-if="year === 2025">
              „Retras” corespunde statusului „Withdrawal” din RaceHub.</template
            ></template
          >
          <template v-else
            >Primii 10 din {{ board.classified.split(' / ')[0] }} de clasați.</template
          >
          Sursa: {{ year === 2026 ? 'RaceTec' : 'Wiclax / RaceHub' }}.
        </p>
        <a :href="source" target="_blank" rel="noopener noreferrer" class="trc-chip trc-outline">
          Clasament complet în {{ provider }} ↗
        </a>
      </div>
      <div v-if="year !== 2026" class="trc-panel-toolbar">
        <p class="trc-caption">
          Dacă vizualizarea integrată nu se încarcă, folosește linkul de mai sus pentru clasamentul
          complet.
        </p>
        <button
          type="button"
          class="trc-chip trc-outline"
          :aria-expanded="complete"
          aria-controls="complete-results"
          @click="complete = !complete"
        >
          {{ complete ? 'Ascunde vizualizarea integrată' : 'Vezi clasamentul în pagină' }}
        </button>
      </div>
      <section
        v-if="complete && year !== 2026"
        id="complete-results"
        class="trc-full-results"
        :aria-label="`Clasamentul complet ${provider}`"
      >
        <a :href="source" target="_blank" rel="noopener noreferrer" class="trc-external-link"
          >Deschide clasamentul în {{ provider }}</a
        >
        <iframe
          :key="source"
          :src="source"
          :title="`Rezultate complete Turnu Roșu Challenge ${year}`"
          class="trc-racehub-frame"
        ></iframe>
      </section>
      <p v-if="year === 2026" class="trc-caption">
        Power Hiking 6 km este o probă necompetitivă.
        <a
          href="https://cronometraj.racetecresults.com/results.aspx?CId=16648&amp;RId=2463&amp;EId=3"
          target="_blank"
          rel="noopener noreferrer"
          class="trc-external-link"
          >Vezi participanții în RaceTec ↗</a
        >
      </p>
    </section>
  </InteriorPage>
</template>
