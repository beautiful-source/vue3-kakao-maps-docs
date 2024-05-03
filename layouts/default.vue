<script setup lang="ts">
import { type MenuProps } from "ant-design-vue";

const route = useRoute();
const current = ref<string[]>([route.path]);
const items = ref<MenuProps["items"]>([
  {
    key: "/docs",
    label: "Docs",
    title: "Docs",
  },
  {
    key: "/components",
    label: "Components",
    title: "Components",
  },
]);
</script>

<template>
  <a-page-header
    title="vue3-kakao-maps"
    :avatar="{ src: '/images/logo.png', shape: 'square' }"
    class="page-header"
  >
    <template #extra>
      <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
      <a-divider type="vertical"></a-divider>
      <a-switch></a-switch>
      <a-divider type="vertical"></a-divider>
      <img src="/images/npmLogo.png" />
    </template>
  </a-page-header>

  <slot />
</template>

<style lang="scss">
.page-header {
  padding: 0 2rem;
}
.ant-space-horizontal {
  height: 100%;
}
</style>
