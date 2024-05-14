<script setup>
import { ref } from 'vue';
import { KakaoMap, KakaoMapInfoWindow } from 'vue3-kakao-maps';

// 지도에 표시할 영역 데이터 배열입니다
import area from '@/assets/data/area.json';

const map = ref();
const content = ref('');
const infoLat = ref(37.566826);
const infoLng = ref(126.9786567);
const infoVisible = ref(false);

// 지도에 폴리곤으로 표시할 영역데이터 배열입니다
const onLoadKakaoMap = (mapRef) => {
  map.value = mapRef;

  displayArea(area);
};

const displayArea = (area) => {
  const path = ref([]);

  for (let i = 0; i < area.path.length; i++) {
    path.value.push(new kakao.maps.LatLng(area.path[i].lat, area.path[i].lng));
  }

  // 지도에 표시할 다각형을 생성합니다
  const polygon = new kakao.maps.Polygon({
    path: path.value, // 그려질 다각형의 좌표 배열입니다
    strokeWeight: 3, // 선의 두께입니다
    strokeColor: '#39DE2A', // 선의 색깔입니다
    strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    strokeStyle: 'longdash', // 선의 스타일입니다
    fillColor: '#A2FF99', // 채우기 색깔입니다
    fillOpacity: 0.7 // 채우기 불투명도 입니다
  });

  // 지도에 다각형을 표시합니다
  if (map.value !== undefined) {
    polygon.setMap(map.value);

    area.value = Math.floor(polygon.getArea()); // 다각형의 총면적을 계산합니다
    content.value = `${area.name}의 총 면적 : 약 ${area.value}m<sup>2</sup>`;

    // 다각형에 마우스클릭 이벤트를 등록합니다
    //'mouseover','mouseout','mousedown','click' 이벤트가 등록 가능합니다
    kakao.maps.event.addListener(polygon, 'click', function (mouseEvent) {
      infoLat.value = mouseEvent.latLng.getLat();
      infoLng.value = mouseEvent.latLng.getLng();
      infoVisible.value = true;
    });
  }
};
</script>

<template>
  <KakaoMap :lat="37.566826" :lng="126.9786567" :level="8" @onLoadKakaoMap="onLoadKakaoMap">
    <KakaoMapInfoWindow :lat="infoLat" :lng="infoLng" :visible="infoVisible" :content="content" :zIndex="5" />
  </KakaoMap>
  <p>색칠된 영역을 클릭해보세요</p>
</template>
