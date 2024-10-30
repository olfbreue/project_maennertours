
import {createRouter, createWebHistory} from 'vue-router';
import SocialMedia from '@/views/SocialMedia.vue'; // Adjust the path as necessary
import HomeView from '@/views/HomeView.vue';



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/SocialMedia',
        name: 'SocialMedia',
        component: SocialMedia
      }
      // Add other routes here
    ]
  })
  
  export default router
