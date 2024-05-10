<script setup>
import { ref } from 'vue';
import { KakaoMap } from 'vue3-kakao-maps';
const latLngList = ref([
  { lat: 33.45, lng: 126.571 },
  { lat: 33.449, lng: 126.5705 },
  { lat: 33.45, lng: 126.5725 }
]);
</script>

<template>
  <KakaoMap :lat="33.450701" :lng="126.570667">
    <KakaoMapPolyline :latLngList="latLngList" />
  </KakaoMap>
</template>
