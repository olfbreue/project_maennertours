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
  
  const email = ref('');
  const password = ref('');
  const user = ref(null);
  
  const supabase = useSupabase();
  
  const handleSignUp = async () => {
    const { error, data } = await supabase.auth.signUp({
      email: email.value,
      password: password.value
    });
    if (error) console.error('Signup Error:', error.message);
    user.value = data.user;
  };
  
  const handleSignIn = async () => {
    const { error, data } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    });
    if (error) console.error('Signin Error:', error.message);
    user.value = data.user;
  };
  
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Signout Error:', error.message);
    user.value = null;
  };
  
  onMounted(async () => {
    // Fetch the current session
    const { data, error } = await supabase.auth.getSession();
    if (error) console.error('Get session error:', error.message);
    user.value = data.session?.user || null;
  
    // Listen for authentication state changes
    supabase.auth.onAuthStateChange((_event, session) => {
      user.value = session?.user || null;
    });
  });
  </script>