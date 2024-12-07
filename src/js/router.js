import { createWebHistory, createRouter } from 'vue-router'
import AppListRestaurants from '../pages/AppListRestaurants.vue'
import AppSingleRestaurant from '../pages/AppSingleRestaurant.vue'
// import PlateShow from '../components/PlateShow.vue'
import Home from '../pages/Home.vue'

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/restaurants", component: AppListRestaurants, name: "restaurants" },
  { path: "/restaurants/:id", component: AppSingleRestaurant, name: "restaurants.show" },
  /* { path: '/plate/:id', name: 'plates.show', component: PlateShow }, */
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router