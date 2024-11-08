<!-- 
  AuthComponent.vue: Handles user authentication using Supabase.
-->

<script setup>
  // Import necessary Vue and Supabase functions
  import { ref, computed, onMounted } from 'vue';
  import { useSupabase } from '../composables/useSupabase';

  // Initialize user state
  const email = ref(''); // Email input field
  const password = ref(''); // Password input field
  const user = ref(null); // Current user object
  const isLoggedIn = computed(() => user.value !== null); // Computed property to check if user is logged in

  // Initialize Supabase instance
  const supabase = useSupabase();

  // Handle sign up functionality
  const handleSignUp = async () => {
    // Attempt to sign up with Supabase
    const { error, user: newUser } = await supabase.auth.signUp({
      email: email.value,
      password: password.value
    });
    if (error) console.error('Signup Error:', error.message);
    else user.value = newUser; // Update user state if sign up is successful
  };

  // Handle sign in functionality
  const handleSignIn = async () => {
    // Attempt to sign in with Supabase
    const { error, user: loggedInUser } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    });
    if (error) console.error('Signin Error:', error.message);
    else user.value = loggedInUser; // Update user state if sign in is successful
  };

  // Handle sign out functionality
  const handleSignOut = async () => {
    // Attempt to sign out with Supabase
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Signout Error:', error.message);
    else user.value = null; // Update user state if sign out is successful
  };

  // Initialize user state and listen for authentication state changes on mount
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

<!-- 
  Template for authentication form and buttons.
-->

<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <div class="loginArea">
          <form @submit.prevent>
            <!-- Email input field -->
            <div class="form-group mb-3">
              <input 
                type="email"
                v-model="email"
                placeholder="Email"
                class="form-control"
              />
            </div>
            <!-- Password input field -->
            <div class="form-group mb-3">
              <input 
                type="password"
                v-model="password"
                placeholder="Password"
                class="form-control"
              />
            </div>
            <!-- Button group for sign up, sign in, and sign out -->
            <div class="button-group">
              <button class="btn btn-primary me-2" @click="handleSignUp" v-if="!isLoggedIn">Sign Up</button>
              <button class="btn btn-success me-2" @click="handleSignIn" v-if="!isLoggedIn">Sign In</button>
              <button class="btn btn-danger" @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
            </div>
            <!-- Display signed in user's email -->
            <p v-if="user" class="mt-3">Signed in as: {{ user.email }}</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- 
  Styles for authentication form and buttons.
-->

<style scoped>
  .loginArea{
    padding:50px 20px 20px 20px; 
  }
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  input:focus {
    outline: none;
    border-color: #4CAF50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
  }

  .button-group {
    margin-top: 15px;
  }

  button {
    margin-right: 10px;
  }
  .mt-3{
    color: white;
  }
</style>
