import { createWebHistory, createRouter } from 'vue-router'
import AppListRestaurants from '../pages/AppListRestaurants.vue'
import AppSingleRestaurant from '../pages/AppSingleRestaurant.vue'

const routes = [
  { path: "/", component: AppListRestaurants, name: "restaurants" },
  { path: "/restaurants/:id", component: AppSingleRestaurant, name: "restaurants.show" },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router