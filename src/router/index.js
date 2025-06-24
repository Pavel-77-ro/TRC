import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import Rezultate2024View from '@/views/Rezultate2024View.vue';
import Rezultate2025View from '@/views/Rezultate2025View.vue';
import ParticipantiView from '@/views/ParticipantiView.vue';
import RegulamentView from '@/views/RegulamentView.vue';
import ContactView from '@/views/ContactView.vue';
import InscrieriView from '@/views/InscrieriView.vue';
import InscrieriPicturaView from '@/views/InscrieriPicturaView.vue';
import CurseView from '@/views/CurseView.vue';
import GalerieView from '@/views/GalerieView.vue';

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/rezultate/2024',
      name: 'rezultate_2024',
      component: Rezultate2024View
    },
    {
      path: '/rezultate/2025',
      name: 'rezultate_2025',
      component: Rezultate2025View
    },
    {
      path: '/participanti2025',
      name: 'participanti_2025',
      component: ParticipantiView
    },
    {
      path: '/regulament',
      name: 'regulament',
      component: RegulamentView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/inscrieri',
      name: 'inscrieri',
      component: InscrieriView
    },
    {
      path: '/inscrieri_pictura',
      name: 'inscrieri_pictura',
      component: InscrieriPicturaView
    },
    {
      path: '/curse',
      name: 'curse',
      component: CurseView
    },
    {
      path: '/galerie',
      name: 'galerie',
      component: GalerieView
    }
  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    // Always scroll to top when navigating to a new route
    return { top: 0 };
  },
});

export default router;
