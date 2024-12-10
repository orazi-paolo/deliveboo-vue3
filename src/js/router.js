import { createWebHistory, createRouter } from 'vue-router'
import AppHome from '../pages/AppHome.vue'
import AppSingleRestaurant from '../pages/AppSingleRestaurant.vue'
import PlatesList from '../components/plates/PlatesList.vue'
import PlatesListCard from '../components/plates/PlatesListCard.vue'

const routes = [
  { path: "/", component: AppHome, name: "home" },
  { path: "/restaurants/:slug", component: AppSingleRestaurant, name: "restaurants.show" },
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