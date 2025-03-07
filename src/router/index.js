/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        // Rutas de Funciones
        {
          path: 'functions/accessibility',
          name: 'accessibility',
          component: () => import('@/views/functions/AccessibilityView.vue'),
        },
        {
          path: 'functions/aliasing',
          name: 'aliasing',
          component: () => import('@/views/functions/AliasingView.vue'),
        },
        {
          path: 'functions/layout',
          name: 'layout',
          component: () => import('@/views/functions/LayoutView.vue'),
        },

        // Rutas de Estilos
        {
          path: 'styles/colors',
          name: 'colors',
          component: () => import('@/views/styles/ColorsView.vue'),
        },
        {
          path: 'styles/transitions',
          name: 'transitions',
          component: () => import('@/views/styles/TransitionsView.vue'),
        },
        {
          path: 'styles/themes',
          name: 'themes',
          component: () => import('@/views/styles/ThemesView.vue'),
        },
        // rutas componentes
        {
          path: 'components/buttons',
          name: 'buttons',
          component: () => import('@/views/components/ButtonsView.vue'),
        },
        {
          path: 'components/cards',
          name: 'cards',
          component: () => import('@/views/components/CardsView.vue'),
        },
        {
          path: 'components/chips',
          name: 'chips',
          component: () => import('@/views/components/ChipsView.vue'),
        },
        {
          path: 'components/dialogs',
          name: 'dialogs',
          component: () => import('@/views/components/DialogsView.vue'),
        },
        {
          path: 'components/expansion-panels',
          name: 'expansion-panels',
          component: () => import('@/views/components/ExpansionPanelsView.vue'),
        },
        {
          path: 'components/menus',
          name: 'menus',
          component: () => import('@/views/components/MenusView.vue'),
        },
        {
          path: 'components/overlays',
          name: 'overlays',
          component: () => import('@/views/components/OverlaysView.vue'),
        },


        // Redirección por defecto
        {
          path: '',
          redirect: '/functions/accessibility',
        },
      ],
    },
  ],
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error');
      localStorage.setItem('vuetify:dynamic-reload', 'true');
      location.assign(to.fullPath);
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload');
});

export default router;
