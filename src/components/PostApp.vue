<template>
    <v-container class="app-container">
      <h1 class="app-container__title">TODO</h1>
      <PostSearch v-model="searchQuery" />
      <PostInput @addPost="addPost" />
      <PostList :search-query="searchQuery" />
    </v-container>
</template>
  
<script setup lang="ts">
  import { ref } from 'vue';
  import { usePostsStore } from '../store/posts';
  import PostInput from './PostInput.vue';
  import PostSearch from './PostSearch.vue';
  import PostList from './PostList.vue';
  
  const store = usePostsStore();
  const searchQuery = ref('');
  
  const addPost = (title: string, description: string) => {
    store.addPost(title, description);
  };
</script>

<style scoped lang="scss">

.app-container{
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  &__title {
    text-align: center;
    margin: 32px 0;
  }
}
</style>
  