import './assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import VueConfetti from 'vue-confetti'

// Import route components
import App from './App.vue'
import Simulation from './views/SimulationView.vue'

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Simulation },
    { path: '/problem', component: Simulation }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

// Create the Vue app
const app = createApp(App)

// Use the router with the app
app.use(router)

// Use confetti library
app.use(VueConfetti)

// Mount the app to the DOM
app.mount('#app')
