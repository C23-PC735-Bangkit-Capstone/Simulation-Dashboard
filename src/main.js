import './assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import VueConfetti from 'vue-confetti'

// Import route components
import App from './App.vue'
import Introduction from './views/IntroductionView.vue'
import Problem from './views/ProblemView.vue'
import Thanks from './views/ThanksView.vue'

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Introduction },
    { path: '/problem', component: Problem },
    { path: '/thanks', component: Thanks }
  ],
  scrollBehavior(to, from, savedPosition) {
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
