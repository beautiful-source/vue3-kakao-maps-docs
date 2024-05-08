<script lang="ts" setup>
import { reactive, ref, watch, VueElement, h } from "vue";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import type { MenuProps, ItemType } from "ant-design-vue";
import { useRouter } from "vue-router";

const openKeys = ref<string[]>([]);
const router = useRouter();
const route = useRoute();
const selectedKeys = ref<string[]>();

const colorMode = useColorMode();
function getItem(
  label: VueElement | string,
  key: string,
  icon?: any,
  children?: ItemType[],
  type?: "group"
): ItemType {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as ItemType;
}

const items: ItemType[] = reactive([
  getItem("KakaoMap", "kakaoMap", () => h(MailOutlined), [
    getItem("지도 생성하기", "/basicMap"),
    getItem("지도 이동시키기", "/moveMap"),
    getItem("지도 레벨 바꾸기", "/changeLevel"),
  ]),

  getItem("KakaoMapCustomOverlay", "sub2", () => h(AppstoreOutlined), [
    getItem("커스텀 오버레이 생성하기", "5"),
    getItem("커스텀 오버레이 생성하기2", "6"),
  ]),

  { type: "divider" },

  getItem("Navigation Three", "sub4", () => h(SettingOutlined), [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),

  getItem(
    "Group",
    "grp",
    null,
    [getItem("Option 13", "13"), getItem("Option 14", "14")],
    "group"
  ),
]);

const handleClick: MenuProps["onClick"] = (e) => {
  router.push("/components" + e.key);
};

onMounted(() => {
  openKeys.value = ["/" + route.path.split("/")[2]];
  if (route.hash.length > 0) {
    selectedKeys.value = [route.hash];
  } else {
    const currentMenu = items.find((item) => item?.key == openKeys.value[0]);
    if (
      currentMenu &&
      "children" in currentMenu &&
      currentMenu.children &&
      currentMenu.children.length > 0
    ) {
      const firstChild = currentMenu.children[0];
      if (firstChild && firstChild.key) {
        selectedKeys.value = ["" + firstChild.key];
      }
    }
  }
});
</script>
<template>
  <div class="docs-menu">
    <a-input></a-input>
    <ClientOnly fallbackTag="span">
      <a-menu
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
            <template v-if="item != null">
              {{ "label" in item ? item.label : "" }}
              <ul v-if="'children' in item">
                <li v-for="child in item?.children" :key="child?.key">
                  {{ child !== null && "label" in child ? child.label : "" }}
                </li>
              </ul>
            </template>
          </li>
        </ul>
      </template>
    </ClientOnly>
  </div>
</template>

<style scoped lang="scss">
.docs-menu {
  display: flex;
  flex-direction: column;
  width: 15rem;
}
</style>
