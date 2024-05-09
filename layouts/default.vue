<script setup lang="ts">
const route = useRoute();
const colorMode = useColorMode();
const headerMenuItems = ref([
  {
    key: "/docs",
    label: "Docs",
    selected: route.path.indexOf("docs") > -1,
  },
  {
    key: "/components/basicMap",
    label: "Components",
    selected: route.path.indexOf("components") > -1,
  },
]);
const changeTheme = () => {
  colorMode.preference = colorMode.value === "light" ? "dark" : "light";
};

watch(
  () => route.path,
  () => {
    headerMenuItems.value.forEach(
      (item) => (item.selected = route.path.indexOf(item.key) > -1)
    );
  }
);
</script>

<template>
  <div>
    <a-page-header
      :avatar="{ src: '/images/logo.png', shape: 'square' }"
      class="page-header"
    >
      <template #title>
        <NuxtLink to="/">vue3-kakao-maps</NuxtLink>
      </template>
      <template #extra>
        <ul>
          <li
            v-for="menuItem of headerMenuItems"
            :key="menuItem.key"
            :class="{
              selected: menuItem.selected,
            }"
          >
            <NuxtLink :to="menuItem.key">
              {{ menuItem.label }}
            </NuxtLink>
          </li>
        </ul>
        <a-divider type="vertical"></a-divider>
        <ClientOnly>
          <a-switch
            :checked="colorMode.value === 'dark'"
            @click="changeTheme"
            checked-children="dark"
            un-checked-children="light"
          ></a-switch>
        </ClientOnly>
        <a-divider type="vertical"></a-divider>
        <img src="/public/images/npmLogo.png" />
      </template>
    </a-page-header>
    <div class="main-contents">
      <layout-components-menu v-if="route.path.indexOf('components') > -1" />
      <div class="contents">
        <slot />
      </div>
    </div>
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

.main-contents {
  display: flex;
}

.contents {
  padding: 0 0 0 3rem;
  width: 100vw;
  flex-direction: row;
  display: flex;
}

.anchor {
  width: 180px;
  position: fixed;
  top: 100px;
  left: 90vw;
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
