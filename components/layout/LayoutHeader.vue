<script setup lang="ts">
const route = useRoute();
const colorMode = useColorMode();
const headerMenuItems = ref([
  {
    key: '/docs',
    label: 'Docs',
    selected: route.path.indexOf('docs') > -1
  },
  {
    key: '/components',
    label: 'Components',
    selected: route.path.indexOf('components') > -1
  }
]);
const changeTheme = () => {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light';
};

watch(
  () => route.path,
  () => {
    headerMenuItems.value.forEach((item) => (item.selected = route.path.indexOf(item.key) > -1));
  }
);
</script>

<template>
  <a-page-header :avatar="{ src: '/images/logo.png', shape: 'square' }" class="page-header">
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
            'un-selected': !menuItem.selected
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

      <NuxtLink to="https://www.npmjs.com/package/vue3-kakao-maps" target="_blank" class="npm-link">
        <img src="/public/images/npmLogo.png"
      /></NuxtLink>
    </template>
  </a-page-header>
</template>

<style lang="scss">
$header-height: 60px;
.page-header {
  box-sizing: border-box;
  height: $header-height;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0px 24px;
  display: grid;
  align-items: center;
  width: 100%;
  z-index: 1000;
  ul {
    display: flex;
    list-style: none;
    background-color: white;
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
.npm-link {
  a {
    display: block;
    height: fit-content;
  }
  img {
    vertical-align: text-top;
  }
}
.dark-mode {
  .page-header {
    .ant-page-header-heading-title {
      color: $gray-1;
    }
    .un-selected {
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
