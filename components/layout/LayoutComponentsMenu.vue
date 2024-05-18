<script lang="ts" setup>
import { reactive, ref, VueElement, h } from 'vue';
import type { MenuProps, ItemType } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import { contentList } from '@/assets/data/contentsList';

const openKeys = ref<string[]>([]);
const router = useRouter();
const route = useRoute();
const selectedKeys = ref<string[]>();

const colorMode = useColorMode();

const items: ItemType[] = reactive(
  contentList
    ? contentList.map((menu) => {
        return {
          key: '/' + menu.key, // 메뉴의 키를 사용합니다.
          label: menu.title,
          children: menu.pages.map((page) => {
            return {
              label: page.title, // 페이지의 title
              key: page.href // 페이지의 href
            };
          })
        };
      })
    : []
);

const handleClick: MenuProps['onClick'] = (e) => {
  router.push('/components' + e.keyPath?.join(''));
};

watch([() => route.path, () => route.hash], ([newPath, newHash]) => {
  openKeys.value = ['/' + newPath.split('/')[2]];
  if (newPath.length > 0 && newHash.length > 0) {
    selectedKeys.value = [newHash];
  } else {
    const currentMenu = items.find((item) => item?.key == openKeys.value[0]);

    if (currentMenu && 'children' in currentMenu && currentMenu.children && currentMenu.children.length > 0) {
      const firstChild = currentMenu.children[0];
      if (firstChild && firstChild.key) {
        selectedKeys.value = ['' + firstChild.key];
      }
    }
  }
});
</script>
<template>
  <div class="docs-menu">
    <LayoutSearchMenuButton />
    <div class="docs-menu-list">
      <ClientOnly fallbackTag="span">
        <a-menu
          style="width: 240px"
          v-model:openKeys="openKeys"
          v-model:selectedKeys="selectedKeys"
          mode="inline"
          :items="items"
          @click="handleClick"
          :theme="colorMode.value === 'light' ? 'light' : 'dark'"
        >
        </a-menu>
        <template #fallback>
          <ul>
            <li v-for="item in items" :key="item?.key">
              <template v-if="item !== null">
                {{ 'label' in item ? item.label : '' }}
                <ul v-if="'children' in item">
                  <li v-for="child in item?.children" :key="child?.key">
                    {{ child !== null && 'label' in child ? child.label : '' }}
                  </li>
                </ul>
              </template>
            </li>
          </ul>
        </template>
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped lang="scss">
.docs-menu {
  flex-direction: column;
}

.docs-menu-list {
  overflow-y: scroll;
  height: 100vh;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.docs-menu-list::-webkit-scrollbar {
  display: none;
}
</style>
