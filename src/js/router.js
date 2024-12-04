import { createWebHistory, createRouter } from 'vue-router'
import AppListRestaurants from '../pages/AppListRestaurants.vue'
import AppSingleRestaurant from '../pages/AppSingleRestaurant.vue'

const routes = [
  { path: "/restaurants", component: AppListRestaurants, name: "restaurants" },
  // { path: "/restaurants/:id", component: AppSingleRestaurant, name: "restaurants.show" },
  { path: "/restaurants/test", component: AppSingleRestaurant, name: "restaurants.show" },

import App from '../App.vue'
import PlateShow from '../components/PlateShow.vue'

const routes = [
  
  { path: "/restaurants", component: AppListRestaurants, name: "restaurants" },
  // { path: "/restaurants/:id", component: AppSingleRestaurant, name: "restaurants.show" },
  { path: "/restaurants/test",
    component: AppSingleRestaurant, name: "restaurants.show"
  },

  {
    path: '/plate/:id', 
    name: 'plate-show',
    component: PlateShow,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router