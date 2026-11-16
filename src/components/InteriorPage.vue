<script setup>
import '@/assets/interior-pages.css';
defineProps({ title: String, eyebrow: String, description: String });
</script>

<template>
  <div class="trc-page">
    <header class="trc-page-intro trc-page-width">
      <p class="trc-eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p class="trc-page-description">
        <slot name="description">{{ description }}</slot>
      </p>
    </header>
    <div class="trc-page-body trc-page-width"><slot /></div>
  </div>
</template>
