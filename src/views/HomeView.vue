<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';
import VideoPlayer from '@/components/VideoPlayer.vue';
import content from '@/data/design.json';
const remaining = ref([0, 0, 0, 0]);
const labels = ['zile', 'ore', 'minute', 'secunde'];
let timer;
function updateCountdown() {
  const s = Math.max(0, Math.floor((new Date('2026-05-16T09:00:00+03:00') - Date.now()) / 1000));
  remaining.value = [
    Math.floor(s / 86400),
    Math.floor(s / 3600) % 24,
    Math.floor(s / 60) % 60,
    s % 60
  ];
}
onMounted(() => {
  updateCountdown();
  timer = setInterval(updateCountdown, 1000);
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'AW-17130257836');
});
onUnmounted(() => clearInterval(timer));
const actions = {
  volunteers:
    'https://raceoffice.ro/clubul-sportiv-montan-sibiu/turnu-rosu-challenge-2026/register',
  camping:
    'https://docs.google.com/forms/d/e/1FAIpQLSe55_MNNCllCHoXyX6U3Mqt-X4NH8G40k_sktun-jSba3KOnQ/viewform?usp=sharing'
};
const partners = [
  ['transagape', 'Trans Agape'],
  ['myhas', 'MyHa’s'],
  ['photo', 'Emi Costeiu', 'https://www.facebook.com/CosteiuEmii'],
  ['gis', 'GIS Wood', 'https://www.instagram.com/gis.wood?igsh=MTJocng5MTJkYzFseQ=='],
  ['fotograph', 'Fotograph', 'https://www.fotograph.ro/'],
  ['andu', 'Andu', 'https://andusports.ro/'],
  ['harting', 'Harting', 'https://www.harting.com/en-RO'],
  ['craciun', 'Crăciun Trade', 'https://craciuntrade.ro/'],
  ['endurance', 'Endurance', 'https://endurancepro.ro/'],
  ['endmaze', 'Endmaze', null, 'svg'],
  ['partner-wordmark', 'Cristian Simina', null, 'svg']
];
const institutions = [
  ['ocol', 'Ocolul Silvic Izvorul Florii', 'https://osizvorulflorii.ro/'],
  ['salvamont', 'Salvamont Sibiu', 'https://www.salvamontsibiu.ro/'],
  ['jandarmerie', 'Jandarmeria Sibiu', 'https://www.jandarmeriasibiu.ro/']
];
</script>
<template>
  <section class="trc-hero" aria-labelledby="hero-title">
    <VideoPlayer />
    <div class="trc-wrap trc-hero-content">
      <h1 id="hero-title">Turnu Rosu<br />Challenge</h1>
      <p class="trc-date">{{ content.date }}</p>
      <div class="trc-countdown" aria-label="Timp rămas până la competiție">
        <div v-for="(label, i) in labels" :key="label">
          <strong>{{ remaining[i] }}</strong
          ><span>{{ label }}</span>
        </div>
      </div>
      <p class="trc-hero-description">{{ content.description }}</p>
      <RouterLink class="trc-button" to="/inregistrare">Inscrieri</RouterLink>
      <a class="trc-scroll" href="#kit" aria-label="Descoperă competiția"
        ><img src="/design/scroll.svg" alt=""
      /></a>
    </div>
  </section>
  <section id="kit" class="trc-section trc-kit">
    <div class="trc-wrap trc-split trc-image-first">
      <img
        class="trc-kit-image"
        src="/design/race-shirt.svg"
        alt="Tricoul Turnu Roșu Challenge"
        loading="lazy"
      />
      <div class="trc-copy">
        <h2>Kit Participare</h2>
        <ul class="trc-kit-list">
          <li v-for="item in content.kit" :key="item">{{ item }}</li>
        </ul>
        <RouterLink class="trc-button" to="/inregistrare">Inscrieri</RouterLink>
      </div>
    </div>
  </section>
  <section class="trc-section trc-courses">
    <div class="trc-wrap trc-split trc-image-first">
      <img
        class="trc-photo trc-course-photo"
        src="/design/courses.png"
        alt="Alergători pe traseul montan"
        loading="lazy"
      />
      <div class="trc-copy">
        <img class="trc-tower" src="/design/tower.svg" alt="" loading="lazy" />
        <h2>Curse</h2>
        <p class="trc-course-date">{{ content.date }}</p>
        <p>{{ content.courses }}</p>
        <RouterLink class="trc-button trc-button-dark" to="/curse">Detalii</RouterLink>
      </div>
    </div>
  </section>
  <template v-for="(activity, index) in content.activities" :key="activity.id">
    <div v-if="index > 1" class="trc-divider" aria-hidden="true"></div>
    <section
      :id="activity.id"
      class="trc-section trc-feature"
      :class="{ 'trc-dark': activity.dark }"
    >
      <div class="trc-wrap trc-split" :class="{ 'trc-image-first': activity.imageFirst }">
        <div class="trc-copy">
          <img
            class="trc-motif"
            :src="activity.dark ? '/design/motif-light.svg' : '/design/motif.svg'"
            alt=""
            loading="lazy"
          />
          <h2>{{ activity.title }}</h2>
          <p class="trc-activity-description">{{ activity.description }}</p>
          <RouterLink
            v-if="activity.action === 'painting'"
            class="trc-button"
            to="/inscrieri_pictura"
            >{{ activity.button }}</RouterLink
          >
          <a v-else-if="activity.action" class="trc-button" :href="actions[activity.action]">{{
            activity.button
          }}</a>
        </div>
        <img
          class="trc-photo"
          :src="`/design/${activity.image}.png`"
          :alt="activity.title + ' la Turnu Roșu Challenge'"
          loading="lazy"
          width="640"
          height="427"
        />
      </div>
    </section>
  </template>
  <section class="trc-section trc-dark trc-faq">
    <div class="trc-wrap trc-split">
      <div class="trc-copy">
        <h2>Frequently <br />Asked <br />Questions</h2>
        <p>{{ content.faqDescription }}</p>
      </div>
      <div class="trc-questions">
        <details v-for="item in content.faq" :key="item.question" name="faq">
          <summary>{{ item.question }}<img src="/design/chevron.svg" alt="" /></summary>
          <p>{{ item.answer }}</p>
        </details>
      </div>
    </div>
  </section>
  <section class="trc-section trc-sponsors">
    <div class="trc-wrap trc-sponsor-columns">
      <div class="trc-sponsor-groups">
        <div>
          <h2>Sponsor Principal</h2>
          <a href="https://regnology.net/" target="_blank" rel="noopener noreferrer"
            ><img class="trc-principal" src="/design/regnology.png" alt="Regnology" loading="lazy"
          /></a>
        </div>
        <div>
          <h2>Actiune cofinantata de</h2>
          <a href="https://primariaturnurosu.ro/" target="_blank" rel="noopener noreferrer"
            ><img
              class="trc-institution"
              src="/design/primarie.png"
              alt="Primăria Turnu Roșu"
              loading="lazy"
          /></a>
        </div>
        <div>
          <h2>Parteneri institutionali</h2>
          <div class="trc-institutions">
            <a
              v-for="item in institutions"
              :key="item[0]"
              :href="item[2]"
              target="_blank"
              rel="noopener noreferrer"
              ><img
                class="trc-institution"
                :src="`/design/${item[0]}.png`"
                :alt="item[1]"
                loading="lazy"
            /></a>
          </div>
        </div>
      </div>
      <div>
        <h2>Parteneri</h2>
        <div class="trc-partner-grid">
          <component
            :is="item[2] ? 'a' : 'div'"
            v-for="item in partners"
            :key="item[0]"
            :href="item[2] || undefined"
            :target="item[2] ? '_blank' : undefined"
            rel="noopener noreferrer"
            ><img :src="`/design/${item[0]}.${item[3] || 'png'}`" :alt="item[1]" loading="lazy"
          /></component>
        </div>
        <p class="trc-thanks">{{ content.thanks }}</p>
      </div>
    </div>
  </section>
</template>
