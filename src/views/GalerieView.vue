<script setup>
import { ref, computed, nextTick, onUnmounted } from 'vue';
import InteriorPage from '@/components/InteriorPage.vue';
import runners from '@/assets/images/trc1.jpg';
import ridgeRunner from '@/assets/images/trc2.jpg';
import landscape from '@/assets/images/trc3.jpg';
import trophies from '@/assets/images/trc4.jpg';
import mountainRunner from '@/assets/images/trc5.jpg';
const photos = [
  { src: runners, caption: 'Bucuria de a fi împreună pe traseu' },
  { src: ridgeRunner, caption: 'Alergare pe potecile de munte' },
  { src: mountainRunner, caption: 'În cursă, la Turnu Roșu Challenge' },
  { src: landscape, caption: 'Peisaj de pe traseul TRC' },
  { src: trophies, caption: 'Trofeele Turnu Roșu Challenge 2024' }
];
const dialog = ref(null);
const index = ref(0);
const selected = computed(() => photos[index.value]);
const memzoVisible = ref(false);
const memzoPanel = ref(null);
let previousOverflow;
function openPhoto(i) {
  index.value = i;
  previousOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  dialog.value.showModal();
}
function restoreScroll() {
  if (previousOverflow !== undefined) {
    document.body.style.overflow = previousOverflow;
    previousOverflow = undefined;
  }
}
function closePhoto() {
  dialog.value.close();
  restoreScroll();
}
function movePhoto(delta) {
  index.value = (index.value + delta + photos.length) % photos.length;
}
async function openMemzo() {
  memzoVisible.value = true;
  await nextTick();
  memzoPanel.value?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  memzoPanel.value?.focus({ preventScroll: true });
}
onUnmounted(restoreScroll);
</script>
<template>
  <InteriorPage
    title="Galerie"
    eyebrow="Turnu Roșu Challenge · Galerie foto"
    description="Momente de pe traseu și din jurul cursei, de la edițiile anterioare. Fotografiile oficiale le găsești rapid, cu un simplu selfie."
  >
    <aside class="trc-page-cta trc-photo-cta">
      <div>
        <h2>Găsește-ți fotografiile</h2>
        <p>
          Fă-ți un selfie, iar Memzo îți arată automat toate fotografiile oficiale în care apari,
          fără să cauți prin sute de poze.
        </p>
      </div>
      <button
        type="button"
        class="trc-button trc-button-dark"
        aria-controls="memzo-panel"
        :aria-expanded="memzoVisible"
        @click="openMemzo"
      >
        Fă un selfie și vezi pozele
      </button>
    </aside>
    <section
      v-if="memzoVisible"
      id="memzo-panel"
      ref="memzoPanel"
      class="trc-panel trc-memzo-panel"
      aria-label="Fotografiile tale în Memzo"
      tabindex="-1"
    >
      <div class="trc-panel-toolbar">
        <h2>Fotografiile tale</h2>
        <button type="button" class="trc-chip" @click="memzoVisible = false">
          Închide căutarea
        </button>
      </div>
      <iframe
        id="MemzoInt"
        src="https://memzo.ai/integrate/N0VLb1MvUDluaFV1T29VK1FnMHY1dz09"
        title="Găsește fotografiile tale cu Memzo"
        class="trc-memzo-frame"
      ></iframe>
      <a
        href="https://memzo.ai/integrate/N0VLb1MvUDluaFV1T29VK1FnMHY1dz09"
        target="_blank"
        rel="noopener noreferrer"
        class="trc-external-link"
        >Deschide Memzo într-o filă nouă</a
      >
    </section>
    <div class="trc-album-heading">
      <h2>Din edițiile anterioare</h2>
      <p class="trc-caption">5 fotografii · apasă pe o fotografie pentru a o mări</p>
    </div>
    <div class="trc-photo-grid">
      <button
        v-for="(photo, i) in photos"
        :key="photo.src"
        type="button"
        class="trc-photo-tile"
        :aria-label="`Mărește: ${photo.caption}`"
        @click="openPhoto(i)"
      >
        <img
          :src="photo.src"
          :alt="photo.caption"
          width="1536"
          height="1024"
          :loading="i === 0 ? 'eager' : 'lazy'"
        />
        <span class="trc-photo-caption">{{ photo.caption }}</span>
        <span class="trc-photo-hint" aria-hidden="true">Vezi fotografia</span>
      </button>
    </div>
    <Teleport to="body">
      <dialog
        ref="dialog"
        class="trc-lightbox"
        aria-label="Galerie foto"
        @close="restoreScroll"
        @click.self="closePhoto"
        @keydown.left.prevent="movePhoto(-1)"
        @keydown.right.prevent="movePhoto(1)"
      >
        <button
          type="button"
          class="trc-lightbox-control trc-lightbox-close"
          aria-label="Închide fotografia"
          autofocus
          @click="closePhoto"
        >
          <img src="/design/october/close.svg" alt="" />
        </button>
        <button
          type="button"
          class="trc-lightbox-control trc-lightbox-prev"
          aria-label="Fotografia precedentă"
          @click="movePhoto(-1)"
        >
          <img src="/design/october/previous.svg" alt="" />
        </button>
        <figure>
          <img :src="selected.src" :alt="selected.caption" />
          <figcaption aria-live="polite">
            <span>{{ selected.caption }}</span
            ><span>{{ index + 1 }} / {{ photos.length }}</span>
          </figcaption>
        </figure>
        <button
          type="button"
          class="trc-lightbox-control trc-lightbox-next"
          aria-label="Fotografia următoare"
          @click="movePhoto(1)"
        >
          <img src="/design/october/next.svg" alt="" />
        </button>
      </dialog>
    </Teleport>
  </InteriorPage>
</template>
