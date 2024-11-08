<template>
  <!-- 
    Container for the search bar.
  -->
  <div class="row d-flex justify-content-center">
    <div class="col-md-5">
      <!-- 
        Input field for the search bar.
      -->
      <input
        v-model="searchInput"
        type="text"
        placeholder="Search posts..."
        @input="handleSearch"
      />
      <!-- 
        Button to clear the search input.
      -->
      <button v-if="searchInput" @click="clearSearch">
        Clear
      </button>
    </div>
  </div>
</template>

<script setup>
  // Import necessary Vue functions
  import { ref } from 'vue';
  import { usePostStore } from '@/stores/postStore';

  // Initialize post store
  const postStore = usePostStore();
  const searchInput = ref('');

  // Function to handle search input
  const handleSearch = () => {
    postStore.setSearchQuery(searchInput.value);
  };

  // Function to clear the search input
  const clearSearch = () => {
    searchInput.value = '';
    postStore.setSearchQuery('');
  };
</script>

<!-- 
  Styles for the search bar.
-->

<style scoped>
.search-container {
  margin: 1rem 0;
  
}

input {
  padding: 8px;
  width: 200px;
  margin-right: 10px;
  border-radius: 4px;
}

button {
  padding: 8px 16px;
}
.col-md-5{
  padding-left: 37px;
  padding-top: 80px;
 
}
</style>
