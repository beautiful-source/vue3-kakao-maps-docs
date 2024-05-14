<script setup>
import { KakaoMap } from 'vue3-kakao-maps';
import { ref } from 'vue';

const lat = ref(33.450701);
const lng = ref(126.570667);
const map = ref();
const latRange = [33.45058, 33.450701];
const lngRange = [126.570667, 126.574942];

const onLoadKakaoMap = (mapRef) => {
  map.value = mapRef;
};

const changeLatLng = () => {
  lat.value = Math.random() * (latRange[1] - latRange[0]) + latRange[0];
  lng.value = Math.random() * (lngRange[1] - lngRange[0]) + lngRange[0];
};

const setCenter = () => {
  if (map.value) {
    map.value.setCenter(new kakao.maps.LatLng(33.450701, 126.570667));
  }
};

const panTo = () => {
  if (map.value) {
    // 지도 중심을 부드럽게 이동시킵니다
    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
    map.value.panTo(new kakao.maps.LatLng(33.45058, 126.574942));
  }
};
</script>

<template>
  <KakaoMap :lat="lat" :lng="lng" @onLoadKakaoMap="onLoadKakaoMap" />
  <div>
    <button @click="changeLatLng" class="demo-button">좌표값 변경으로 중심좌표 부드러운 이동</button>
    <button @click="setCenter" class="demo-button">map 객체로 중심좌표 이동</button>
    <button @click="panTo" class="demo-button">map 객체로 부드러운 이동</button>
  </div>
</template>
