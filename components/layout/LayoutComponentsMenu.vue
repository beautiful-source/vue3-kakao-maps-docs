<script lang="ts" setup>
import { reactive, ref, watch, VueElement, h } from "vue";
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
  getItem("KakaoMap", "/kakaoMap", null, [
    getItem("지도 생성하기", "#basic-map"),
    getItem("지도 이동시키기", "#move-map"),
    getItem("지도 레벨 바꾸기", "#change-level"),
    getItem("지도 정보 얻어오기", "#map-info"),
    getItem("지도 이동 막기", "#disable-map-drag-move"),
    getItem("지도 확대 축소 막기", "#enable-disable-zoom-in-out"),
    getItem("클릭 이벤트 등록하기", "#add-map-click-event"),
    getItem("여러개의 마커 제어하기", "#multiple-marker-control"),
  ]),
  getItem("KakaoMapMarker", "/kakaoMapMarker", null, [
    getItem("마커 생성하기", "#basic-marker"),
    getItem("이미지 마커 생성하기", "#image-marker"),
    getItem("인포윈도우가 있는 마커 생성하기 1", "#infowindow-marker-1"),
    getItem("인포윈도우가 있는 마커 생성하기 2", "#infowindow-marker-2"),
  ]),
  getItem("KakaoMapInfowindow", "/kakaoMapInfoWindow"),
  getItem("KakaoMapCustomOverlay", "/kakaoMapCustomOverlay"),
  getItem("KakaoMapCluster", "/kakaoMapMarkerCluster"),
]);

const handleClick: MenuProps["onClick"] = (e) => {
  router.push("/components" + e.keyPath?.join(""));
};

onMounted(() => {
  openKeys.value = ["/" + route.path.split("/")[2]];
  if (route.hash.length > 0) {
    selectedKeys.value = [route.hash];
    console.log(selectedKeys.value);
  } else {
    const currentMenu = items.find((item) => item?.key == openKeys.value[0]);
    console.log(currentMenu);
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
  console.log(openKeys.value);
  console.log(selectedKeys.value);
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
  width: 240px;
}
</style>
