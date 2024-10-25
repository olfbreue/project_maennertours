
<template>
  <div>
    <div v-if="user">
      <input v-model="title" placeholder="Title" />
      <!-- TipTap Editor -->
      <editor-content class="tiptap-editor":editor="editor" />
      <button @click="addPost">Add Post</button>
    </div>
    <div v-else>
      <p>Please sign in to create posts.</p>
    </div>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <div v-html="post.content"></div>
        <p>{{ post.date }}</p>
        <button @click="editPost(post)">Edit</button>
        <button @click="deletePost(post.id)">Delete</button>
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

const title = ref('');
const posts = ref([]);
const user = ref(null);

const editor = useEditor({
  extensions: [StarterKit, Image],
  content: '',
  onCreate: () => {
    console.log('Editor initialized');
  },
  onUpdate: ({ editor }) => {
    console.log('Editor content:', editor.getHTML());
  }
});

const supabase = useSupabase();

const fetchPosts = async () => {
  try {
    const { data, error } = await supabase.from('posts').select('*');
    if (error) throw error;
    posts.value = data;
  } catch (err) {
    console.error('Error fetching posts:', err.message);
  }
};

const addPost = async () => {
  try {
    if (!editor.value) {
      throw new Error('Editor is not initialized yet.');
    }

    // Retrieve content using the current editor instance
    const editorContent = editor.value.getHTML();

    const { data, error } = await supabase.from('posts').insert([
      {
        title: title.value,
        content: editorContent,
        user_id: user.value?.id
      }
    ]).select();

    if (error) throw error;

    posts.value.push(...data);

    title.value = '';
    editor.value.commands.clearContent(); // Resetting using the editor instance
  } catch (err) {
    console.error('Error adding post:', err.message);
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
  editor.commands.setContent(post.content);

  const updatePost = async () => {
    try {
      const { data, error } = await supabase.from('posts')
        .update({ title: title.value, content: editor.getHTML() })
        .eq('id', post.id);

      if (error) throw error;

      const index = posts.value.findIndex(p => p.id === post.id);
      if (index !== -1) {
        posts.value[index] = { ...post, ...data[0] };
      }

      title.value = '';
      editor.commands.clearContent();
    } catch (err) {
      console.error('Error updating post:', err.message);
    }
  };

  addPost = updatePost;
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


.tiptap-editor {
  border: 1px solid #ccc; /* Adds a border to see the editor's boundaries */
  min-height: 150px; /* Ensures there's some height to make the editor visible */
  padding: 10px;
}
</style>
