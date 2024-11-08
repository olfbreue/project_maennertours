


<template>
  <!-- 
    Container for blog post list and editor.
  -->
  <div class="container-fluid">
    <!-- 
      Post list component.
    -->
    <div class="row">
      <div class="col-lg-5">
        <PostList />
      </div>
    </div>

    <!-- 
      Editor section for creating and editing blog posts.
    -->
    <div class="row d-flex justify-content-center">
      <div class="col-lg-5">
        <div class="blog-container">
          <!-- 
            Editor section for authenticated users.
          -->
          <div v-if="user" class="editor-section">
            <!-- 
              Input field for post title.
            -->
            <div class="mb-3">
              <input class="form-control" v-model="title" placeholder="Enter post title..." />
            </div>
            <!-- 
              Toolbar for formatting options.
            -->
            <div class="toolbar mb-3">
              <button @click="toggleBold" :class="{ active: editor.isActive('bold') }" class="btn btn-secondary">Bold</button>
              <button @click="toggleItalic" :class="{ active: editor.isActive('italic') }" class="btn btn-secondary">Italic</button>
              <button @click="toggleStrike" :class="{ active: editor.isActive('strike') }" class="btn btn-secondary">Strike</button>
              <button @click="toggleCode" :class="{ active: editor.isActive('code') }" class="btn btn-secondary">Code</button>
            </div>
            <!-- 
              Editor content area.
            -->
            <editor-content class="tiptap-editor" :editor="editor" />
            <!-- 
              Button to commit post changes.
            -->
            <button @click="commitPost" class="btn btn-primary mt-3">{{ isEditing ? 'Update Post' : 'Add Post' }}</button>
          </div>
          <!-- 
            Message for unauthenticated users.
          -->
          <div v-else class="sign-in-message">
            <p class="text-center">Please sign in to create posts.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 
      List of blog posts.
    -->
    <div class="row d-flex justify-content-center">
      <div class="col-lg-5">
        <ul class="post-list">
          <li v-for="post in posts" :key="post.id" class="post-item">
            <!-- 
              Post title.
            -->
            <h3 class="post-title">{{ post.title }}</h3>
            <!-- 
              Post date.
            -->
            <p class="post-date">{{ post.date }}</p>
            <!-- 
              Post content.
            -->
            <div class="post-content" v-html="post.content"></div>
            <!-- 
              Post actions for authenticated users.
            -->
            <div class="post-actions" v-if="user">
              <button @click="editPost(post)" class="btn btn-warning">Edit</button>
              <button @click="deletePost(post.id)" class="btn btn-danger">Delete</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
  // Import necessary Vue and Supabase functions
  import { ref, onMounted } from 'vue';
  import { EditorContent, useEditor } from '@tiptap/vue-3';
  import StarterKit from '@tiptap/starter-kit';
  import Image from '@tiptap/extension-image';
  import { useSupabase } from '../composables/useSupabase';
  import PostList from '@/components/PostList.vue';

  // Initialize Supabase instance
  const supabase = useSupabase();

  // Initialize post title, posts, user, and editing state
  const title = ref('');
  const posts = ref([]);
  const user = ref(null);
  const isEditing = ref(false);
  const editingPostId = ref(null);

  // Initialize editor instance
  const editor = useEditor({ extensions: [StarterKit, Image], content: '' });

  // Define functions for formatting options
  const toggleBold = () => editor.value?.chain().focus().toggleBold().run();
  const toggleItalic = () => editor.value?.chain().focus().toggleItalic().run();
  const toggleStrike = () => editor.value?.chain().focus().toggleStrike().run();
  const toggleCode = () => editor.value?.chain().focus().toggleCode().run();

  // Define function for inserting images
  const insertImage = async (event) => {
    // Upload image to server and insert into editor
  };

  // Define function for fetching posts
  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase.from('posts').select('*')
        .order('date', { ascending: false });
      if (error) throw error;
      posts.value = data;
    } catch (err) {
      console.error('Error fetching posts:', err.message);
    }
  };

  // Define function for committing post changes
  const commitPost = async () => {
    try {
      const editorContent = editor.value.getHTML();

      if (isEditing.value) {
        // Update existing post
      } else {
        // Create new post
      }

      title.value = '';
      editor.value.commands.clearContent();
    } catch (err) {
      console.error('Error committing post:', err.message);
    }
  };

  // Define function for deleting posts
  const deletePost = async (postId) => {
    try {
      const { error } = await supabase.from('posts').delete().eq('id', postId);
      if (error) throw error;
      posts.value = posts.value.filter(post => post.id !== postId);
    } catch (err) {
      console.error('Error deleting post:', err.message);
    }
  };

  // Define function for editing posts
  const editPost = (post) => {
    title.value = post.title;
    editor.value?.commands.setContent(post.content);
    isEditing.value = true;
    editingPostId.value = post.id;
  };

  // Initialize user state and fetch posts on mount
  onMounted(async () => {
    await fetchPosts();

    try {
      const sessionResponse = await supabase.auth.getSession();
      user.value = sessionResponse.data.session?.user || null;
    } catch (err) {
      console.error('Get session error:', err.message);
    }

    supabase.auth.onAuthStateChange((_event, session) => {
      user.value = session?.user || null;
    });
  });
</script>

<!-- 
  Styles for blog post list and editor.
-->
<style scoped>
.container{
  display: flex;
  flex-direction: column;
  min-height: 100px;
  border: 1px solid #9b1d1d;
  background-image: url("../assets/tarmac.png");
}
.blog-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.editor-section, .sign-in-message {
  margin-bottom: 40px;
}

.title-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.toolbar {
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
}

button {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #f0f0f0;
}

.commit-button {
  background-color: #007bff;
  color: white;
}

.commit-button:hover {
  background-color: #0056b3;
}

.post-list {
  list-style-type: none;
  padding: 20px !important;
}

.post-item {
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.post-title {
  margin: 0 0 10px;
  font-size: 24px;
  color: #333;
}

.post-content {
  color: #555;
  margin-bottom: 15px;
}

.post-date {
  font-size: 12px;
  color: #888;
}

.post-actions {
  display: flex;
  gap: 10px;
}

.edit-btn {
  background-color: #ffc107;
  color: white;
}

.delete-btn {
  background-color: #dc3545;
  color: white;
}

.post-content img,
.tiptap-editor img {
  width: 540px; /* Set consistent width inside both editor and post content */
  height: auto;
  display: block;
  margin: 10px auto; /* Center the image */

}

.tiptap-editor {
  border: 1px solid #ccc;
  min-height: 150px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  color: #333;
}

button.active {
  background-color: #ddd;
}
h1{
  color:white;
  padding: 20px;
}
</style>
