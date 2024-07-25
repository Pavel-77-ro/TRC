<script setup>
import { RouterView, RouterLink } from 'vue-router';
import { useRouter } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';
import ScrollToTopBtn from './components/ScrollToTopBtn.vue';
import HamburgerMenu from './components/HamburgerMenu.vue';

const router = useRouter();
const isSmallScreen = ref(false);
const isMenuOpen = ref(false);

function goToInscrieri() {
  router.push({ name: 'inscrieri' });
}

function goToHome() {
  router.push({ name: 'home' });
}

function checkScreenSize() {
  isSmallScreen.value = window.innerWidth < 640; // 640px is the threshold for 'sm' in Tailwind CSS
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<template>
  <div class="font-Poppins relative">
    <!-- Header -->
    <header class="backdrop-blur-xl z-40">
      <nav id="navb" class="container flex items-center py-4 mt-1 md:mt-2">
        <div class="py-1 w-14 md:w-20 overflow-hidden">
          <img
            @click="goToHome()"
            src="./assets/images/logo.png"
            class="object-contain scale-175 cursor-pointer"
            alt="logo"
          />
        </div>
        <ul
          class="hidden sm:flex flex-1 justify-end items-center gap-12 text-slate-600 uppercase sm:text-md lg:text-base"
        >
          <li class="cursor-pointer hover-underline-animation transition-duration:150ms">
            <RouterLink :to="{ name: 'home' }">Acasă</RouterLink>
          </li>
          <li class="cursor-pointer hover-underline-animation transition-duration:150ms">
            <RouterLink :to="{ name: 'participanti' }">Participanţi</RouterLink>
          </li>
          <li class="cursor-pointer hover-underline-animation transition-duration:150ms">
            <RouterLink :to="{ name: 'regulament' }">Regulament</RouterLink>
          </li>
          <button
            type="button"
            class="btn btn-purple rounded-lg px-7 py-3 uppercase hover:bg-black"
            @click="goToInscrieri()"
          >
            Inscrieri
          </button>
        </ul>
        <div class="flex sm:hidden flex-1 justify-end">
          <i class="text-2xl fas fa-bars cursor-pointer" @click="toggleMenu"></i>
        </div>
      </nav>
      <transition name="fade" @after-enter="onEnter" @after-leave="onLeave">
        <HamburgerMenu v-if="isSmallScreen && isMenuOpen" @close="toggleMenu" />
      </transition>
      <div v-show="isMenuOpen" class="w-full h-full z-50 bg-gray-400"></div>
    </header>
  </div>
  <scrollToTopBtn></scrollToTopBtn>
  <RouterView></RouterView>
  <!-- Footer -->
  <footer class="bg-gray-900 py-8">
    <div class="container flex flex-col md:flex-row items-center">
      <div class="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
        <h3 class="text-white text-xl">
          <RouterLink :to="{ name: 'home' }" class="white">Turnu Rosu Challenge</RouterLink>
        </h3>
        <ul class="flex text-white uppercase gap-12 text-xs tracking-wide">
          <li class="cursor-pointer hover-underline-animation transition-duration:150ms white">
            <RouterLink :to="{ name: 'inscrieri' }">Înscrieri</RouterLink>
          </li>
          <li class="cursor-pointer hover-underline-animation transition-duration:150ms white">
            <RouterLink :to="{ name: 'regulament' }">Regulament</RouterLink>
          </li>
          <li class="cursor-pointer hover-underline-animation transition-duration:150ms white">
            <RouterLink :to="{ name: 'participanti' }">Participanti</RouterLink>
          </li>
        </ul>
      </div>
      <div class="flex gap-10 mt-12 md:mt-0">
        <li>
          <a
            href="https://www.instagram.com/turnurosuchallenge?igsh=MXNsbWgyZzRlOTVpcw=="
            target="_blank"
            ><i
              class="text-white text-2xl fab fa-instagram hover:text-bookmark-purple hover:scale-105 transition-100"
            ></i
          ></a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/people/Turnu-Ro%C8%99u-Challenge/61550549625676/"
            target="_blank"
            ><i
              class="text-white text-2xl fab fa-facebook-square hover:text-bookmark-purple hover:scale-105 transition-100"
            ></i
          ></a>
        </li>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.white {
  color: white !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
