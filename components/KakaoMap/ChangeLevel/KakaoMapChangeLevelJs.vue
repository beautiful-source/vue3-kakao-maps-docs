<script setup>
import { KakaoMap } from "vue3-kakao-maps";

const map = ref();
const mapInfo = ref("");

const onLoadKakaoMap = (mapRef) => {
  map.value = mapRef;
  displayLevel();
};

const zoomIn = () => {
  // 현재 지도의 레벨을 얻어옵니다
  if (map.value) {
    const level = map.value.getLevel();

    // 지도를 1레벨 내립니다 (지도가 확대됩니다)
    map.value.setLevel(level - 1);
  }

  // 지도 레벨을 표시합니다
  displayLevel();
};

const zoomOut = () => {
  // 현재 지도의 레벨을 얻어옵니다
  if (map.value) {
    const level = map.value.getLevel();

    // 지도를 1레벨 올립니다 (지도가 축소됩니다)
    map.value.setLevel(level + 1);
  }

  // 지도 레벨을 표시합니다
  displayLevel();
};

const displayLevel = () => {
  mapInfo.value = `현재 지도 레벨은 ${map.value?.getLevel()} 레벨 입니다.`;
};
</script>

<template>
  <KakaoMap
    :lat="33.450701"
    :lng="126.570667"
    @onLoadKakaoMap="onLoadKakaoMap"
  />
  <button class="demo-button" @click="zoomIn">지도레벨 - 1</button>
  <button class="demo-button" @click="zoomOut">지도레벨 + 1</button>
  <p v-html="mapInfo"></p>
</template>

<style lang="scss" scoped></style>
