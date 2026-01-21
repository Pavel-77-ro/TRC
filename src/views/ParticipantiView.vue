<template>
  <section class="max-w-6xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-semibold text-center mb-8">
      Lista participanților Turnu Roșu Challenge
    </h1>

    <RegisterRunners
      iframeId="sportic-participants-list"
      iframeSrc="https://register.42km.ro/widgets/race-entries/?race_hash=f2269e67fa9601c42e3c78115bd11681448146f6"
      :height="1500"
    />
  </section>
</template>

<script setup>
import RegisterRunners from "@/components/RegisterRunners.vue";
</script>
