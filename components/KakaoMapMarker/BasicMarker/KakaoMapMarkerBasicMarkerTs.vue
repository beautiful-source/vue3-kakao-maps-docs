<script setup lang="ts">
import { KakaoMap, KakaoMapMarker } from "vue3-kakao-maps";
</script>

<template>
  <KakaoMap :lat="33.450705" :lng="126.570667">
    <KakaoMapMarker :lat="33.450705" :lng="126.570667" />
  </KakaoMap>
</template>

<style scoped></style>
