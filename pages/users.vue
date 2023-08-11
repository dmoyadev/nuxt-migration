<script setup lang="ts">
defineOptions({ name: 'UserPage' });

const { t } = useI18n();
useHead({
  title: t('User page'),
});
</script>

<template>
  <div>
    {{ t('This is the users page!') }}
  </div>
</template>

<i18n lang="yaml">
vi:
  User page: Trang người dùng
  This is the users page!: Đây là trang người dùng!
en:
  User page: User page
  This is the users page!: This is the users page!
</i18n>
