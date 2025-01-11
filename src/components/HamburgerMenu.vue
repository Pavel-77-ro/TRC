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
      <!-- Participanți with Dropdown -->
      <li
          class="cursor-pointer py-[2px] text-xl text-gray-700 font-normal border-b-2 border-gray-300 my-[12px] relative"
        >
          <div @click="toggleDropdown" class="flex items-center justify-between w-full">
            <span>Participanţi</span>
            <i
              :class="dropdownOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"
              class="text-lg text-gray-700 ml-2"
            ></i>
          </div>
          <ul v-if="dropdownOpen" class="mt-2 pl-4">
            <li
              class="cursor-pointer py-[2px] text-lg text-gray-600 font-normal border-b-2 border-gray-300 my-[8px]"
            >
              <RouterLink :to="{ name: 'participanti_2024' }" @click="closeMenu">Ediția 2024</RouterLink>
            </li>
            <li
              class="cursor-pointer py-[2px] text-lg text-gray-600 font-normal border-b-2 border-gray-300 my-[8px]"
            >
              <RouterLink :to="{ name: 'participanti_2025' }" @click="closeMenu">Ediția 2025</RouterLink>
            </li>
          </ul>
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

<script>
export default {
  data() {
    return {
      dropdownOpen: false, // State for showing/hiding the Participanți dropdown
    };
  },
  methods: {
    closeMenu() {
      console.log('Menu closed'); // Debugging
      this.$emit('close');
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen; // Toggle dropdown state
      console.log('Dropdown state:', this.dropdownOpen); // Debugging
    },
  },
};
</script>


<style scoped>
.z-max {
  z-index: 9999;
}
</style>
