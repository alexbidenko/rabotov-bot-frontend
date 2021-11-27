<script setup lang="ts">
import {NConfigProvider} from 'naive-ui';
import {lightTheme} from 'naive-ui/es/themes/light';
</script>

<template>
  <n-config-provider :theme="lightTheme">
    <router-view />
  </n-config-provider>
</template>

<style>
body {
  margin: 0;
}

a {
  text-decoration: none;
}
</style>
