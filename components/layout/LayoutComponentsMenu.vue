<script lang="ts" setup>
import { reactive, ref, watch, VueElement, h } from 'vue';
import type { MenuProps, ItemType } from 'ant-design-vue';
import { useRouter } from 'vue-router';

const openKeys = ref<string[]>([]);
const router = useRouter();
const route = useRoute();
const selectedKeys = ref<string[]>();

const colorMode = useColorMode();
function getItem(label: VueElement | string, key: string, icon?: any, children?: ItemType[], type?: 'group'): ItemType {
  return {
    key,
    icon,
    children,
    label,
    type
  } as ItemType;
}

const items: ItemType[] = reactive([
  getItem('KakaoMap', '/kakaoMap', null, [
    getItem('지도 생성하기', '#basic-map'),
    getItem('지도 이동시키기', '#move-map'),
    getItem('지도 레벨 바꾸기', '#change-level'),
    getItem('지도 정보 얻어오기', '#map-info'),
    getItem('지도 이동 막기', '#disable-map-drag-move'),
    getItem('지도 확대 축소 막기', '#enable-disable-zoom-in-out'),
    getItem('클릭 이벤트 등록하기', '#add-map-click-event'),
    getItem('여러개의 마커 제어하기', '#multiple-marker-control'),
    getItem('다각형 그리기', '#basic-polygon')
  ]),
  getItem('KakaoMapMarker', '/kakaoMapMarker', null, [
    getItem('마커 생성하기', '#basic-marker'),
    getItem('이미지 마커 생성하기', '#image-marker'),
    getItem('인포윈도우가 있는 마커 생성하기 1', '#infowindow-marker-1'),
    getItem('인포윈도우가 있는 마커 생성하기 2', '#infowindow-marker-2'),
    getItem('마커에 클릭 이벤트 등록하기', '#add-marker-click-event'),
    getItem('마커에 마우스 이벤트 등록하기', '#add-marker-mouse-event')
  ]),
  getItem('KakaoMapInfowindow', '/kakaoMapInfoWindow', null, [
    getItem('인포윈도우 생성하기 1', '#basic-infowindow-1'),
    getItem('인포윈도우 생성하기 2', '#basic-infowindow-2'),
    getItem('마커에 인포윈도우 표시하기', '#marker-With-infowindow')
  ]),
  getItem('KakaoMapCustomOverlay', '/kakaoMapCustomOverlay', null, [
    getItem('커스텀 오버레이 생성하기 1', '#basic-custom-overlay'),
    getItem('커스텀 오버레이 생성하기 2', '#basic-custom-overlay2'),
    getItem('커스텀 오버레이 마커 위에 표시하기', '#marker-custom-overlay'),
    getItem('닫기가 가능한 커스텀 오버레이', '#removable-custom-overlay'),
    getItem('보이지 않게 커스텀 오버레이 생성하기', '#invisible-custom-overlay')
  ]),
  getItem('KakaoMapMarkerCluster', '/kakaoMapMarkerCluster', null, [getItem('마커 클러스터 생성하기', '#basic-marker-cluster')])
]);

const handleClick: MenuProps['onClick'] = (e) => {
  router.push('/components' + e.keyPath?.join(''));
};

onMounted(() => {
  openKeys.value = ['/' + route.path.split('/')[2]];
  if (route.hash.length > 0) {
    selectedKeys.value = [route.hash];
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
    <!-- <a-input></a-input> -->
    <div class="docs-menu-list">
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
  width: 240px;
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
