import { createWebHistory, createRouter } from 'vue-router'

import App from '../App.vue'
import PlateShow from '../components/PlateShow.vue'

const routes = [
  
  { path: '/',
    component: App
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