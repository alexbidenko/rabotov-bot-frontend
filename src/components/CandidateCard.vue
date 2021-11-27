<script setup lang="ts">
import {NCard, NButton, NButtonGroup, useDialog, NModal, NTag} from 'naive-ui';
import {ref, defineProps} from 'vue';

const {status} = defineProps<{ status: string }>();

const dialog = useDialog();

const showCandidateDetails = ref(false);

const dismiss = () => {
  dialog.warning({
    title: 'Отклонение заявки',
    content: 'Вы уверены что хотите отклонить кандидата Биденко Александра Алексеевича?',
    positiveText: 'Подтвердить',
    negativeText: 'Отмена',
    onPositiveClick: () => {
      showCandidateDetails.value = false;
    },
  });
};
</script>

<template>
  <n-card style="margin-bottom: 16px; cursor: pointer" title="Биденко Александр Алексеевич" hoverable @click="showCandidateDetails = true">
    <template #header-extra>
      <n-tag :type="status === 'review' ? 'info' : 'success'">На {{ status === 'review' ? 'рассмотрении' : 'собеседовании'}}</n-tag>
    </template>
    <p>Отличный специалист на все руки - стоит брать его.</p>
    <n-button-group>
      <n-button @click.stop :type="status === 'review' ? 'info' : 'success'">{{ status === 'review' ? 'На собеседование' : 'Одобрить'}}</n-button>
      <n-button type="error" @click.stop="dismiss">Отклонить</n-button>
    </n-button-group>
  </n-card>

  <n-modal v-model:show="showCandidateDetails" style="width: 600px;" title="Биденко Александр Алексеевич" size="huge" preset="card">
    <div>
      <p>
        <b>Итоги интервью:</b>
        Ответил на все задаваемые вопросы
      </p>
      <p>
        <b>Итоги видео встречи:</b>
        Еще и красавчик)
      </p>
      <p>
        <b>Итоги встречи:</b>
        Не проводилась
      </p>
      <p>
        <b>Резюме:</b>
        Frontend, Backend, DevOps, Android Native
      </p>
      <n-button-group>
        <n-button type="info">На собеседование</n-button>
        <n-button type="error" @click="dismiss">Отклонить</n-button>
      </n-button-group>
    </div>
  </n-modal>
</template>

<style scoped>

</style>
