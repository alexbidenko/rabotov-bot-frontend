<script lang="ts" setup>
import {NCard, NInput, NButton, NForm, NCheckbox} from 'naive-ui';
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();

const login = ref('');
const password = ref('');
const repeatPassword = ref('');
const email = ref('');
const firstName = ref('');
const lastName = ref('');
const patronymic = ref('');

const companyName = ref('');
const inn = ref('');
const personal = ref(false);

const companyRegistration = ref(false);

const recruiterRegistrationSubmit = () => {
  localStorage.setItem('type', 'recruiter');
  router.push('/profile');
};

const companyRegistrationSubmit = () => {
  localStorage.setItem('type', 'company');
  router.push('/profile');
};
</script>

<template>
  <div class="registrationPage">
    <n-card title="Регистрация в приложение" class="registrationPage__card">
      <n-form @submit.prevent="recruiterRegistrationSubmit" v-if="!companyRegistration">
        <label class="registrationPage__label">
          <span>Логин</span>
          <n-input v-model:value="login" placeholder="Введите логин" />
        </label>
        <label class="registrationPage__label registrationPage__label_mt">
          <span>Имя</span>
          <n-input v-model:value="firstName" placeholder="Введите имя" type="text" />
        </label>
        <label class="registrationPage__label registrationPage__label_mt">
          <span>Фамилия</span>
          <n-input v-model:value="lastName" placeholder="Введите фамилию" type="text" />
        </label>
        <label class="registrationPage__label registrationPage__label_mt">
          <span>Отчество</span>
          <n-input v-model:value="patronymic" placeholder="Введите отчество" type="text" />
        </label>
        <label class="registrationPage__label registrationPage__label_mt">
          <span>Email</span>
          <n-input v-model:value="email" placeholder="Введите email" type="text" />
        </label>
        <label class="registrationPage__label registrationPage__label_mt">
          <span>Пароль</span>
          <n-input v-model:value="password" placeholder="Введите пароль" type="password" />
        </label>
        <label class="registrationPage__label registrationPage__label_mt">
          <span>Повторите пароль</span>
          <n-input v-model:value="repeatPassword" placeholder="Введите пароль" type="password" />
        </label>

        <n-button class="registrationPage__button" type="success" attr-type="submit">Зарегистрироваться как рекрутер</n-button>
        <n-button class="registrationPage__button" type="success" @click="companyRegistration = true">Зарегистрировать компанию</n-button>
      </n-form>

      <n-form @submit.prevent="companyRegistrationSubmit" v-else>
        <label class="registrationPage__label">
          <span>Название компании</span>
          <n-input v-model:value="companyName" placeholder="Введите название" />
        </label>
        <label class="registrationPage__label registrationPage__label_mt" v-if="!personal">
          <span>ИНН</span>
          <n-input v-model:value="inn" placeholder="Введите ИНН" type="text" />
        </label>
        <n-checkbox v-model:checked="personal" label="Являюсь физическим лицом" style="margin-top: 16px" />

        <n-button class="registrationPage__button" @click="companyRegistration = false">Назад</n-button>
        <n-button class="registrationPage__button" type="success" attr-type="submit">Зарегистрироваться</n-button>
      </n-form>

      <router-link to="/auth">
        <n-button class="registrationPage__button">Уже есть аккаунт</n-button>
      </router-link>
    </n-card>
  </div>
</template>

<style scoped lang="scss">
.registrationPage {
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
    margin-top: 24px;
    width: 100%;

    & + & {
      margin-top: 8px;
    }
  }

  a {
    text-decoration: none;
  }
}
</style>
