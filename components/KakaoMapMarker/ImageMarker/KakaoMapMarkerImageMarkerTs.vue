<script setup lang="ts">
import { KakaoMap, KakaoMapMarker } from 'vue3-kakao-maps';
</script>

<template>
  <KakaoMap :lat="33.450705" :lng="126.570667">
    <KakaoMapMarker
      :lat="33.450705"
      :lng="126.570667"
      title="절대경로로 이미지 가져오기"
      :image="{
        imageSrc: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
        imageWidth: 64,
        imageHeight: 64,
        imageOption: {}
      }"
    />
    <KakaoMapMarker
      :lat="33.450705"
      :lng="126.572367"
      title="상대경로로 이미지 가져오기"
      :image="{
        imageSrc: '/images/markerImage.png',
        imageWidth: 64,
        imageHeight: 64,
        imageOption: {}
      }"
    />
  </KakaoMap>
</template>

<style scoped></style>
