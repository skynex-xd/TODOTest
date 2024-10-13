import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';
import './styles/main.scss';

const vuetify = createVuetify({
  components,
  directives,
});

const pinia = createPinia();

createApp(App).use(vuetify).use(pinia).mount('#app');
