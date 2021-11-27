<script setup lang="ts">
import {NConfigProvider, NLoadingBarProvider, NDialogProvider} from 'naive-ui';
import {lightTheme} from 'naive-ui/es/themes/light';

</script>

<template>
  <n-config-provider :theme="lightTheme">
    <n-dialog-provider>
      <n-loading-bar-provider>
        <router-view />
      </n-loading-bar-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<style>
body {
  margin: 0;
  background-color: #fafafa;
}

a {
  text-decoration: none;
}

.n-layout {
  background-color: #fafafa !important;
}
</style>
