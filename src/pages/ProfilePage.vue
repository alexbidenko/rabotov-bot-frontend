<script setup lang="ts">
import {NTabs, NTabPane, NCard, NButton} from 'naive-ui';
import CandidateCard from '../components/CandidateCard.vue';
import {useQuery} from 'villus';
import {REQUESTS_QUERY, RequestsQuery} from '../api/request';

const {data} = useQuery<RequestsQuery>({
  query: REQUESTS_QUERY,
});
</script>

<template>
  <n-tabs type="line" v-if="data">
    <template #suffix>
      <router-link to="/profile/request">
        <n-button>Создать заявку</n-button>
      </router-link>
    </template>
    <n-tab-pane name="requests" tab="Список заявок">
      <router-link to="/profile/request/1" v-for="request in data?.vacancies" :key="request.id">
        <n-card title="Frontend разработчик" style="margin-bottom: 16px" hoverable>
          Оплата 140 000 р
        </n-card>
      </router-link>
    </n-tab-pane>
    <n-tab-pane name="candidates" tab="Список кандидатов">
      <CandidateCard status="review" />
      <CandidateCard status="meet" />
      <CandidateCard status="review" />
    </n-tab-pane>
  </n-tabs>
</template>
