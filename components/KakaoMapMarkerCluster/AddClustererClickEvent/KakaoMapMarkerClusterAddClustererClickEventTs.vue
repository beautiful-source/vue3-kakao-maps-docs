<script setup lang="ts">
import { KakaoMap, type KakaoMapMarkerProps } from 'vue3-kakao-maps';
const markerList: KakaoMapMarkerProps[] = [];
const data: any = await $fetch('/download/web/data/chicken.json');
data.positions?.forEach((marker: any) => {
  markerList?.push({ lat: marker.lat, lng: marker.lng });
});

const clusterer = ref<kakao.maps.MarkerClusterer>();
const map = ref<kakao.maps.Map>();

const onLoadKakaoMap = (mapRef: kakao.maps.Map) => {
  map.value = mapRef;
};

// const onLoadKakaoMapMarkerCluster = (clustererRef: kakao.maps.MarkerClusterer) => {
//   clusterer.value = clustererRef;

//   kakao.maps.event.addListener(clusterer.value, 'clusterclick', function (cluster: kakao.maps.Cluster) {
//     const level = map?.value?.getLevel() - 2;

//     if (level !== undefined) {
//       // level이 정의되어 있을 때만 실행
//       map.value?.setLevel(level, { anchor: cluster.getCenter() });
//     }
//   });
// };
</script>

<template>
  <KakaoMap
    :lat="36.34"
    :lng="127.77"
    :level="14"
    :markerCluster="{ markers: markerList, disableClickZoom: true }"
    @onLoadKakaoMapMarkerCluster="onLoadKakaoMapMarkerCluster"
    @onLoadKakaoMap="onLoadKakaoMap"
  />
</template>
