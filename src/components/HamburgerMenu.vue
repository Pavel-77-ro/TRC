<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { defineEmits } from 'vue';

const emits = defineEmits(['close']);
const router = useRouter();

function closeMenu() {
  emits('close');
  console.log('aaa');
}

function goToInscrieri() {
  router.push({ name: 'inscrieri' });
  closeMenu();
}
</script>
<template>
  <div class="fixed top-0 w-full h-full bg-gray-100 z-40">
    <div class="flex justify-end px-4 pt-[34px] pb-0">
      <i class="text-2xl fas fa-times cursor-pointer text-gray-800" @click="closeMenu"></i>
    </div>
    <ul class="flex flex-col items-center pt-0 pb-6 bg-gray-100 z-50">
      <li class="cursor-pointer py-2 text-xl text-gray-800">
        <RouterLink :to="{ name: 'home' }" @click="closeMenu">Acasă</RouterLink>
      </li>
      <li class="cursor-pointer py-2 text-xl text-gray-800">
        <RouterLink :to="{ name: 'participanti' }" @click="closeMenu">Participanţi</RouterLink>
      </li>
      <li class="cursor-pointer py-2 text-xl text-gray-800">
        <RouterLink :to="{ name: 'regulament' }" @click="closeMenu">Regulament</RouterLink>
      </li>
      <button
        type="button"
        class="btn btn-purple rounded-lg px-7 py-3 uppercase focus:bg-black mt-4"
        @click="goToInscrieri"
      >
        Inscrieri
      </button>
    </ul>
    <div class="bg-gradient-to-b from-gray-100 to-transparent h-12 w-full"></div>
  </div>
</template>

<style scoped>
.z-max {
  z-index: 9999;
}
</style>
