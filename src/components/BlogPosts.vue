<!-- BlogPosts.vue -->
<template>
    <div>
      <div v-if="user">
        <input v-model="title" placeholder="Title" />
        <textarea v-model="content" placeholder="Content"></textarea>
        <button @click="addPost">Add Post</button>
      </div>
      <div v-else>
        <p>Please sign in to create posts.</p>
      </div>
      
      <ul>
        <li v-for="post in posts" :key="post.id">
          <h3>{{ post.title }}</h3>
          <p>{{ post.content }}</p>
          <p>{{ post.date }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useSupabase } from '../composables/useSupabase';
  
  // Assuming these are already declared correctly
  const title = ref('');
  const content = ref('');
  const posts = ref([]);
  const user = ref(null);
  
  const supabase = useSupabase();
  
  const addPost = async () => {
    try {
      // Log input values and user ID to see what's being submitted
      console.log('Attempting to add post:', {
        title: title.value,
        content: content.value,
        user_id: user.value?.id
      });
  
      // Attempt to insert the post
      const { data, error } = await supabase.from('posts').insert([{ 
        title: title.value, 
        content: content.value, 
        user_id: user.value?.id 
      }]);
  
      // Log the response from Supabase to check for issues
      console.log('Supabase response:', data, error);
  
      if (error) throw error;
  
      // Update posts value if a new post is successfully added
      posts.value.push(...data);
    } catch (err) {
      console.error('Error adding post:', err.message);
    }
  };


  
  onMounted(async () => {
    // Existing initialization code to fetch posts and session
    const { data, error } = await supabase.from('posts').select('*');
    if (error) console.error('Error fetching posts:', error);
    else posts.value = data;
  
    try {
      const sessionResponse = await supabase.auth.getSession();
      user.value = sessionResponse.data.session?.user || null;
    } catch (err) {
      console.error('Get session error:', err.message);
    }
  
    // Same listener for authentication state changes
    supabase.auth.onAuthStateChange((_event, session) => {
      user.value = session?.user || null;
    });
  });
  </script>
  