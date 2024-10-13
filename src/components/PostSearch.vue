<template>
    <v-text-field
      v-model="searchQuery"
      label="Поиск поста"
      class="post-search__input"
      variant="outlined"
    >
    </v-text-field>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps({
    modelValue: {
      type: String,
      required: true,
    }
  });
  const emit = defineEmits(['update:modelValue']);
  const searchQuery = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
  });
</script>
  
<style scoped lang="scss">

</style>
  