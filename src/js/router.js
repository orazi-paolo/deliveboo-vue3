import { createWebHistory, createRouter } from 'vue-router'
import AppHome from '../pages/AppHome.vue'
import AppSingleRestaurant from '../pages/AppSingleRestaurant.vue'

const routes = [
  { path: "/", component: AppHome, name: "home" },
  { path: "/restaurants/:id", component: AppSingleRestaurant, name: "restaurants.show" },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, left: 0, behavior: 'smooth' }
    }
  }
})

export default router