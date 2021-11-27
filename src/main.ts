import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import {createClient} from 'villus';

const client = createClient({
  url: 'https://api-rabotov.admire.social/',
});

createApp(App).use(client).use(router).mount('#app');
