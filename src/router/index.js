import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ParticipantiView from '@/views/ParticipantiView.vue';
import RegulamentView from '@/views/RegulamentView.vue';
import ContactView from '@/views/ContactView.vue';
import InscrieriView from '@/views/InscrieriView.vue';
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
      path: '/participanti',
      name: 'participanti',
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
      path: '/curse',
      name: 'curse',
      component: CurseView
    }
  ]
});

export default router;
