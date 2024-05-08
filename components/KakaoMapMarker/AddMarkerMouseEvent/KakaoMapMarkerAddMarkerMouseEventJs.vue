<script setup>
import { KakaoMap, KakaoMapMarker } from 'vue3-kakao-maps';
const visibleRef = ref(false);

const mouseOverKakaoMapMarker = () => {
  visibleRef.value = true;
};
const mouseOutKakaoMapMarker = () => {
  visibleRef.value = false;
};
</script>

<template>
  <KakaoMap :lat="33.450705" :lng="126.570667">
    <KakaoMapMarker
      :lat="33.450705"
      :lng="126.570667"
      :clickable="true"
      :infoWindow="{ content: 'Mouse Over event', visible: visibleRef }"
      ,
      @mouseOverKakaoMapMarker="mouseOverKakaoMapMarker"
      @mouseOutKakaoMapMarker="mouseOutKakaoMapMarker"
    />
  </KakaoMap>
  <p>마커 위에 마우스를 올려보세요!</p>
</template>

<style scoped></style>
