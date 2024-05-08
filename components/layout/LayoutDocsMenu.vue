<script lang="ts" setup>
import { reactive, ref, watch, VueElement, h } from "vue";
import type { MenuProps, ItemType } from "ant-design-vue";
import type { NavItem } from "@nuxt/content/types";

const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
);
const router = useRouter();
const selectedKeys = ref<string[]>(["/docs/get-started/installation"]);
const openKeys = ref<string[]>(["/docs/get-started"]);
const getItem = (
  label: VueElement | string,
  key: string,
  icon?: any,
  children?: ItemType[],
  type?: "group"
): ItemType => {
  return {
    key,
    icon,
    children,
    label,
    type,
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

const handleClick: MenuProps["onClick"] = (e) => {
  router.push(e.key + "");
};
</script>

<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 240px"
    mode="inline"
    :items="items"
    @click="handleClick"
  ></a-menu>
</template>
