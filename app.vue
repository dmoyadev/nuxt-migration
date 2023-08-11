<script setup lang="ts">
import MySidebar from "~/components/MySidebar.vue";
import MyNavbar from "~/components/MyNavbar.vue";

useHead({
  title: 'nuxt-template',
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: '' },
    { name: 'format-detection', content: 'telephone=no' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: '/icons/style.css' },
  ],
});
</script>

<template>
  <div :class="$style.layoutWrapper">
    <MySidebar />

    <div :class="$style.layoutInner">
      <MyNavbar />

      <div :class="$style.layoutPageWrapper">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.layoutWrapper {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.layoutInner {
  display: flex;
  flex: 1; // Horizontal spread
  height: 100vh;
  flex-direction: column;
  overflow: hidden;
}

.layoutPageWrapper {
  flex: 1;
  overflow: auto;
  padding: 1rem;
}
</style>
