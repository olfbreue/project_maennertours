// src/composables/useSupabase.js
import { inject } from 'vue';

export function useSupabase() {
  const supabase = inject('supabase');
  if (!supabase) {
    throw new Error('Supabase instance not provided!');
  }
  return supabase;
}