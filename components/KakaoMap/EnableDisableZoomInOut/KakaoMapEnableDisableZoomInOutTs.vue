<script setup lang="ts">
import { KakaoMap } from "vue3-kakao-maps";

const map = ref<kakao.maps.Map>();

const onLoadKakaoMap = (mapRef: kakao.maps.Map) => {
  map.value = mapRef;
};

// 버튼 클릭에 따라 지도 확대, 축소 기능을 막거나 풀고 싶은 경우에는 map.setZoomable 함수를 사용합니다
const setZoomable = (zoomable: boolean) => {
  // 마우스 휠로 지도 확대,축소 가능여부를 설정합니다
  map.value?.setZoomable(zoomable);
};
</script>

<template>
  <KakaoMap
    :lat="33.450701"
    :lng="126.570667"
    @onLoadKakaoMap="onLoadKakaoMap"
  />
  <button class="demo-button" @click="setZoomable(false)">
    지도 확대/축소 끄기
  </button>
  <button class="demo-button" @click="setZoomable(true)">
    지도 확대/축소 켜기
  </button>
</template>

<style lang="scss" scoped></style>
