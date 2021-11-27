<script lang="ts" setup>
import {NCard, NInput, NButton, NForm} from 'naive-ui';
import {ref} from 'vue';
import {useMutation} from 'villus';
import {gql} from 'graphql-tag/lib';
import {useRouter} from 'vue-router';

const router = useRouter();

const login = ref('');
const password = ref('');

const {execute} = useMutation<{ token: string }>(gql`
  mutation TokenAuth {
    tokenAuth(
      username: "$login",
      password: "$password"
    )
    {
      token
    }
  }
`);

const submit = () => {
  if (login.value === 'admin') localStorage.setItem('type', 'recruiter');
  else localStorage.setItem('type', 'company');
  router.push('/profile');

  return;
  execute({login: login.value, password: password.value}).then(console.log).catch(console.warn);
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
