<script setup lang="ts">
defineOptions({ name: 'IndexPage' });

const { t } = useI18n();
useHead({
  title: t('Home page'),
});

const { locale, setLocale } = useI18n();
</script>

<template>
  <div :class="$style.abc">
    <Transition name="slide-fade" mode="out-in">
      <el-button
          v-if="locale === 'vi'"
          key="en-button"
          size="small"
          type="primary"
          @click="setLocale('en')"
      >
        {{ t('Change language') }}
      </el-button>

      <el-button
          v-else
          key="vi-button"
          size="small"
          type="primary"
          @click="setLocale('vi')"
      >
        {{ t('Change language') }}
      </el-button>
    </Transition>

    <div>
      <span class="text-primary-300"> {{ t('Hello world!') }}</span>
      <span class="text-warning-700">{{ t('Hello world!') }}</span>
    </div>

    <ExampleBase />
  </div>
</template>

<style lang="scss" module>
.abc {
  color: $--color-red;
}
</style>

<i18n lang="yaml">
vi:
  Home page: Trang chủ
  Hello world!: Xin chào thế giới!
  Change language: Đổi ngôn ngữ
en:
  Home page: Home page
  Hello world!: Hello world!
  Change language: Change language
</i18n>
