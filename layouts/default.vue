<script setup lang="ts">
const route = useRoute();
const colorMode = useColorMode();
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
const onClickThemeSwitch = () => {
  colorMode.preference = colorMode.value === "light" ? "dark" : "light";
};
</script>

<template>
  <div>
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
        <a-switch
          :checked="colorMode.value === 'dark'"
          @click="onClickThemeSwitch"
        ></a-switch>
        <a-divider type="vertical"></a-divider>
        <img src="/images/npmLogo.png" />
      </template>
    </a-page-header>
    <div>
      <layout-docs-menu />
    </div>

    <slot />
  </div>
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
      &:hover {
        color: $primary-4;
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

.dark-mode {
  .page-header {
    .ant-page-header-heading-title {
      color: $gray-1;
    }
    a {
      color: $gray-7;
    }
  }
}

.light-mode {
  .page-header {
    a {
      color: $gray-11;
    }
  }
}
</style>
