<script setup lang="ts">
import { ref } from 'vue';
import { KakaoMap, type KakaoMapMarkerListItem } from 'vue3-kakao-maps';

const markerInfoList: KakaoMapMarkerListItem[] = [
  { key: 1, lat: 33.450705, lng: 126.570677 },
  { key: 2, lat: 33.450936, lng: 126.569477 },
  { key: 3, lat: 33.450879, lng: 126.56994 },
  { key: 4, lat: 33.451393, lng: 126.570738 }
];

const markerCount = ref<number>(0);
const markerList = computed(() => markerInfoList.slice(0, markerCount.value));

const onAddMarker = () => {
  if (markerCount.value < markerInfoList.length) {
    markerCount.value += 1;
  }
};

const onDeleteMarker = () => {
  if (0 < markerCount.value) {
    markerCount.value -= 1;
  }
};
</script>

<template>
  <KakaoMap :lat="33.450701" :lng="126.570667" :markerList="markerList"> </KakaoMap>
  <div>
    <button @click="onAddMarker" class="demo-button">마커 추가</button>
    <button @click="onDeleteMarker" class="demo-button">마커 삭제</button>
  </div>
</template>
