<script setup>
import { RouterView, RouterLink, useRoute } from 'vue-router';
import { ref, watch, onMounted, onUnmounted } from 'vue';
import './assets/design.css';
const route = useRoute();
const menuOpen = ref(false);
const resultsOpen = ref(false);
const results = ref(null);
watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false;
    resultsOpen.value = false;
  }
);
function closeOutside(event) {
  if (!results.value?.contains(event.target)) resultsOpen.value = false;
}
function closeEscape(event) {
  if (event.key === 'Escape') {
    menuOpen.value = false;
    resultsOpen.value = false;
  }
}
onMounted(() => {
  document.addEventListener('click', closeOutside);
  document.addEventListener('keydown', closeEscape);
});
onUnmounted(() => {
  document.removeEventListener('click', closeOutside);
  document.removeEventListener('keydown', closeEscape);
});
function top() {
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
  });
}
</script>
<template>
  <a class="trc-skip" href="#main-content">Sari la conținut</a>
  <header class="trc-header">
    <nav class="trc-nav" aria-label="Navigație principală">
      <RouterLink class="trc-logo" to="/" aria-label="Turnu Roșu Challenge — Acasă"
        ><img src="/design/logo.svg" alt="Turnu Roșu Challenge" width="160" height="68"
      /></RouterLink>
      <button
        class="trc-menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="main-navigation"
        @click="menuOpen = !menuOpen"
      >
        {{ menuOpen ? 'Închide ✕' : 'Meniu ☰' }}
      </button>
      <ul id="main-navigation" class="trc-nav-links" :class="{ 'is-open': menuOpen }">
        <li><RouterLink to="/">Acasă</RouterLink></li>
        <li ref="results" class="trc-results">
          <button
            type="button"
            :aria-expanded="resultsOpen"
            aria-controls="results-menu"
            @click="resultsOpen = !resultsOpen"
          >
            Rezultate <img src="/design/chevron.svg" alt="" />
          </button>
          <ul v-if="resultsOpen" id="results-menu">
            <li><RouterLink to="/rezultate/2025">Rezultate 2025</RouterLink></li>
            <li><RouterLink to="/rezultate/2024">Rezultate 2024</RouterLink></li>
          </ul>
        </li>
        <li><RouterLink to="/participanti">Participanți</RouterLink></li>
        <li><RouterLink to="/galerie">Galerie</RouterLink></li>
        <li><RouterLink to="/regulament">Regulament</RouterLink></li>
        <li><RouterLink class="trc-button" to="/inregistrare">Inscrieri</RouterLink></li>
      </ul>
    </nav>
  </header>
  <main id="main-content" :class="{ 'trc-interior': route.name !== 'home' }" tabindex="-1">
    <RouterView />
  </main>
  <footer class="trc-footer">
    <div class="trc-wrap">
      <div class="trc-footer-top">
        <div class="trc-footer-links">
          <a href="https://anpc.ro/">ANPC</a
          ><RouterLink to="/politica-de-retur">Politica de retur</RouterLink>
          <a href="https://consumer-redress.ec.europa.eu/site-relocation_en">SOL</a
          ><RouterLink to="/termen-si-conditii">Termen si Condiții</RouterLink>
          <RouterLink to="/regulament">Regulament</RouterLink
          ><RouterLink to="/organizare">Contact</RouterLink
          ><RouterLink to="/gdpr">Politica GDPR</RouterLink>
        </div>
        <div class="trc-footer-right">
          <div class="trc-socials">
            <a
              href="https://www.facebook.com/people/Turnu-Ro%C8%99u-Challenge/61550549625676/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              ><img src="/design/facebook.svg" alt=""
            /></a>
            <a
              href="https://www.instagram.com/turnurosuchallenge"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              ><img src="/design/instagram.svg" alt=""
            /></a>
          </div>
          <a href="https://www.netopia-payments.com" target="_blank" rel="noopener noreferrer"
            ><img
              class="trc-payment"
              src="/design/payment.png"
              alt="Plăți online securizate prin Netopia"
              loading="lazy"
              width="240"
              height="84"
          /></a>
        </div>
      </div>
      <div class="trc-footer-bottom">
        <a href="https://clubmontan.ro/"
          >Copyright ©2025 Club Sportiv Montan Sibiu – CSMS. Toate drepturile rezervate.</a
        ><button type="button" @click="top" aria-label="Înapoi sus">
          <img src="/design/arrow-up.svg" alt="" />
        </button>
      </div>
    </div>
  </footer>
</template>
