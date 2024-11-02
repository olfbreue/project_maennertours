<!-- AuthComponent.vue -->
<template>
  <div class="loginArea">
    <form @submit.prevent>
      <div class="form-group mb-3">
        <input 
          type="email"
          v-model="email"
          placeholder="Email"
          class="form-control"
        />
      </div>
      <div class="form-group mb-3">
        <input 
          type="password"
          v-model="password"
          placeholder="Password"
          class="form-control"
        />
      </div>
      <div class="button-group">
        <button class="btn btn-primary me-2" @click="handleSignUp" v-if="!isLoggedIn">Sign Up</button>
        <button class="btn btn-success me-2" @click="handleSignIn" v-if="!isLoggedIn">Sign In</button>
        <button class="btn btn-danger" @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
      </div>
      <p v-if="user" class="mt-3">Signed in as: {{ user.email }}</p>
    </form>
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

  <style scoped>
  .loginArea{
    padding:100px 20px 20px 20px; 
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