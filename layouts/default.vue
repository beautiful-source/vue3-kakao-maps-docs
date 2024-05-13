<script setup lang="ts">
import { contentList } from '~/assets/data/contentsList';
const route = useRoute();
const onLayoutMenuClosed = ref<boolean>(false);
const mainContentsRef = ref();

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
    <div ref="mainContentsRef" class="main-contents" :class="{ 'aside-closed': onLayoutMenuClosed }">
      <aside v-if="route.path !== '/'">
        <a-affix :target="() => mainContentsRef">
          <div class="side-menu-wrap">
            <layout-components-menu v-if="route.path.indexOf('components') > -1" />
            <layout-docs-menu v-if="route.path.indexOf('docs') > -1" />
            <LayoutMenuControlButton @click="onClickedLayoutMenuControlButton" :isClosed="onLayoutMenuClosed" />
          </div>
        </a-affix>
      </aside>

      <div class="contents-wrap">
        <div class="contents">
          <main>
            <slot />
          </main>
        </div>
        <div class="anchor">
          <a-anchor :items="anchorItems" :offset-top="70" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$header-height: 60px;
$aside-width: 270px;
$aside-closed-width: 30px;
$aside-control-width: 30px;
$anchor-width: 140px;
$content-anchor-gap: 10px;
$anchor-margin: 15px;

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
    width: $aside-width + $aside-control-width;
    display: flex;
    align-items: center;
    height: 100vh;
    transition: all 0.3s ease-out;

    .side-menu-wrap {
      display: flex;
      align-items: center;
    }

    .control-button {
      position: relative;
      bottom: $header-height;
    }
  }

  .contents-wrap {
    width: 100%;
    display: flex;
    gap: $content-anchor-gap;
    .contents {
      width: calc(100% - ($anchor-width + $content-anchor-gap + $anchor-margin));
      padding-bottom: 100px;
    }

    .anchor {
      position: absolute;
      right: $anchor-margin;
      width: $anchor-width;
      .ant-anchor-link-title {
        font-size: 0.8em;
      }
    }
  }
  main {
    padding-left: 1rem;
    box-sizing: border-box;
    width: calc(100% - $aside-width);
    transition: all 0.3s ease-out;
  }
}
.aside-closed {
  aside {
    transform: translateX(-($aside-width - $aside-control-width));
  }
  .contents-wrap {
    transform: translateX(-($aside-width - $aside-control-width));
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
