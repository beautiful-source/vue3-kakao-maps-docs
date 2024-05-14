<script setup lang="ts">
import { ref } from 'vue';
import { KakaoMap, KakaoMapMarker, KakaoMapInfoWindow } from 'vue3-kakao-maps';

const marker = ref<kakao.maps.Marker>();

const onLoadKakaoMapMarker = (newMarker: kakao.maps.Marker): void => {
  marker.value = newMarker;
};
</script>

<template>
  <KakaoMap :lat="33.450701" :lng="126.570667" :draggable="true">
    <KakaoMapMarker :lat="33.450701" :lng="126.570667" @onLoadKakaoMapMarker="onLoadKakaoMapMarker" />
    <KakaoMapInfoWindow :marker="marker" :lat="33.450701" :lng="126.570667" :visible="true">
      <div>Hello World!</div>
    </KakaoMapInfoWindow>
  </KakaoMap>
</template>
