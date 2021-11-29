<script setup lang="ts">
import {NConfigProvider, NLoadingBarProvider, NDialogProvider, NMessageProvider} from 'naive-ui';
import {lightTheme} from 'naive-ui/es/themes/light';

</script>

<template>
  <n-config-provider :theme="lightTheme">
    <n-dialog-provider>
      <n-loading-bar-provider>
        <n-message-provider>
          <router-view />
        </n-message-provider>
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
