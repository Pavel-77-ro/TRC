import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import Participanti2024View from '@/views/Participanti2024View.vue';
import Participanti2025View from '@/views/Participanti2025View.vue';
import RegulamentView from '@/views/RegulamentView.vue';
import ContactView from '@/views/ContactView.vue';
import InscrieriView from '@/views/InscrieriView.vue';
import InscrieriPicturaView from '@/views/InscrieriPicturaView.vue';
import CurseView from '@/views/CurseView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/participanti2024',
      name: 'participanti_2024',
      component: Participanti2024View
    },
    {
      path: '/participanti2025',
      name: 'participanti_2025',
      component: Participanti2025View
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
    }
  ]
});

export default router;
