<template>
    <transition-group name="post" tag="v-list" class="post-list__items" move-class="post-move">
      <PostItem
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :description="post.description"
        :selected-post="selectedPost"
        :hovered-post="hoveredPost"
        @editPost="editPost"
        @deletePost="deletePost"
        @selectPost="selectPost"
        @hoverPost="hoverPost"
      />
    </transition-group>
  </template>
  
  <script setup lang="ts">
  import { computed, ref } from 'vue';
  import { usePostsStore } from '../store/posts';
  import PostItem from './PostItem.vue';
  
  const store = usePostsStore();
  
  const selectedPost = ref<number | null>(null);
  const hoveredPost = ref<number | null>(null);

  const selectPost = (id: number | null) => {
    selectedPost.value = id;
  };

  const hoverPost = (id: number | null) => {
    hoveredPost.value = id;
  };
  
  const editPost = (id: number, title: string, description: string) => {
    store.editPost(id, title, description);
  };
  
  const deletePost = (id: number) => {
    store.deletePost(id);
  };
  
  const props = defineProps({
    searchQuery: String
  });
  
  const posts = computed(() => {
    const query = props.searchQuery || '';
    if (!query.trim()) {
      return store.posts;
    }
    return store.posts.filter(post =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  });

</script>
  
<style scoped lang="scss">
  .post-enter-active, .post-leave-active {
    transition: all 0.5s ease;
  }
  
  .post-enter-from, .post-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
  .post-move {
    transition: transform 0.5s ease;
  }
</style>
  