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
      <i class="text-3xl fas fa-times cursor-pointer text-gray-800" @click="closeMenu"></i>
    </div>
    <ul class="flex flex-col items-center pt-0 pb-6 bg-gray-100 z-50">
      <li
        class="cursor-pointer py-[2px] text-xl text-gray-700 font-normal border-b-2 border-gray-300 my-[12px]"
      >
        <RouterLink :to="{ name: 'home' }" @click="closeMenu">Acasă</RouterLink>
      </li>
      
      <li
        class="cursor-pointer py-[2px] text-lg text-gray-600 font-normal border-b-2 border-gray-300 my-[8px]"
      >
        <RouterLink :to="{ name: 'participanti_2025' }" @click="closeMenu">Participanți</RouterLink>
      </li>

      <!-- Rezultate Dropdown -->
      <li class="w-full px-4">
        <div
          class="flex justify-between items-center cursor-pointer py-2 text-lg text-gray-600 font-normal border-b-2 border-gray-300"
          @click="toggleRezultate"
        >
          <span>Rezultate</span>
          <svg
            :class="{ 'rotate-180': showRezultateDropdown }"
            class="w-4 h-4 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <ul v-if="showRezultateDropdown" class="ml-4">
          <li class="py-1 text-md text-gray-600">
            <RouterLink :to="{ name: 'rezultate_2024' }" @click="closeMenu">Rezultate 2024</RouterLink>
          </li>
          <li class="py-1 text-md text-gray-600">
            <RouterLink :to="{ name: 'rezultate_2025' }" @click="closeMenu">Rezultate 2025</RouterLink>
          </li>
        </ul>
      </li>

      <li
        class="cursor-pointer py-[2px] text-lg text-gray-600 font-normal border-b-2 border-gray-300 my-[8px]"
      >
        <RouterLink :to="{ name: 'galerie' }" @click="closeMenu">Galerie</RouterLink>
      </li>

      <li
        class="cursor-pointer py-[2px] text-xl text-gray-700 font-normal border-b-2 border-gray-300 my-[12px]"
      >
        <RouterLink :to="{ name: 'regulament' }" @click="closeMenu">Regulament</RouterLink>
      </li>
      <li
        class="cursor-pointer py-[2px] text-xl text-gray-700 font-normal border-b-2 border-gray-300 my-[12px] mb-8"
      >
        <a href="https://racehub.ro/register/trc2025" @click="closeMenu">Înscrieri</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.z-max {
  z-index: 9999;
}
</style>
