<template>
  <div class="post-input">
    <div v-if="!isFormOpen" class="post-input__add-field" @click="toggleForm">
      <v-icon class="post-input__icon">mdi-plus</v-icon>
      <span class="post-input__label">Добавить пост</span>
    </div>
    <div v-else class="post-input__form">
      <v-text-field
        v-model="newPostTitle"
        label="Название поста"
        class="post-input__field"
        variant="outlined"
      ></v-text-field>
      <v-textarea
        v-model="newPostDescription"
        label="Описание поста"
        class="post-input__textarea"
        variant="outlined"
        auto-grow
        rows="1"
      ></v-textarea>
      <v-btn @click="addPost" class="post-input__submit-btn" block>
        Добавить пост
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isFormOpen = ref(false);
const newPostTitle = ref('');
const newPostDescription = ref('');
const emit = defineEmits(['addPost']);

const toggleForm = () => {
  isFormOpen.value = !isFormOpen.value;
};

const addPost = () => {
  if (newPostTitle.value.trim()) {
    emit('addPost', newPostTitle.value, newPostDescription.value);
    newPostTitle.value = '';
    newPostDescription.value = '';
    isFormOpen.value = false;
  }
};
</script>

<style scoped lang="scss">
.post-input {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;

  &__add-field {
    width: 100%;
    padding: 20px;
    background-color: $background-color;
    color: $header-text-color;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: $box-shadow-post;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: $background-color-hover;
    }
  }

  &__label{
    color: $header-text-color; 
    font-weight: 700;
  }

  &__icon {
    font-size: 24px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: $background-color;
    padding: 20px;
    border-radius: 8px;
    box-shadow: $box-shadow-post;
    width: 100%;
  }

  &__field,
  &__textarea {
    width: 100%;
  }

  &__submit-btn {
    background-color: $background-button-color;
    padding: 10px 20px;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    font-weight: $font-weight-bold;
    
    &:hover {
      background-color: $background-button-color-hover;
    }
  }
}
</style>
