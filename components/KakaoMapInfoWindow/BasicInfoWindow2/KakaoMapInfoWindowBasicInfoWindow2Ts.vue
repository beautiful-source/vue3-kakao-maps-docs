<script setup lang="ts">
import { KakaoMap, KakaoMapInfoWindow } from 'vue3-kakao-maps';
</script>

<template>
  <KakaoMap :lat="33.450705" :lng="126.570667">
    <KakaoMapInfoWindow :lat="33.450705" :lng="126.570667" :removable="true">
      <div>slot으로 추가</div>
    </KakaoMapInfoWindow>
  </KakaoMap>
</template>
