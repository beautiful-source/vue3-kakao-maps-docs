<script setup>
import { ref } from 'vue';
import { KakaoMap } from 'vue3-kakao-maps';
const customList = ref();
for (let i = 0; i < 10; i++) {
  customList.value.push({
    lat: 33.450701 + i * 0.001,
    lng: 126.570667,
    content: `<div class ="label"><span class="center" style="background-color: bisque">예시${i}</span><span class="right"></span></div>`
  });
}
</script>

<template>
  <div>
    <KakaoMap :lat="33.450701" :lng="126.570667" :level="10" :markerCluster="{ customOverlayProps: customList }" />
  </div>
</template>

<style scoped></style>
