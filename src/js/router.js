import { createWebHistory, createRouter } from 'vue-router'

import AppSingleRestaurant from '../pages/AppSingleRestaurant.vue'

const routes = [
  // { path: "/restaurants/:id", component: AppSingleRestaurant, name: "restaurants.show" }
  { path: "/restaurants", component: AppSingleRestaurant, name: "restaurants.show" }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router