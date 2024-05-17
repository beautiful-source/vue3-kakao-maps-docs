<script setup lang="ts">
import { contentList } from '@/assets/data/contentsList';
const route = useRoute();

const getDocumentCategoryFromCurrentPath = (path: string): string => {
  const pattern = /^\/([^\/]+)(?:\/|$)/;
  const match = path.match(pattern);
  return match ? match[1] : '';
};

useHead({
  titleTemplate: (title) => {
    const documentCategory: string = getDocumentCategoryFromCurrentPath(route.path);
    const suffix: string = !!documentCategory
      ? ' \u00B7\ ' + documentCategory.charAt(0).toUpperCase() + documentCategory.slice(1)
      : '';
    return title ? `${title}${suffix}` : documentCategory;
  }
});

const onLayoutMenuClosed = ref<boolean>(false);
const mainContentsRef = ref();

const onClickedLayoutMenuControlButton = () => {
  onLayoutMenuClosed.value = !onLayoutMenuClosed.value;
};

const anchorItems = computed(() => {
  const parsedRoute = route.path.split('/');
  if (parsedRoute.length > 1) {
    return contentList.find((item) => item.key === parsedRoute[2])?.pages;
  } else {
    return contentList[0].pages;
  }
});
</script>

<template>
  <div style="margin-bottom: 60px">
    <LayoutHeader />
    <div ref="mainContentsRef" class="main-contents" :class="{ 'aside-closed': onLayoutMenuClosed }">
      <aside v-if="route.path !== '/'">
        <a-affix :offset-top="70">
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
        <a-back-top />
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

.main-contents {
  display: flex;
  height: 100vh;

  aside {
    box-sizing: border-box;
    width: $aside-width + $aside-control-width;
    display: flex;
    align-items: center;
    height: 100vh;

    .side-menu-wrap {
      display: flex;
      align-items: center;
      transition: all 0.3s ease-out;
    }

    .control-button {
      position: relative;
      bottom: $header-height;
    }
  }

  .contents-wrap {
    width: calc(100% - ($aside-width + $aside-control-width + $anchor-width + $anchor-margin + $content-anchor-gap));

    display: flex;
    gap: $content-anchor-gap;
    .contents {
      transition: all 0.3s ease-out;
      width: calc(100%);
      padding-bottom: 100px;
      @include light-mode-link;
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
    padding-bottom: 20px;
  }
}
.aside-closed {
  .side-menu-wrap {
    transform: translateX(-($aside-width - $aside-control-width));
  }
  .contents-wrap {
    .contents {
      transform: translateX(-($aside-width - $aside-control-width));
      width: calc(
        100vw - ($aside-closed-width + $aside-control-width + $anchor-width + $anchor-margin + $content-anchor-gap) - 1rem
      );
    }
  }
}
.dark-mode {
  .contents-wrap {
    .contents {
      @include dark-mode-link;
    }
  }
}
</style>
