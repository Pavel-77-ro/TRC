<script setup>
import { RouterView, RouterLink } from 'vue-router';
import { useRouter } from 'vue-router';
import { ref, onMounted, onUnmounted, onBeforeUnmount  } from 'vue';
import ScrollToTopBtn from './components/ScrollToTopBtn.vue';
import HamburgerMenu from './components/HamburgerMenu.vue';

const router = useRouter();
const isSmallScreen = ref(false);
const isMenuOpen = ref(false);
const rezultateToggle = ref(null);

const showRezultateDropdown = ref(false)

const toggleRezultate = () => {
  showRezultateDropdown.value = !showRezultateDropdown.value
}


const closeDropdown = (e) => {
  const dropdown = document.getElementById('rezultate-dropdown')

  // dacă click-ul e în dropdown sau pe butonul care îl activează, nu închide
  if (
    (dropdown && dropdown.contains(e.target)) ||
    (rezultateToggle.value && rezultateToggle.value.contains(e.target))
  ) {
    return
  }

  showRezultateDropdown.value = false
}

function goToInscrieri() {
  router.push({ name: 'Inregistrare' });
}

function goToHome() {
  router.push({ name: 'home' });
}

function checkScreenSize() {
  isSmallScreen.value = window.innerWidth < 640; // 640px is the threshold for 'sm' in Tailwind CSS
}

function onEnter(el) {
  el.style.opacity = 0;
  el.style.transition = 'opacity 0.3s';
  setTimeout(() => {
    el.style.opacity = 1;
  }, 0);
}

function onLeave(el) {
  el.style.opacity = 1;
  el.style.transition = 'opacity 0.3s';
  setTimeout(() => {
    el.style.opacity = 0;
  }, 0);
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
  document.addEventListener('click', closeDropdown);

});

onBeforeUnmount(() => {
  document.removeEventListener('click', closeDropdown);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});

</script>

<template>
  <div class="font-Poppins relative">
    <!-- Header -->
    <header class="backdrop-blur-xl relative z-50">
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
          <li class="relative cursor-pointer select-none">
            <span @click="toggleRezultate" ref="rezultateToggle" class="hover-underline-animation">Rezultate</span>
            <ul
              v-if="showRezultateDropdown"
              id="rezultate-dropdown"
              class="absolute left-0 mt-2 flex flex-col bg-white shadow-lg rounded-md z-50 min-w-[160px] py-2"
              @click.stop
            >
              <li class="px-4 py-2 text-slate-600 hover:bg-slate-100">
                <RouterLink :to="{ name: 'rezultate_2025' }">Rezultate 2025</RouterLink>
              </li>
              <li class="px-4 py-2 text-slate-600 hover:bg-slate-100">
                <RouterLink :to="{ name: 'rezultate_2024' }">Rezultate 2024</RouterLink>
              </li>
            </ul>
          </li>
          <li class="cursor-pointer hover-underline-animation transition-duration:150ms">
            <RouterLink :to="{ name: 'participanti' }">Participanți</RouterLink>
          </li>
          <li class="cursor-pointer hover-underline-animation transition-duration:150ms">
            <RouterLink :to="{ name: 'galerie' }">Galerie</RouterLink>
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
        <div class="flex sm:hidden flex-1 justify-end relative z-50">
          <i class="text-3xl fas fa-bars cursor-pointer " @click="toggleMenu"></i>
        </div>
      </nav>
      <transition name="fade" @before-enter="onEnter" @leave="onLeave">
        <HamburgerMenu v-if="isSmallScreen && isMenuOpen" @close="toggleMenu" />
      </transition>
      <div v-show="isMenuOpen" class="w-full h-full relative z-50 bg-gray-400"></div>
    </header>
  </div>
  <scrollToTopBtn></scrollToTopBtn>
  <RouterView></RouterView>
  <!-- Footer -->
  <footer class="bg-gray-900 py-8">
  <div class="container mx-auto px-4 flex flex-col gap-8">

    <!-- Copyright -->
    <div class="text-center md:text-left">
      <h5 class="text-white text-sm md:text-base">
        <a href="https://clubmontan.ro/">
          Copyright ©2025 Club Sportiv Montan Sibiu – CSMS.
          Toate drepturile rezervate.
        </a>
      </h5>
    </div>

    <!-- Links -->
    <ul class="flex flex-col md:flex-row items-center justify-center md:justify-start
         gap-3 md:gap-8 text-white uppercase text-sm md:text-base
         font-semibold tracking-wide text-center"
    >
      <li class="hover-underline-animation text-white">
        <a href="https://anpc.ro/">ANPC</a>
      </li>
      <li class="hover-underline-animation">
        <a href="https://consumer-redress.ec.europa.eu/site-relocation_en">SOL</a>
      </li>
      <li class="hover-underline-animation">
        <RouterLink :to="{ name: 'regulament' }">Regulament</RouterLink>
      </li>
      <li class="hover-underline-animation">
        <RouterLink :to="{ name: 'GDPR' }">Politica GDPR</RouterLink>
      </li>
      <li class="hover-underline-animation">
        <RouterLink :to="{ name: 'PoliticaRetur' }">Politica de retur</RouterLink>
      </li>
      <li class="hover-underline-animation">
        <RouterLink :to="{ name: 'Organizare' }">Contact</RouterLink>
      </li>
    </ul>

    <!-- Social media -->
    <div class="flex justify-center gap-8">
      <a
        href="https://www.instagram.com/turnurosuchallenge"
        target="_blank"
        class="text-white text-2xl hover:text-bookmark-purple transition"
      >
        <i class="fab fa-instagram"></i>
      </a>

      <a
        href="https://www.facebook.com/people/Turnu-Ro%C8%99u-Challenge/61550549625676/"
        target="_blank"
        class="text-white text-2xl hover:text-bookmark-purple transition"
      >
        <i class="fab fa-facebook-square"></i>
      </a>
    </div>

    <!-- Payment logos -->
    <div class="flex justify-center pt-4">
      <a
        href="https://www.netopia-payments.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="./assets/images/netopia-visa.jpg"
          alt="Plăți online securizate prin Netopia"
          class="h-10 md:h-12 w-auto object-contain
                 transition-transform duration-200 hover:scale-105"
        />
      </a>
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
