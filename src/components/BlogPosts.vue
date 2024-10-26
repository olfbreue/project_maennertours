<template>
  <div>
    <div v-if="user">
      <input v-model="title" placeholder="Title" />
      
      <div class="toolbar">
        <button @click="toggleBold" :class="{ active: editor.isActive('bold') }">Bold</button>
        <button @click="toggleItalic" :class="{ active: editor.isActive('italic') }">Italic</button>
        <button @click="toggleStrike" :class="{ active: editor.isActive('strike') }">Strike</button>
        <button @click="toggleCode" :class="{ active: editor.isActive('code') }">Code</button>
        <input type="file" @change="insertImage" accept="image/*" />
      </div>

      <editor-content class="tiptap-editor" :editor="editor" />
      <button @click="commitPost">{{ isEditing ? 'Update Post' : 'Add Post' }}</button>
    </div>
    <div v-else>
      <p>Please sign in to create posts.</p>
    </div>

    <!-- Post list always visible -->
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <div class="post-content" v-html="post.content"></div>
        <p>{{ post.date }}</p>

       <!--
        <h3 v-if="!user">{{ post.title }}</h3>
        <div  v-if="!user" class="post-content" v-html="post.content"></div>
        <p  v-if="!user">{{ post.date }}</p> --> 

        <button v-if="user" @click="editPost(post)">Edit</button>
        <button v-if="user" @click="deletePost(post.id)">Delete</button>
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

// Check if the client is initialized
const supabase = useSupabase();

const title = ref('');
const posts = ref([]);
const user = ref(null);
const isEditing = ref(false);
const editingPostId = ref(null);

const editor = useEditor({
  extensions: [StarterKit, Image],
  content: ''
});

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
    const { data, error } = await supabase.from('posts').select('*');
    if (error) throw error;
    posts.value = data;
  } catch (err) {
    console.error('Error fetching posts:', err.message);
  }
};

// Add or update post
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

// Delete post
const deletePost = async (postId) => {
  try {
    const { error } = await supabase.from('posts').delete().eq('id', postId);
    if (error) throw error;
    posts.value = posts.value.filter(post => post.id !== postId);
  } catch (err) {
    console.error('Error deleting post:', err.message);
  }
};

// Edit post
const editPost = (post) => {
  title.value = post.title;
  editor.commands.setContent(post.content);
  isEditing.value = true;
  editingPostId.value = post.id;
};

// Initial setup for authentication and fetching posts
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
/* Basic styling to ensure the editor and its contents are visible */
.tiptap-editor {
  border: 1px solid #ccc;
  min-height: 150px;
  padding: 10px;
}

.post-content img {
  width: 540px;
  height: auto;
  display: block;
  margin: 0 auto;
}

.toolbar {
  margin-bottom: 10px;
  display: flex;
  gap: 5px;
}

button.active {
  background-color: #ddd;
}
</style>