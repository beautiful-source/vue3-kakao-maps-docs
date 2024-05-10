<script setup>
import { ref } from 'vue';
import { KakaoMap } from 'vue3-kakao-maps';

const map = ref();

const onLoadKakaoMap = (mapRef) => {
  map.value = mapRef;

  // 다각형을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 다각형을 표시합니다
  const polygonPath = [
    new kakao.maps.LatLng(33.45133510810506, 126.57159381623066),
    new kakao.maps.LatLng(33.44955812811862, 126.5713551811832),
    new kakao.maps.LatLng(33.449986291544086, 126.57263296172184),
    new kakao.maps.LatLng(33.450682513554554, 126.57321034054742),
    new kakao.maps.LatLng(33.451346760004206, 126.57235740081413)
  ];
  // 지도에 표시할 다각형을 생성합니다
  const polygon = new kakao.maps.Polygon({
    path: polygonPath, // 그려질 다각형의 좌표 배열입니다
    strokeWeight: 3, // 선의 두께입니다
    strokeColor: '#39DE2A', // 선의 색깔입니다
    strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    strokeStyle: 'longdash', // 선의 스타일입니다
    fillColor: '#A2FF99', // 채우기 색깔입니다
    fillOpacity: 0.7 // 채우기 불투명도 입니다
  });

  // 지도에 다각형을 표시합니다
  polygon.setMap(map.value);
};
</script>

<template>
  <KakaoMap :lat="33.450701" :lng="126.570667" @onLoadKakaoMap="onLoadKakaoMap" />
</template>

<style scoped></style>
