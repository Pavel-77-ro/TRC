<template>
  <div>
    <!-- Alte secțiuni Home -->

    <h2 class="text-2xl font-semibold my-6 text-center">
      Formular de înscriere Turnu Roșu Challenge
    </h2>

    <RegisterRunners
      iframeSrc="https://register.42km.ro/widgets/race-entries/select_race?event=b4221b4318acb0c6e6966ae0adc9781bc368bd4f"
    />
  </div>
</template>

<script setup>
import RegisterRunners from '@/components/RegisterRunners.vue';
</script>
