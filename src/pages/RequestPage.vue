<script setup lang="ts">
import {NTabs, NTabPane, NCard} from 'naive-ui';
</script>

<template>
  <n-card style="margin-bottom: 24px" title="Frontend разработчик">
    Оплата 140 000 р
  </n-card>

  <n-tabs type="line">
    <n-tab-pane name="candidates" tab="Список кандидатов">
      <n-card style="margin-bottom: 16px">
        Биденко Александр Алексеевич
      </n-card>
      <n-card>
        Копцев Михаил Алексеевич
      </n-card>
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
