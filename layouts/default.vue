<script setup lang="ts">
import { contentList } from '~/assets/data/contentsList';
const route = useRoute();
const onLayoutMenuClosed = ref<boolean>(false);

const onClickedLayoutMenuControlButton = () => {
  onLayoutMenuClosed.value = !onLayoutMenuClosed.value;
};

const anchorItems = computed(() => {
  const parsedRoute = route.path.split('/');
  const category = contentList.find((item) => item.key === parsedRoute[1]);
  if (parsedRoute.length > 1) {
    return category?.menus.find((item) => item.key === parsedRoute[2])?.pages;
  } else {
    return category?.menus[0].pages;
  }
});
</script>

<template>
  <div style="padding-top: 60px">
    <LayoutHeader />
    <div class="main-contents" :class="{ 'aside-closed': onLayoutMenuClosed }">
      <aside v-if="route.path !== '/'">
        <layout-components-menu v-if="route.path.indexOf('components') > -1" />
        <layout-docs-menu v-if="route.path.indexOf('docs') > -1" />
        <LayoutMenuControlButton @click="onClickedLayoutMenuControlButton" :isClosed="onLayoutMenuClosed" />
      </aside>
      <main>
        <slot />
      </main>
      <div class="anchor">
        <a-affix :offset-top="70">
          <a-anchor :items="anchorItems" :offset-top="70" />
        </a-affix>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$header-height: 60px;
$aside-width: 270px;
$aside-closed-width: 30px;
$aside-control-width: 30px;
.page-header {
  box-sizing: border-box;
  height: $header-height;
  position: fixed;
  top: 0;
  left: 0;
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
.main-contents {
  display: flex;
  height: 100vh;

  aside {
    box-sizing: border-box;
    width: $aside-width;
    display: flex;
    align-items: center;
    height: 100vh;
    transition: all 0.3s ease-out;
    position: fixed;
    left: 0;
  }
  main {
    padding: 0 3em 3em;
    box-sizing: border-box;
    width: calc(100% - $aside-width);
    transition: all 0.3s ease-out;
    transform: translateX(($aside-width));
  }
  .control-button {
    position: relative;
    bottom: $header-height;
  }
}
.aside-closed {
  aside {
    transform: translateX(-($aside-width - $aside-control-width));
  }
  main {
    width: calc(100% - $aside-closed-width);
    transform: translateX($aside-control-width);
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
