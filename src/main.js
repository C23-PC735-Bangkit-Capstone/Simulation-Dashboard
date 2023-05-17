import './assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

// Import route components
import App from './App.vue'
import Introduction from './views/IntroductionView.vue'
import Problem from './views/ProblemView.vue'

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Introduction },
    { path: '/problem', component: Problem }
  ]
})

// Create the Vue app
const app = createApp(App)

// Use the router with the app
app.use(router)

// Mount the app to the DOM
app.mount('#app')
