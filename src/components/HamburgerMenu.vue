<script setup>
import { RouterLink } from 'vue-router';
import { defineEmits } from 'vue';

const emits = defineEmits(['close']);
function closeMenu() {
  emits('close');
}
</script>

<template>
  <div class="fixed top-0 w-full h-full bg-gray-100 z-40">
    <div class="flex justify-end px-4 pt-[34px] pb-0">
      <i class="text-2xl fas fa-times cursor-pointer text-gray-800" @click="closeMenu"></i>
    </div>
    <ul class="flex flex-col items-center pt-0 pb-6 bg-gray-100 z-50">
      <li class="cursor-pointer py-[9px] text-xl text-gray-700 font-medium">
        <RouterLink :to="{ name: 'home' }" @click="closeMenu">Acasă</RouterLink>
      </li>
      <li class="cursor-pointer py-[9px] text-xl text-gray-700 font-medium">
        <RouterLink :to="{ name: 'participanti' }" @click="closeMenu">Participanţi</RouterLink>
      </li>
      <li class="cursor-pointer py-[9px] text-xl text-gray-700 font-medium">
        <RouterLink :to="{ name: 'regulament' }" @click="closeMenu">Regulament</RouterLink>
      </li>
      <li class="cursor-pointer py-[9px] text-xl text-gray-700 font-medium pb-4">
        <RouterLink :to="{ name: 'inscrieri' }" @click="closeMenu">Înscrieri</RouterLink>
      </li>
    </ul>
    <div class="bg-gradient-to-b from-gray-100 to-transparent h-8 w-full"></div>
  </div>
</template>

<style scoped>
.z-max {
  z-index: 9999;
}
</style>
