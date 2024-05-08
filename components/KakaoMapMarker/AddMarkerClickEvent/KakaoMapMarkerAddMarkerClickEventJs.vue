<script setup>
import { KakaoMap, KakaoMapMarker } from 'vue3-kakao-maps';
const visibleRef = ref(true);

const onClickKakaoMapMarker = () => {
  visibleRef.value = !visibleRef.value;
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
      @onClickKakaoMapMarker="onClickKakaoMapMarker"
    />
  </KakaoMap>
</template>

<style scoped></style>
