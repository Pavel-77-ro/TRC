<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const video = ref(null);
const playing = ref(false);
const muted = ref(true);
let preference;
function syncPreference() {
  if (preference.matches) video.value?.pause();
  else video.value?.play().catch(() => {});
}
function toggle() {
  if (video.value.paused) video.value.play().catch(() => {});
  else video.value.pause();
}
function toggleMute() {
  video.value.muted = !video.value.muted;
  muted.value = video.value.muted;
}
onMounted(() => {
  preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  preference.addEventListener('change', syncPreference);
  syncPreference();
});
onUnmounted(() => preference?.removeEventListener('change', syncPreference));
</script>
<template>
  <video
    ref="video"
    class="trc-hero-video"
    :muted="muted"
    loop
    playsinline
    preload="none"
    poster="/design/hero-poster.png"
    aria-hidden="true"
    @play="playing = true"
    @pause="playing = false"
    @volumechange="muted = video.muted"
  >
    <source src="/design/hero.mp4?v=audio" type="video/mp4" />
  </video>
  <div class="trc-hero-shade" aria-hidden="true"></div>
  <div class="trc-video-controls" role="group" aria-label="Controale video">
    <button
      class="trc-video-control"
      type="button"
      @click="toggle"
      :aria-label="playing ? 'Pauză video' : 'Redă video'"
    >
      {{ playing ? 'Ⅱ' : '▶' }}
    </button>
    <button
      class="trc-video-control"
      type="button"
      @click="toggleMute"
      :aria-label="muted ? 'Activează sunetul' : 'Oprește sunetul'"
      :title="muted ? 'Activează sunetul' : 'Oprește sunetul'"
    >
      <i :class="muted ? 'fas fa-volume-xmark' : 'fas fa-volume-high'" aria-hidden="true"></i>
    </button>
  </div>
</template>
