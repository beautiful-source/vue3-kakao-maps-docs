<script setup lang="ts">
import { KakaoMap } from 'vue3-kakao-maps';

const map = ref<kakao.maps.Map>();

// 버튼을 클릭하면 아래 배열의 좌표들이 모두 보이게 지도 범위를 재설정합니다
const points: kakao.maps.LatLng[] = [
  new kakao.maps.LatLng(33.452278, 126.567803),
  new kakao.maps.LatLng(33.452671, 126.574792),
  new kakao.maps.LatLng(33.451744, 126.572441)
];

// 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
const bounds: kakao.maps.LatLngBounds = new kakao.maps.LatLngBounds();

const onLoadKakaoMap = (mapRef: kakao.maps.Map) => {
  map.value = mapRef;

  let marker: kakao.maps.Marker;
  points.forEach((point) => {
    // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
    marker = new kakao.maps.Marker({ position: point });
    marker.setMap(map.value);

    // LatLngBounds 객체에 좌표를 추가합니다
    bounds.extend(point);
  });
};

const setBounds = (): void => {
  // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
  // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
  map.value.setBounds(bounds);
};
</script>

<template>
  <KakaoMap :lat="33.450701" :lng="126.570667" @onLoadKakaoMap="onLoadKakaoMap" />
  <button class="demo-button" @click="setBounds">지도 범위 재설정 하기</button>
</template>
