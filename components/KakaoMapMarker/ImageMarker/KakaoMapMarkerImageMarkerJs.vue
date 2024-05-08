<script setup>
import { KakaoMap, KakaoMapMarker } from 'vue3-kakao-maps';
</script>

<template>
  <KakaoMap :lat="33.450705" :lng="126.570667">
    <KakaoMapMarker
      :lat="33.450705"
      :lng="126.570667"
      :image="{
        imageSrc: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
        imageWidth: 64,
        imageHeight: 64,
        imageOption: {}
      }"
    />
  </KakaoMap>
</template>

<style scoped></style>
