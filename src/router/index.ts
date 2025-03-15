import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage/HomeView.vue'),
      children: [
        {
          path: '/about',
          name: 'about',
          component: () => import('@/views/HomePage/AboutView.vue'),
        },
      ],
    },
    ...routes,

  ],
})

export default router
