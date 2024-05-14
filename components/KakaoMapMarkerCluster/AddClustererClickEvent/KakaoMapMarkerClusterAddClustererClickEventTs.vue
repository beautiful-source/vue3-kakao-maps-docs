<script setup lang="ts">
import { ref } from 'vue';
import { KakaoMap } from 'vue3-kakao-maps';
import chickenList from '@/assets/data/chicken.json';

const map = ref<kakao.maps.Map>();
const onLoadKakaoMap = (mapRef: kakao.maps.Map) => {
  map.value = mapRef;
};

// KakaoMap 내부의 clusterer 객체를 가져와 이벤트 핸들러를 등록해줍니다.
const clusterer = ref<kakao.maps.MarkerClusterer>();
const onLoadKakaoMapMarkerCluster = (clustererRef: kakao.maps.MarkerClusterer) => {
  clusterer.value = clustererRef;

  kakao.maps.event.addListener(clusterer.value, 'clusterclick', function (cluster: kakao.maps.Cluster) {
    const currentLevel = map?.value?.getLevel();
    if (currentLevel !== undefined && !isNaN(currentLevel)) {
      const newLevel = currentLevel - 1; //클러스터 클릭시 1레벨 zoom in
      map.value?.setLevel(newLevel, { anchor: cluster.getCenter() });
    }
  });
};
</script>

<template>
  <!-- 마커 클러스터러를 생성할 때 disableClickZoom을 true로 설정하지 않은 경우
    이벤트 핸들러로 cluster 객체가 넘어오지 않을 수도 있습니다 -->
  <KakaoMap
    :lat="36.34"
    :lng="127.77"
    :level="14"
    :disableClickZoom="true"
    :markerCluster="{ markers: chickenList }"
    @onLoadKakaoMapMarkerCluster="onLoadKakaoMapMarkerCluster"
    @onLoadKakaoMap="onLoadKakaoMap"
  />
</template>
