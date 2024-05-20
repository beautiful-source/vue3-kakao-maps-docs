<script setup lang="ts">
import { ref } from 'vue';
import { KakaoMap } from 'vue3-kakao-maps';
import type { KakaoMapCustomOverlayProps } from 'vue3-kakao-maps';
const customList = ref<KakaoMapCustomOverlayProps[]>([]);
for (let i = 0; i < 10; i++) {
  customList.value.push({
    lat: 33.450701 + i * 0.001,
    lng: 126.570667,
    content: `<div class ="label"><span class="center" style="background-color: blue; color: white;">커스텀 오버레이 ${i}</span><span class="right"></span></div>`
  });
}
</script>

<template>
  <div>
    <KakaoMap :lat="33.450701" :lng="126.570667" :level="10" :markerCluster="{ customOverlayProps: customList }" />
  </div>
</template>
