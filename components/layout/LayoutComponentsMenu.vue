<script lang="ts" setup>
import { reactive, ref, watch, VueElement, h } from "vue";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import type { MenuProps, ItemType } from "ant-design-vue";
import { useRouter } from "vue-router";

const selectedKeys = ref<string[]>(["1"]);
const openKeys = ref<string[]>(["kakaoMap"]);
const router = useRouter();
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
  getItem("KakaoMap", "/kakaoMap"),
  getItem("KakaoMapMarker", "/kakaoMapMarker"),
  getItem("KakaoMapInfowindow", "/kakaoMapInfoWindow"),
  getItem("KakaoMapCustomOverlay", "/kakaoMapCustomOverlay"),
  getItem("KakaoMapCluster", "/kakaoMapMarkerCluster"),
]);

const handleClick: MenuProps["onClick"] = (e) => {
  router.push("/components" + e.key);
};

watch(openKeys, (val) => {
  console.log("openKeys", val);
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
        :theme="colorMode.value"
      >
      </a-menu>
      <template #fallback>
        <ul>
          <li v-for="item in items" :key="item.key">
            {{ item.label }}
            <ul v-if="item.children">
              <li v-for="child in item.children" :key="child.key">
                {{ child.label }}
              </li>
            </ul>
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
  width: 240px;
}
</style>
