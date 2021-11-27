<script setup lang="ts">
import {NTabs, NTabPane, NCard, NButton} from 'naive-ui';
</script>

<template>
  <n-tabs type="line">
    <template #suffix>
      <router-link to="/profile/request">
        <n-button>Создать заявку</n-button>
      </router-link>
    </template>
    <n-tab-pane name="requests" tab="Список заявок">
      <router-link to="/profile/request/1">
        <n-card title="Frontend разработчик" style="margin-bottom: 16px" hoverable>
          Оплата 140 000 р
        </n-card>
      </router-link>
      <router-link to="/profile/request/2">
        <n-card title="Backend разработчик" hoverable>
          Оплата 150 000 р
        </n-card>
      </router-link>
    </n-tab-pane>
    <n-tab-pane name="candidates" tab="Список кандидатов">
      <n-card style="margin-bottom: 16px">
        Биденко Александр Алексеевич
      </n-card>
      <n-card>
        Копцев Михаил Алексеевич
      </n-card>
    </n-tab-pane>
  </n-tabs>
</template>
