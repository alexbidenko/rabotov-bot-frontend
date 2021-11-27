import {createWebHistory, createRouter} from 'vue-router';
import ProfileLayout from './layouts/ProfileLayout.vue';
import LoginPage from './pages/LoginPage.vue';
import ProfilePage from './pages/ProfilePage.vue';
import MainPage from './pages/MainPage.vue';
import RegistrationPage from './pages/RegistrationPage.vue';
import RequestPage from './pages/RequestPage.vue';
import CreateRequestPage from './pages/CreateRequestPage.vue';

const routes = [
  {path: '/', name: 'Main', component: MainPage},
  {path: '/auth', name: 'Login', component: LoginPage},
  {path: '/registration', name: 'Registration', component: RegistrationPage},
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileLayout,
    children: [
      {path: '/profile', name: 'MainProfile', component: ProfilePage},
      {path: '/profile/:id', name: 'UserProfile', component: ProfilePage},
      {path: '/profile/request', name: 'CreateRequest', component: CreateRequestPage},
      {path: '/profile/request/:id', name: 'Request', component: RequestPage},
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//     if (to.path !== '/auth' && to.path !== '/sign-up' && !localStorage.getItem('token')) {
//         next('/auth');
//     } else next();
// });

export default router;
