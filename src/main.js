import '@/assets/styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n';
import translations from './translations.js';
import { createClient } from '@supabase/supabase-js';

// Supabase initialization
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Debug
if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase URL:', supabaseUrl);
    console.error('Supabase Anon Key:', supabaseAnonKey);
    throw new Error('Supabase URL and Anon Key are required.');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// i18n initialization
const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    fallbackLocale: 'en',
    messages: translations,
});

// Create and configure app
const app = createApp(App);

// Use plugins
app.use(i18n);
app.use(createPinia());
app.use(router);

// Provide Supabase
app.provide('supabase', supabase);

// Mount app (only once!)
app.mount('#app');
