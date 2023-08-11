<script setup lang="ts">
import { useProjectStore } from '~/store/project';

defineOptions({ name: 'ProjectsPage' });

const { t } = useI18n();

const projectStore = useProjectStore();
onMounted(() => {
  try {
    projectStore.getMany();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
});
</script>

<template>
	<div>
		<div>{{ t('This is the project page wrapper') }}</div>
		{{ projectStore.count }}
		<NuxtPage />
	</div>
</template>

<i18n lang="yaml">
vi:
  This is the project page wrapper: Đây là layout bọc ngoài trang dự án
en:
  This is the project page wrapper: This is the project page wrapper
</i18n>
