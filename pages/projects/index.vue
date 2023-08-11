<script setup lang="ts">
defineOptions({ name: 'ProjectPage' });

const { t } = useI18n();
useHead({
    title: t('Project page'),
});
</script>

<template>
	<div>
		{{ t('This is the projects page!') }}
	</div>
</template>

<i18n lang="yaml">
vi:
  Project page: Trang sản phẩm
  This is the projects page!: Đây là trang dự án!
en:
  Project page: Project page
  This is the projects page!: This is the projects page!
</i18n>
