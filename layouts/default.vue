<script setup lang="ts">
const route = useRoute();
const headerMenuItems = [
  {
    key: "/docs",
    label: "Docs",
    selected: route.path === "/docs",
  },
  {
    key: "/components",
    label: "Components",
    selected: route.path === "/components",
  },
];
</script>

<template>
  <a-page-header
    title="vue3-kakao-maps"
    :avatar="{ src: '/images/logo.png', shape: 'square' }"
    class="page-header"
  >
    <template #extra>
      <ul>
        <li
          v-for="menuItem of headerMenuItems"
          :key="menuItem.key"
          :class="{
            selected: menuItem.selected,
          }"
        >
          <a :href="menuItem.key">
            {{ menuItem.label }}
          </a>
        </li>
      </ul>
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
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 2rem;
    a {
      color: black;
      &:hover {
        color: $primary4;
      }
    }
    .selected {
      font-weight: 600;
      a {
        color: $primary;
      }
    }
  }
}
</style>
