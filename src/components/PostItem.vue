<template>
  <v-list-item
    class="post-item"
    @click="selectPost"
    @mouseover="hoverPost"
    @mouseleave="clearHover"
    :class="{
      'post-item--selected': isSelected,
      'post-item--hovered': isHovered
    }"
  >
    <v-text-field
      v-model="title"
      @blur="editPost"
      class="post-item__field"
      label="Название поста"
      variant="outlined"
    ></v-text-field>
    <v-textarea
      v-model="description"
      @blur="editPost"
      class="post-item__textarea"
      label="Описание поста"
      variant="outlined"
      auto-grow
      rows="1"
    ></v-textarea>
    <v-btn @click="deletePost" class="post-item__submit-btn" block>
      Удалить пост
    </v-btn>
  </v-list-item>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
  id: Number,
  title: String,
  description: String,
  selectedPost: Number as () => number | null,
  hoveredPost: Number as () => number | null,
});

const emit = defineEmits(['deletePost', 'editPost', 'selectPost', 'hoverPost']);
const title = ref(props.title);
const description = ref(props.description);
const isSelected = computed(() => props.selectedPost === props.id);
const isHovered = computed(() => props.hoveredPost === props.id);

const deletePost = () => {
  emit('deletePost', props.id);
};

const editPost = () => {
  emit('editPost', props.id, title.value, description.value);
};

const selectPost = () => {
  emit('selectPost', props.id);
};

const hoverPost = () => {
  emit('hoverPost', props.id);
};

const clearHover = () => {
  emit('hoverPost', null);
};
</script>

<style scoped lang="scss">
.post-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  background-color: $background-color;
  padding: 20px;
  border-radius: 8px !important;
  box-shadow: $box-shadow-post;
  transition: background-color 0.3s ease;
  width: 100%;

  &--hovered {
    background-color: $background-color-hover;
  }

  &--selected {
    background-color: $background-color-hover;
  }

  &__field,
  &__textarea {
    width: 100%;
  }

  &__submit-btn {
    background-color: $delete-button-colo;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    font-weight: $font-weight-bold;

    &:hover {
      background-color: $background-button-color-hover;
    }
  }
}
</style>
