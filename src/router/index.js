import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
const Rezultate2024View = () => import('@/views/Rezultate2024View.vue');
const Rezultate2025View = () => import('@/views/Rezultate2025View.vue');
const ParticipantiView = () => import('@/views/ParticipantiView.vue');
const RegulamentView = () => import('@/views/RegulamentView.vue');
const ContactView = () => import('@/views/ContactView.vue');
const InscrieriPicturaView = () => import('@/views/InscrieriPicturaView.vue');
const CurseView = () => import('@/views/CurseView.vue');
const GalerieView = () => import('@/views/GalerieView.vue');
const GdprView = () => import('@/views/GdprView.vue');
const PoliticaReturView = () => import('@/views/PoliticaReturView.vue');
const OrganizareView = () => import('@/views/OrganizareView.vue');
const RegisterRunnersView = () => import('@/views/RegisterRunnersView.vue');
const TermsConditionsView = () => import('@/views/TermsConditionsView.vue');

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
    redirect: { name: 'Inregistrare' }
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
  },
  {
    path: '/gdpr',
    name: 'GDPR',
    component: GdprView
  },
  {
    path: '/politica-de-retur',
    name: 'PoliticaRetur',
    component: PoliticaReturView
  },
  {
    path: '/organizare',
    name: 'Organizare',
    component: OrganizareView
  },
  {
    path: '/inregistrare',
    name: 'Inregistrare',
    component: RegisterRunnersView
  },
  {
    path: '/termen-si-conditii',
    name: 'TermenConditii',
    component: TermsConditionsView
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    // Always scroll to top when navigating to a new route
    return { top: 0 };
  }
});

export default router;
