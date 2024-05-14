<script lang="ts" setup>
import type { NavItem } from '@nuxt/content/types';
import type { ItemType, MenuProps } from 'ant-design-vue';
import { VueElement, ref } from 'vue';

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation());
const router = useRouter();
const colorMode = useColorMode();

const selectedKeys = ref<string[]>(['/docs/get-started/installation']);
const openKeys = ref<string[]>(['/docs/get-started']);
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
  <ClientOnly fallbackTag="span">
    <a-menu
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
</template>

<style lang="scss" scoped>
.ant-menu {
  height: 100%;
}
</style>
