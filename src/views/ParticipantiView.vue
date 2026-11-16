<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import InteriorPage from '@/components/InteriorPage.vue';
import KadenzaWidget from '@/components/KadenzaWidget.vue';
import { kadenza } from '@/data/kadenza';
const races = ref([]);
const statsFailed = ref(false);
const controller = new AbortController();
let refresh;
async function loadCapacity() {
  try {
    const response = await fetch(`${kadenza.host}/api/competitions/by-id/${kadenza.competition}`, {
      signal: controller.signal
    });
    if (!response.ok) throw new Error('Capacity unavailable');
    const data = await response.json();
    const order = ['Marathon', 'Semi', 'Cros', 'Power Hiking'];
    races.value = data.races
      .map((race) => ({
        id: race.id,
        name: /^marathon$/i.test(race.name)
          ? 'Maraton'
          : /^semi/i.test(race.name)
            ? 'Semimaraton'
            : race.name,
        order: order.findIndex((name) => race.name.startsWith(name)),
        distance: race.distance,
        elevation: race.extraData?.elevationGain,
        capacity: race.maxParticipants,
        available: race.availableSlots,
        occupied:
          Number.isFinite(race.maxParticipants) && Number.isFinite(race.availableSlots)
            ? Math.max(0, race.maxParticipants - race.availableSlots)
            : null
      }))
      .sort((a, b) => a.order - b.order);
    statsFailed.value = false;
  } catch (error) {
    if (error.name !== 'AbortError') statsFailed.value = true;
  }
}
onMounted(() => {
  loadCapacity();
  refresh = setInterval(loadCapacity, 60000);
});
onUnmounted(() => {
  controller.abort();
  clearInterval(refresh);
});
</script>
<template>
  <InteriorPage
    title="Participanți"
    eyebrow="Turnu Roșu Challenge 2027 · 05.06.2027 · Turnu Roșu"
    description="Lista publică a participanților înscriși la ediția 2027. Filtrează după cursă, categorie și naționalitate pentru a găsi participanții la cursa ta."
  >
    <div v-if="races.length" class="trc-capacity-grid">
      <article v-for="race in races" :key="race.id" class="trc-capacity-card">
        <h2>{{ race.name }}</h2>
        <p class="trc-caption">
          {{ race.distance
          }}<template v-if="race.elevation">
            · +{{ race.elevation.toLocaleString('ro-RO') }} m</template
          >
        </p>
        <p v-if="race.occupied !== null" class="trc-capacity-count">
          <strong>{{ race.occupied }}</strong> / {{ race.capacity }} locuri ocupate
        </p>
        <progress
          v-if="race.capacity > 0 && race.occupied !== null"
          :value="race.occupied"
          :max="race.capacity"
          :aria-label="`Locuri ocupate la ${race.name}`"
        />
        <p class="trc-caption">
          {{
            Number.isFinite(race.available)
              ? `${race.available} locuri libere`
              : 'Disponibilitate în formularul de înscriere'
          }}
        </p>
      </article>
    </div>
    <p v-if="statsFailed" role="status" class="trc-caption">
      Disponibilitatea locurilor nu poate fi actualizată momentan.
    </p>
    <section class="trc-panel trc-participant-board" aria-label="Lista participanților Kadenza">
      <KadenzaWidget participants />
    </section>
    <aside class="trc-page-cta">
      <div>
        <h2>Încă nu ești pe listă?</h2>
        <p>Alege-ți provocarea. Înscrierile se închid pe 23.05.2027.</p>
      </div>
      <RouterLink class="trc-button" to="/inregistrare">Înscrie-te</RouterLink>
    </aside>
  </InteriorPage>
</template>
