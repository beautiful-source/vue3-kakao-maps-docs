<script setup lang="ts">
import { KakaoMap, KakaoMapMarker } from 'vue3-kakao-maps';
const visibleRef = ref<boolean>(true);

const mouseOverKakaoMapMarker = (): void => {
  visibleRef.value = true;
};
const mouseOutKakaoMapMarker = (): void => {
  visibleRef.value = false;
};
</script>

<template>
  <KakaoMap :lat="33.450705" :lng="126.570667">
    <KakaoMapMarker
      :lat="33.450705"
      :lng="126.570667"
      :clickable="true"
      :infoWindow="{ content: 'Click Marker', visible: visibleRef }"
      ,
      @mouseOverKakaoMapMarker="mouseOverKakaoMapMarker"
      @mouseOutKakaoMapMarker="mouseOutKakaoMapMarker"
    />
  </KakaoMap>
</template>

<style scoped></style>
