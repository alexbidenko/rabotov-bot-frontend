import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import userStore, {userKey} from './store/user';
import {createClient} from 'villus';

const client = createClient({
  url: 'https://api-rabotov.admire.social/gql/',
});

createApp(App).use(router).use(userStore, userKey).use(client).mount('#app');
