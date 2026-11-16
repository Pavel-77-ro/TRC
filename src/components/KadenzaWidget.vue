<script setup>
import { onMounted, ref } from 'vue';
import { kadenza } from '@/data/kadenza';

defineProps({ participants: Boolean });
const failed = ref(false);
const loading = ref(true);

onMounted(async () => {
  try {
    // Native ESM import: equivalent to the supplied import map, loaded only on widget pages.
    const moduleUrl = `${kadenza.host}/widgets/v1/embed.js`;
    await import(/* @vite-ignore */ moduleUrl);
  } catch {
    failed.value = true;
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="kadenza-container">
    <p v-if="loading" role="status">
      {{ participants ? 'Se încarcă lista participanților…' : 'Se încarcă formularul Kadenza…' }}
    </p>
    <p v-if="failed" role="alert">
      Nu am putut încărca Kadenza. Reîncarcă pagina pentru a încerca din nou.
    </p>
    <kadenza-race-participants
      v-if="participants && !failed"
      :org="kadenza.org"
      :competition="kadenza.competition"
      :host="kadenza.host"
      locale="ro"
    />
    <kadenza-registration
      v-else-if="!failed"
      :org="kadenza.org"
      :competition="kadenza.competition"
      :host="kadenza.host"
      locale="ro"
    />
  </div>
</template>

<style scoped>
.kadenza-container {
  width: 100%;
  min-height: 240px;
  font-family: Inter, Arial, sans-serif;
}
kadenza-registration,
kadenza-race-participants {
  display: block;
  width: 100%;
  font-family: Inter, Arial, sans-serif;
  --font-brand: Inter, Arial, sans-serif;
  --font-sans: Inter, Arial, sans-serif;
}
</style>
