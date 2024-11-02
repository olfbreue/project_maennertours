import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// init supabase

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;


//debug
if (!supabaseUrl || !supabaseAnonKey) {
    // Detailed error logging
    console.error('Supabase URL:', supabaseUrl);
    console.error('Supabase Anon Key:', supabaseAnonKey);
    throw new Error('Supabase URL and Anon Key are required.');
  }
//debug  



const supabase = createClient(supabaseUrl, supabaseAnonKey);

// end init supabase



const app = createApp(App)

app.use(createPinia())
app.use(router)

app.provide('supabase', supabase);

app.mount('#app')
