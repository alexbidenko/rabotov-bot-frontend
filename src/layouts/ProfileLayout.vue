<script setup lang="ts">
import {NButton, NLayout, NLayoutContent, NLayoutHeader, NSpace, NButtonGroup} from 'naive-ui';
import {useRouter} from 'vue-router';
import {useUserStore} from '../store/user';
import {useMutation} from 'villus';
import {GET_USER_MUTATION, GetUserMutation} from '../api/user';

const router = useRouter();
const store = useUserStore();

const getUserMutation = useMutation<GetUserMutation>(GET_USER_MUTATION);

if (!localStorage.TOKEN) {
  router.push('/auth');
} else {
  getUserMutation.execute({token: localStorage.TOKEN}).then(({data}) => {
    store.commit('setUser', data.payload);
  });
}

const logout = () => {
  localStorage.removeItem('TOKEN');
  store.commit('logout');
  router.push('/auth');
};
</script>

<template>
  <n-layout class="profileLayout">
    <n-layout-header bordered class="profileLayout__header" position="absolute">
      <n-space justify="space-between" style="width: 100%">
        <n-button-group>
          <router-link to="/">
            <n-button :bordered="false">Главная</n-button>
          </router-link>
          <n-button :bordered="false" @click="router.back" v-if="router.currentRoute.value.path !== '/profile'">Назад</n-button>
        </n-button-group>
        <n-button :bordered="false" @click="logout">Выход</n-button>
      </n-space>
    </n-layout-header>
    <n-layout-content content-style="padding: 24px 10vw" v-if="store.state.isAuthorized">
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
