import { defineStore } from 'pinia';

export interface Post {
  id: number;
  title: string;
  description: string;
}

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: JSON.parse(localStorage.getItem('posts') || '[]') as Post[],
  }),
  actions: {
    addPost(title: string, description: string) {
      const newPost = { id: Date.now(), title, description };
      this.posts.push(newPost);
      this.savePosts();  // Сохранение постов в localStorage
    },
    deletePost(id: number) {
      this.posts = this.posts.filter(post => post.id !== id);
      this.savePosts();
    },
    editPost(id: number, title: string, description: string) {
      const post = this.posts.find(post => post.id === id);
      if (post) {
        post.title = title;
        post.description = description;
        this.savePosts();
      }
    },
    savePosts() {
      localStorage.setItem('posts', JSON.stringify(this.posts));
    }
  }
});
