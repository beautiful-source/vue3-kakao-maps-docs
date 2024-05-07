<script setup lang="ts">
import {
  KakaoMapMoveMapCodeTs,
  KakaoMapMoveMapCodeJs,
} from "@/components/KakaoMap";

const tsCode = KakaoMapMoveMapCodeTs as string;
const jsCode = KakaoMapMoveMapCodeJs as string;
</script>

<template>
  <h1>KakaoMap</h1>
  <p>
    지도를 이동시킵니다. 지도 객체의 메소드를 통해 지도를 원하는 좌표로 이동시킬
    수 있습니다. 또, 지도가 표시되고 있는 영역크기를 벗어나지 않는 거리라면
    애니메이션 효과처럼 지도를 부드럽게 이동시킬 수도 있습니다.
  </p>
  <CodeBox :tsCode="tsCode" :jsCode="jsCode">
    <template #demo>
      <KakaoMapMoveMapTs />
    </template>
  </CodeBox>
</template>

<style scoped lang="scss"></style>
