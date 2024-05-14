<script setup lang="ts">
import { KakaoMap } from 'vue3-kakao-maps';
</script>

<template>
  <div><KakaoMap :lat="36.34" :lng="127.77" :level="14" :markerCluster="{}" /></div>
</template>

<style scoped></style>
