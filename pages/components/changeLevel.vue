<script setup lang="ts">
import { KakaomapchangeLevelCodeTs } from "@/components/KakaoMap";
import { KakaomapchangeLevelCodeJs } from "@/components/KakaoMap";

const tsCode = KakaomapchangeLevelCodeTs as string;
const jsCode = KakaomapchangeLevelCodeJs as string;
</script>

<template>
  <h1>지도 레벨 바꾸기</h1>
  <p>지도 레벨을 지도 객체 메소드를 호출해서 변경합니다.</p>
  <CodeBox :tsCode="tsCode" :jsCode="jsCode">
    <template #demo>
      <KakaoMapChangeLevelTs />
    </template>
  </CodeBox>
</template>

<style scoped lang="scss"></style>
