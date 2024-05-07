<script setup lang="ts">
import { KakaoMapDisableMapDragMoveCodeTs } from "@/components/KakaoMap";
import { KakaoMapDisableMapDragMoveCodeJs } from "@/components/KakaoMap";

const tsCode = KakaoMapDisableMapDragMoveCodeTs as string;
const jsCode = KakaoMapDisableMapDragMoveCodeJs as string;
</script>

<template>
  <h2>지도 이동 막기</h2>
  <p>
    마우스 드래그로 지도를 이동시키는 기능을 막습니다. 모바일 기기에서
    터치스크롤시 지도가 이동되는 것을 막고싶거나 지도가 이동되면 안되는 경우 등
    상황에 따라 지도의 이동 기능을 제어할 수 있습니다.
  </p>
  <CodeBox :tsCode="tsCode" :jsCode="jsCode">
    <template #demo>
      <KakaoMapDisableMapDragMoveJs />
    </template>
  </CodeBox>
</template>

<style scoped lang="scss"></style>
