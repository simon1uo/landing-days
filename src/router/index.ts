import { createRouter, createWebHistory } from 'vue-router'

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

  ],
})

export default router
