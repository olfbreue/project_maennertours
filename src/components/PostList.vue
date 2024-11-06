<!-- components/PostList.vue -->
<template>

<SearchBar />
  <div class="posts-container">
  
    
    <div v-if="postStore.error" class="error-message">
      Error loading posts: {{ postStore.error }}
    </div>
    
    <div v-if="postStore.isSearching" class="loading">
      Loading posts...
    </div>
    
    <div v-else-if="!postStore.searchQuery" class="no-results">
      Enter a search term to find posts
    </div>
    
    <div v-else-if="postStore.searchedPosts.length === 0" class="no-results">
      No posts found matching your search
    </div>
    
    <div v-else class="posts-grid">
      <div v-for="post in postStore.searchedPosts" 
           :key="post.id" 
           class="post-card">
        <h3>{{ post.title }}</h3>
        <p>{{ stripHtml(post.content) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { usePostStore } from '@/stores/postStore';
import { storeToRefs } from 'pinia';
import SearchBar from './SearchBar.vue';

const postStore = usePostStore();
const { posts, searchedPosts } = storeToRefs(postStore);

// Function to strip HTML tags
const stripHtml = (html) => {
  if (!html) return '';
  return html.replace(/<\/?[^>]+(>|$)/g, '');
};

onMounted(async () => {
  await postStore.fetchPosts();
});
</script>

<style scoped>
.posts-container {
  color: white;
  padding: 20px;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.post-card {
  border: 1px solid #333;
  padding: 15px;
  border-radius: 8px;
  background-color: white;
  color:#333;
}

.error-message {
  color: #ff4444;
  padding: 10px;
  margin: 10px 0;
  background: rgba(255,0,0,0.1);
  border-radius: 4px;
}

.no-results {
  text-align: center;
  margin-top: 20px;
  font-style: italic;
}
</style>
