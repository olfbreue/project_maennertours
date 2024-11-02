<!-- AuthComponent.vue -->
<template>
    <div>
      <input v-model="email" placeholder="Email" />
      <input v-model="password" placeholder="Password" type="password" />
      <button @click="handleSignUp"  v-if="!isLoggedIn">Sign Up</button>
      <button @click="handleSignIn"  v-if="!isLoggedIn">Sign In</button>
      <button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
      <p v-if="user">Signed in as: {{ user.email }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { useSupabase } from '../composables/useSupabase';
  
  const email = ref('');
  const password = ref('');
  const user = ref(null);
  const isLoggedIn = computed(() => user.value !== null);
  
  const supabase = useSupabase();
  
  const handleSignUp = async () => {
    const { error, user: newUser } = await supabase.auth.signUp({
      email: email.value,
      password: password.value
    });
    if (error) console.error('Signup Error:', error.message);
    else user.value = newUser;
  };
  
  const handleSignIn = async () => {
    const { error, user: loggedInUser } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    });
    if (error) console.error('Signin Error:', error.message);
    else user.value = loggedInUser;
  };
  
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Signout Error:', error.message);
    else user.value = null;
  };
  
  onMounted(() => {
    // Set initial user state from session
    const session = supabase.auth.getSession();
    user.value = session?.user || null;
  
    // Listen for authentication state changes
    supabase.auth.onAuthStateChange((_event, session) => {
      user.value = session?.user || null;
    });
  });
  </script>