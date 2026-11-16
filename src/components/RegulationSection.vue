<script setup>
defineProps({ number: Number, title: String, open: Boolean });
defineEmits(['toggle']);
</script>
<template>
  <section class="trc-reg-section">
    <h2>
      <button
        type="button"
        :id="`rule-heading-${number}`"
        :aria-expanded="open"
        :aria-controls="`rule-${number}`"
        @click="$emit('toggle')"
      >
        <span class="trc-rule-number">{{ number }}</span>
        <span>{{ title }}</span>
        <img src="/design/october/chevron-down.svg" alt="" :class="{ 'is-open': open }" />
      </button>
    </h2>
    <div
      v-show="open"
      :id="`rule-${number}`"
      class="trc-rule-content"
      :aria-labelledby="`rule-heading-${number}`"
    >
      <slot />
    </div>
  </section>
</template>
