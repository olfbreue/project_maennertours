<!-- components/SearchBar.vue -->
<template>
  <div class="search-container">
    <input
      v-model="searchInput"
      type="text"
      placeholder="Search posts..."
      @input="handleSearch"
    />
    <button v-if="searchInput" @click="clearSearch">
      Clear
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { usePostStore } from '@/stores/postStore';

const postStore = usePostStore();
const searchInput = ref('');

const handleSearch = () => {
  postStore.setSearchQuery(searchInput.value);
};

const clearSearch = () => {
  searchInput.value = '';
  postStore.setSearchQuery('');
};
</script>

<style scoped>
.search-container {
  margin: 1rem 0;
}

input {
  padding: 8px;
  width: 200px;
  margin-right: 10px;
}

button {
  padding: 8px 16px;
}
</style>
