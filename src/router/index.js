
import {createRouter, createWebHistory} from 'vue-router';
import SocialMedia from '../views/SocialMedia.vue'; // Adjust the path as necessary
import HomeView from '../views/HomeView.vue';
import TourTracker from '../views/TourTracker.vue';
import BlogView from '../views/BlogView.vue';
import NotFound from "@/views/NotFound.vue"


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
      },
      {
        path: '/TourTracker',
        name: 'TourTracker',
        component: TourTracker
      },
      {
        path: '/BlogView',
        name: 'BlogView',
        component: BlogView
      },
      {path: "/:pathMatch(.*)*", name:"NotFound", component: NotFound}
      // Add other routes here
    ]
  })
  
  export default router
