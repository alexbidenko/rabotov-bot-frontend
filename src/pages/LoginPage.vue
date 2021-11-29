<script lang="ts" setup>
import {NCard, NInput, NButton, NForm, useLoadingBar} from 'naive-ui';
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {useUserStore} from '../store/user';
import {GET_USER_MUTATION, GetUserMutation, LOGIN_MUTATION, LoginMutation} from '../api/user';
import {useMutation} from 'villus';

const loader = useLoadingBar();
const router = useRouter();
const store = useUserStore();

const login = ref('');
const password = ref('');

const loginMutation = useMutation<LoginMutation>(LOGIN_MUTATION);
const getUserMutation = useMutation<GetUserMutation>(GET_USER_MUTATION);

if (store.state.isAuthorized) router.push('/profile');

const submit = async () => {
  loader.start();
  try {
    const {data: tokenData} = await loginMutation.execute({login: login.value, password: password.value});
    const {data: userData, error} = await getUserMutation.execute(tokenData);
    if (!error) {
      store.commit('setUser', userData.payload);
      localStorage.setItem('TOKEN', tokenData.token);
      await router.push('/profile');
    }
    loader.finish();
  } catch {
    loader.error();
  }
};
</script>

<template>
  <div class="loginPage">
    <n-card title="Войти в приложение" class="loginPage__card">
      <n-form @submit.prevent="submit">
        <label class="loginPage__label">
          <span>Логин</span>
          <n-input v-model:value="login" placeholder="Введите логин" />
        </label>
        <label class="loginPage__label loginPage__label_mt">
          <span>Пароль</span>
          <n-input v-model:value="password" placeholder="Введите пароль" type="password" />
        </label>

        <n-button class="loginPage__button" style="margin-top: 24px" type="success" attr-type="submit">Войти</n-button>
        <router-link to="/registration" style="margin-top: 8px; display: flex">
          <n-button class="loginPage__button">Создать аккаунт</n-button>
        </router-link>
      </n-form>
    </n-card>
  </div>
</template>

<style scoped lang="scss">
.loginPage {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &__card {
    max-width: 500px;
  }

  &__label {
    display: block;

    span {
      display: block;
      margin-bottom: 8px;
    }

    &_mt span {
      margin-top: 16px;
    }
  }

  &__button {
    width: 100%;
  }

  a {
    text-decoration: none;
  }
}
</style>
