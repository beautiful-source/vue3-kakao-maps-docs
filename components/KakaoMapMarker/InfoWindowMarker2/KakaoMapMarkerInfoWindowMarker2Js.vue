<script setup>
import { KakaoMap, KakaoMapMarker } from "vue3-kakao-maps";
</script>

<template>
  <KakaoMap :lat="33.450705" :lng="126.570667">
    <KakaoMapMarker :lat="33.450705" :lng="126.570667">
      <template v-slot:infoWindow
        ><div style="padding: 10px">v-slot으로 추가</div></template
      >
    </KakaoMapMarker>
  </KakaoMap>
</template>

<style scoped></style>
