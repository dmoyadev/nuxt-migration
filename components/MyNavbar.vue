<script setup lang="ts">
defineOptions({ name: 'MyNavbar' });
</script>

<template>
	<div :class="$style.navbarWrapper">
		<!--  -->
	</div>
</template>

<style lang="scss" module>
.navbarWrapper {
  position: relative;
  width: 100%;
  height: 60px;
  background-color: $--color-white;
  box-shadow: $shadow-light;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 60%;
    width: 4px;
    background-color: color(primary, 600);
  }
}
</style>
