<script lang="ts" setup>
import type { NavItem } from '@nuxt/content/types';
import type { ItemType, MenuProps } from 'ant-design-vue';
import { VueElement, ref } from 'vue';

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation());
const router = useRouter();
const colorMode = useColorMode();

const selectedKeys = ref<string[]>(['/docs/get-started/installation']);
const openKeys = ref<string[]>(['/docs/get-started', '/docs/further']);
const getItem = (label: VueElement | string, key: string, icon?: any, children?: ItemType[], type?: 'group'): ItemType => {
  return {
    key,
    icon,
    children,
    label,
    type
  } as ItemType;
};

const items = computed<ItemType[] | undefined>(() => {
  if (navigation.value !== null) {
    return navigation.value[0].children?.map((docs: NavItem) =>
      getItem(
        docs.title,
        docs._path,
        null,
        docs.children?.map((subDocs) => getItem(subDocs.title, subDocs._path))
      )
    );
  }
});

const handleClick: MenuProps['onClick'] = (e) => {
  router.push(e.key + '');
};
</script>

<template>
  <div class="docs-menu">
    <!-- <a-input></a-input> -->
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
        ></a-menu>
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

<style lang="scss" scoped>
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
