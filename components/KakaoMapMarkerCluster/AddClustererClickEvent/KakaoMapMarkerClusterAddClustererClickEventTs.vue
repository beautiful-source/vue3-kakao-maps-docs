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
  console.log(mapRef);
  map.value = mapRef;
};

const onLoadKakaoMapMarkerCluster = (clustererRef: kakao.maps.MarkerClusterer) => {
  clusterer.value = clustererRef;
  console.log(clusterer.value);

  kakao.maps.event.addListener(clusterer.value, 'clusterclick', function (cluster: kakao.maps.Cluster) {
    console.log(clusterer.value);
    const currentLevel = map?.value?.getLevel();
    if (currentLevel !== undefined && !isNaN(currentLevel)) {
      const newLevel = currentLevel - 5;
      map.value?.setLevel(newLevel, { anchor: cluster.getCenter() });
    }
  });
};
</script>

<template>
  <KakaoMap
    :lat="36.34"
    :lng="127.77"
    :level="14"
    :markerCluster="{ markers: markerList }"
    @onLoadKakaoMapMarkerCluster="onLoadKakaoMapMarkerCluster"
    @onLoadKakaoMap="onLoadKakaoMap"
  />
</template>
