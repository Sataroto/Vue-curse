import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/calendar',
      name: 'calendar',
      component: () => import('../views/CalendarioView.vue')
    },
    {
      path:'/calendar/:round',
      name:"granpremio",
      component: () => import("../views/gpView.vue")
    },
    {
      path: '/favoritos',
      name: "favoritos",
      component: () => import("../views/FavoritosView.vue")
    }
    ,
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue")
    }

  ]
})

export default router
