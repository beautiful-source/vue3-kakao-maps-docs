<script setup>
import { KakaoMap } from "vue3-kakao-maps";

const map = ref<kakao.maps.Map>();

function zoomIn() {
  // 현재 지도의 레벨을 얻어옵니다
  var level = map.getLevel();

  // 지도를 1레벨 내립니다 (지도가 확대됩니다)
  map.setLevel(level - 1);

  // 지도 레벨을 표시합니다
  displayLevel();
}

function zoomOut() {
  // 현재 지도의 레벨을 얻어옵니다
  var level = map.getLevel();

  // 지도를 1레벨 올립니다 (지도가 축소됩니다)
  map.setLevel(level + 1);

  // 지도 레벨을 표시합니다
  displayLevel();
}

function displayLevel() {
  var levelEl = document.getElementById("maplevel");
  levelEl.innerHTML = "현재 지도 레벨은 " + map.getLevel() + " 레벨 입니다.";
}
</script>

<template>
  <KakaoMap :lat="33.450701" :lng="126.570667" />
  <a-button type="primary" :click="zoomIn()">지도레벨 - 1</a-button>
  <a-button type="primary" :click="zoomOut()">지도레벨 + 1</a-button>
</template>

<style scoped></style>
