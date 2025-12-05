import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './styles/main.css'

const Home = () => import('./views/Home.vue')
const Game = () => import('./views/Game.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/play', component: Game }
  ]
})

createApp(App).use(router).mount('#app')
