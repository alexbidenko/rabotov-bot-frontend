<script setup lang="ts">
import {NCard, NInput, NInputNumber, NTag, NSpace, NForm, NSelect, NCheckbox, NButton} from 'naive-ui';
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const CITIES = [
  'Новороссийск',
  'Краснодар',
  'Сочи',
  'Геленджик',
  'Москва',
].map((el) => ({
  label: el,
  value: el,
}));

const CATEGORIES = [
  'IT',
  'Транспорт',
  'Питание',
  'Иное',
].map((el) => ({
  label: el,
  value: el,
}));

const router = useRouter();

const recruiterPrice = ref(0);
const remoteWork = ref(false);

const submit = () => {
  router.push('/profile/request/1');
};
</script>

<template>
  <n-card title="Создание новой заявки" style="max-width: 500px; margin: 0 auto">
    <n-form @submit.prevent="submit">
      <label class="createRequestPage__label">
        <span>Название компании</span>
        <n-input placeholder="Введите название" />
      </label>
      <label class="createRequestPage__label createRequestPage__label_mt">
        <span>Условия</span>
        <n-input placeholder="Введите условия" :autosize="{ minRows: 3 }" type="textarea" />
      </label>
      График работы
      <label class="createRequestPage__label createRequestPage__label_mt">
        <span>Требования</span>
        <n-input placeholder="Введите требования" :autosize="{ minRows: 3 }" type="textarea" />
      </label>
      <label class="createRequestPage__label createRequestPage__label_mt">
        <span>Дополнительная информация</span>
        <n-input placeholder="Введите дополнительную информацию" :autosize="{ minRows: 3 }" type="textarea" />
      </label>
      <label class="createRequestPage__label createRequestPage__label_mt">
        <span>Оплата рекрутеру</span>
        <n-input-number placeholder="Введите оплату" :min="0" :step="1000" v-model:value="recruiterPrice">
          <template #prefix>₽</template>
        </n-input-number>
      </label>
      <label class="createRequestPage__label createRequestPage__label_mt">
        <span>Уровень рекрутера</span>
        <n-space>
          <n-tag :type="recruiterPrice < 500 ? 'success' : undefined">light</n-tag>
          <n-tag :type="recruiterPrice < 5000 && recruiterPrice >= 500 ? 'success' : undefined">medium</n-tag>
          <n-tag :type="recruiterPrice < 10000 && recruiterPrice >= 5000 ? 'success' : undefined">hard</n-tag>
          <n-tag :type="recruiterPrice >= 10000 ? 'success' : undefined">pro</n-tag>
        </n-space>
      </label>
      <label class="createRequestPage__label createRequestPage__label_mt" v-if="!remoteWork">
        <span>Города</span>
        <n-select
          filterable
          multiple
          :options="CITIES"
          placeholder="Укажите города"
        />
      </label>
      <n-checkbox v-model:checked="remoteWork" label="Удаленная работа" style="margin-top: 16px" />
      <label class="createRequestPage__label createRequestPage__label_mt">
        <span>Категории</span>
        <n-select
          filterable
          multiple
          :options="CATEGORIES"
          placeholder="Укажите категории"
        />
      </label>
      <label class="createRequestPage__label createRequestPage__label_mt">
        <span>Количество людей</span>
        <n-input-number placeholder="Введите количество" :min="0"></n-input-number>
      </label>

      <n-button class="createRequestPage__button" type="success" attr-type="submit">Создать заявку</n-button>
    </n-form>
  </n-card>
</template>

<style scoped lang="scss">
.createRequestPage {
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
  }
}
</style>
