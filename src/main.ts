import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import userStore, {userKey} from './store/user';
import {createClient, defaultPlugins} from 'villus';

const client = createClient({
  url: 'https://api-rabotov.admire.social/gql/',
  use: [
    ({opContext, afterQuery}) => {
      if (localStorage.TOKEN) opContext.headers.Authorization = `JWT ${localStorage.TOKEN}`;
      afterQuery((r) => {
        if (!r.error) r.data = r.data[Object.keys(r.data)[0]];
      });
    },
    ...defaultPlugins(),
  ],
});

createApp(App).use(router).use(userStore, userKey).use(client).mount('#app');
