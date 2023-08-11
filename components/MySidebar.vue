<script setup lang="ts">
import { ref, computed } from 'vue';
import { useAuthStore } from '~/store/auth';

defineOptions({ name: 'MySidebar' });

const data = ref([
  {
    icon: 'icon-star-o',
    route: { name: 'index' },
  },
  {
    icon: 'icon-user',
    route: { name: 'users' },
  },
  {
    icon: 'icon-archive',
    route: { name: 'projects' },
  },
]);

const authStore = useAuthStore();
const currentUser = computed(() => authStore.currentUser || {});
</script>

<template>
  <div :class="$style.sidebarWrapper">
    <div :class="$style.sidebarSection">
      <NuxtLink :to="{ name: 'index' }">
        <el-avatar
            :class="$style.sidebarAvatar"
            class="bg-white"
            :size="45"
            :src="currentUser?.avatar"
        />
      </NuxtLink>

      <NuxtLink
          v-for="(item, index) in data"
          :key="'sidebar-item-' + index"
          :to="item.route"
          :class="[
					$style.sidebarItem,
					$route?.name === item?.route?.name && $style.active,
				]"
      >
        <i :class="item.icon" />
      </NuxtLink>
    </div>

    <div :class="$style.sidebarSection">
      <div :class="$style.sidebarItem" class="hover:bg-blue">
        <i class="icon-settings" />
      </div>

      <div :class="$style.sidebarItem" class="hover:bg-danger">
        <i class="icon-power-off" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.sidebarWrapper {
  @include flexBox(
      $align: center,
      $direction: column,
      $justify: space-between,
      $gap: 1rem
  );

  background-color: $--color-white;
  width: 70px;
  height: 100vh;
  box-shadow: $shadow-light;
}

.sidebarSection {
  @include flexBox($align: center, $direction: column, $gap: 1rem);

  margin: 1rem 0;
}

.sidebarAvatar {
  border-radius: 9999px;
  border: 4px solid color(gray, 100);
}

.sidebarItem {
  @include flexCenter();

  width: 42px;
  height: 42px;
  border-radius: 35%;
  cursor: pointer;
  transition-duration: $duration-base;
  background-color: $--color-white;
  color: color(primary, 700);
  box-shadow: $shadow-base;

  @mixin active() {
    color: $--color-white;
    background-color: color(primary, 700);
    box-shadow: $shadow-dark;
  }

  &:hover {
    @include active();
  }

  &.active {
    @include active();
  }
}
</style>
