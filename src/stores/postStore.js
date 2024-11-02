// postStore.js
import { defineStore } from 'pinia';
import { useSupabase } from '../composables/useSupabase';

export const usePostStore = defineStore('postStore', {
  state: () => ({
    posts: []
  }),
  actions: {
    async fetchPosts() {
      const supabase = useSupabase();
      try {
        const { data, error } = await supabase.from('posts').select('*');
        if (error) throw error;
        this.posts = data;
      } catch (err) {
        console.error('Error fetching posts:', err.message);
      }
    }
  }
});