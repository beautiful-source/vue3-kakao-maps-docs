<script setup lang="ts">
import { ref } from 'vue';
import { KakaoMap, KakaoMapMarker, KakaoMapInfoWindow } from 'vue3-kakao-maps';

const marker = ref<kakao.maps.Marker>();

const onLoadKakaoMapMarker = (newMarker: kakao.maps.Marker): void => {
  marker.value = newMarker;
};
</script>

<template>
  <KakaoMap :lat="37.566826" :lng="126.9786567" :draggable="true">
    <KakaoMapMarker :lat="37.566826" :lng="126.9786567" @onLoadKakaoMapMarker="onLoadKakaoMapMarker" />
    <KakaoMapInfoWindow :marker="marker" :lat="37.566826" :lng="126.9786567" :visible="true">
      <div>Hello World!</div>
    </KakaoMapInfoWindow>
  </KakaoMap>
</template>
