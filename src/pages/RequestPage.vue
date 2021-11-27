<script setup lang="ts">
import {NTabs, NTabPane, NCard, NButton, useDialog} from 'naive-ui';
import CandidateCard from '../components/CandidateCard.vue';

const dialog = useDialog();

const deleteRequest = () => {
  dialog.warning({
    title: 'Отклонение заявки',
    content: 'Вы уверены что хотите удалить заявку "Frontend разработчик"?',
    positiveText: 'Подтвердить',
    negativeText: 'Отмена',
  });
};
</script>

<template>
  <n-card style="margin-bottom: 24px" title="Frontend разработчик">
    <template #header-extra>
      <n-button type="error" @click="deleteRequest">Удалить</n-button>
    </template>
    <p>Оплата 140 000 р</p>
    <n-button type="success">Добавить кандидата</n-button>
  </n-card>

  <n-tabs type="line">
    <n-tab-pane name="candidates" tab="Список кандидатов">
      <CandidateCard status="review" />
      <CandidateCard status="meet" />
    </n-tab-pane>
    <n-tab-pane name="recruiters" tab="Список рекрутеров">
      <router-link to="/profile/1">
        <n-card style="margin-bottom: 16px" hoverable>
          Гребенкин Аким Романович
        </n-card>
      </router-link>
      <router-link to="/profile/2">
        <n-card hoverable>
          Солонарь Виктор Евгеньевич
        </n-card>
      </router-link>
    </n-tab-pane>
  </n-tabs>
</template>
