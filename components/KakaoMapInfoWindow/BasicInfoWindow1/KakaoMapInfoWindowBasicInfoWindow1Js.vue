<script setup>
import { KakaoMap, KakaoMapInfoWindow } from 'vue3-kakao-maps';
</script>

<template>
  <KakaoMap :lat="33.450705" :lng="126.570667">
    <KakaoMapInfoWindow :lat="33.450705" :lng="126.570667" :removable="true" :content="'props로 추가'" />
  </KakaoMap>
</template>

<style scoped></style>
