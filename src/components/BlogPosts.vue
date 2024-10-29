<template>
  <div class="blog-container">
    <div v-if="user" class="editor-section">
      <input class="title-input" v-model="title" placeholder="Enter post title..." />

      <div class="toolbar">
        <button @click="toggleBold" :class="{ active: editor.isActive('bold') }">Bold</button>
        <button @click="toggleItalic" :class="{ active: editor.isActive('italic') }">Italic</button>
        <button @click="toggleStrike" :class="{ active: editor.isActive('strike') }">Strike</button>
        <button @click="toggleCode" :class="{ active: editor.isActive('code') }">Code</button>
        <input type="file" @change="insertImage" accept="image/*" />
      </div>

      <editor-content class="tiptap-editor" :editor="editor" />
      <button class="commit-button" @click="commitPost">{{ isEditing ? 'Update Post' : 'Add Post' }}</button>
    </div>

    <div v-else class="sign-in-message">
      <p>Please sign in to create posts.</p>
    </div>

    <!-- Post list -->
    <ul class="post-list">
      <li v-for="post in posts" :key="post.id" class="post-item">
        <h3 class="post-title">{{ post.title }}</h3>
        <p class="post-date">{{ post.date }}</p>
        <div class="post-content" v-html="post.content"></div>
        
        <div class="post-actions" v-if="user">
          <button @click="editPost(post)" class="edit-btn">Edit</button>
          <button @click="deletePost(post.id)" class="delete-btn">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { EditorContent, useEditor } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import { useSupabase } from '../composables/useSupabase';

const supabase = useSupabase();

const title = ref('');
const posts = ref([]);
const user = ref(null);
const isEditing = ref(false);
const editingPostId = ref(null);

const editor = useEditor({ extensions: [StarterKit, Image], content: '' });

const toggleBold = () => editor.value?.chain().focus().toggleBold().run();
const toggleItalic = () => editor.value?.chain().focus().toggleItalic().run();
const toggleStrike = () => editor.value?.chain().focus().toggleStrike().run();
const toggleCode = () => editor.value?.chain().focus().toggleCode().run();

const insertImage = async (event) => {
  const files = event.target.files;
  if (!files || !files[0]) return;

  const formData = new FormData();
  formData.append('file', files[0]);

  try {
    const response = await fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) throw new Error(`Upload failed: ${response.statusText}`);

    const { imageUrl } = await response.json();
    editor.value?.chain().focus().setImage({ src: imageUrl }).run();
  } catch (error) {
    console.error('Error uploading image:', error.message);
  }
};

const fetchPosts = async () => {
  try {
    const { data, error } = await supabase.from('posts').select('*')
    .order('date', { ascending: false });;
    if (error) throw error;
    posts.value = data;
  } catch (err) {
    console.error('Error fetching posts:', err.message);
  }
}; 



const commitPost = async () => {
  try {
    const editorContent = editor.value.getHTML();

    if (isEditing.value) {
      const { data, error } = await supabase.from('posts')
        .update({ title: title.value, content: editorContent })
        .eq('id', editingPostId.value);

      if (error) throw error;

      const index = posts.value.findIndex(p => p.id === editingPostId.value);
      if (index !== -1) {
        posts.value[index] = { ...data[0] };
      }

      isEditing.value = false;
      editingPostId.value = null;
      } else {
        const { data, error } = await supabase.from('posts').insert([
          {
            title: title.value,
            content: editorContent,
            user_id: user.value?.id
          }
        ]).select();

        if (error) throw error;

        posts.value.push(...data);
      }

      title.value = '';
      editor.value.commands.clearContent();
    } catch (err) {
      console.error('Error committing post:', err.message);
    }
  };

const deletePost = async (postId) => {
  try {
    const { error } = await supabase.from('posts').delete().eq('id', postId);
    if (error) throw error;
    posts.value = posts.value.filter(post => post.id !== postId);
  } catch (err) {
    console.error('Error deleting post:', err.message);
  }
};

const editPost = (post) => {
  title.value = post.title;
  editor.value?.commands.setContent(post.content);
  isEditing.value = true;
  editingPostId.value = post.id;
};

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

<style>
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
  padding: 0;
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
}

button.active {
  background-color: #ddd;
}
</style>