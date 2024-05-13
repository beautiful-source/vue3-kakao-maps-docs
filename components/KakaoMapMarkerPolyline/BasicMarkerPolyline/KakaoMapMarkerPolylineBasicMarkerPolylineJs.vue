<script setup>
import { ref } from 'vue';
import { KakaoMap, KakaoMapMarkerPolyline, type KakaoMapMarkerListItem } from 'vue3-kakao-maps';

const markerList = ref([
  { lat: 33.4509, lng: 126.571 },
  { lat: 33.451, lng: 126.572 },
  { lat: 33.452, lng: 126.573 },
  { lat: 33.4518, lng: 126.5725 }
]);
</script>

<template>
  <KakaoMap :lat="33.452" :lng="126.573">
    <KakaoMapMarkerPolyline :markerList="markerList"></KakaoMapMarkerPolyline>
  </KakaoMap>
</template>

<style scoped></style>
