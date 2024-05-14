<script setup lang="ts">
import { ref } from 'vue';
import { KakaoMap, KakaoMapMarkerPolyline, type KakaoMapMarkerListItem } from 'vue3-kakao-maps';

const markerList: Ref<KakaoMapMarkerListItem[]> = ref([
  { lat: 33.4509, lng: 126.571 },
  { lat: 33.451, lng: 126.572 },
  { lat: 33.452, lng: 126.573 },
  { lat: 33.4518, lng: 126.5725 }
]);

// 마커 추가하기 버튼의 함수입니다
const addMarker = (): void => {
  markerList.value.push({
    lat: 33.4509 + Math.random() * 0.003,
    lng: 126.571 + Math.random() * 0.003
  });
};

// 마커 삭제하기 버튼의 함수입니다
const deleteMarker = (): void => {
  markerList.value.pop();
};
</script>

<template>
  <KakaoMap :lat="33.452" :lng="126.573">
    <KakaoMapMarkerPolyline :markerList="markerList" :showMarkerOrder="true" />
  </KakaoMap>
  <div>
    <button class="demo-button" @click="addMarker">마커 추가하기</button>
    <button class="demo-button" @click="deleteMarker">마커 삭제하기</button>
  </div>
</template>

<style scoped></style>
