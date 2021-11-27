<script setup lang="ts">
import {NButton, NLayout, NLayoutContent, NLayoutHeader} from 'naive-ui';
import {useRouter} from 'vue-router';

const router = useRouter();
</script>

<template>
  <n-layout class="profileLayout">
    <n-layout-header bordered class="profileLayout__header" position="absolute">
      <router-link to="/">
        <n-button :bordered="false">Главная</n-button>
      </router-link>
      <n-button :bordered="false" @click="router.back">Назад</n-button>
    </n-layout-header>
    <n-layout-content content-style="padding: 24px 10vw">
      <router-view></router-view>
    </n-layout-content>
  </n-layout>
</template>

<style scoped lang="scss">
.profileLayout {
  padding-top: 64px;

  &__header {
    padding: 0 32px;
    height: 64px;
    display: flex;
    align-items: center;
    z-index: 10;
  }
}
</style>
