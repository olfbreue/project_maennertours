// stores/postStore.js
import { defineStore } from 'pinia';
import { useSupabase } from '../composables/useSupabase';

export const usePostStore = defineStore('postStore', {
  state: () => ({
    posts: [],
    searchQuery: '',
    isSearching: false,
    error: null
  }),

  getters: {
    searchedPosts: (state) => {
      // Return empty array if no search query
      if (!state.searchQuery.trim()) return [];
      
      const query = state.searchQuery.toLowerCase().trim();
      return state.posts.filter(post => 
        post.title?.toLowerCase().includes(query) ||
        post.content?.toLowerCase().includes(query)
      );
    }
  },

  actions: {
    async fetchPosts() {
      const supabase = useSupabase();
      this.isSearching = true;
      
      try {
        console.log('Fetching posts from Supabase...'); // Debug log
        const { data, error } = await supabase
          .from('posts')
          .select('*');

        if (error) {
          console.error('Supabase error:', error); // Debug log
          throw error;
        }

        console.log('Fetched data:', data); // Debug log
        this.posts = data || [];
        
      } catch (err) {
        console.error('Error fetching posts:', err);
        this.error = err.message;
      } finally {
        this.isSearching = false;
      }
    },

    setSearchQuery(query) {
      this.searchQuery = query;
    }
  }
});
