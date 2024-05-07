<script setup lang="ts">
import { KakaomapchangeLevelCodeJs } from "@/components/KakaoMap";

const tsCode = KakaomapchangeLevelCodeJs as string;
const jsCode = KakaomapchangeLevelCodeJs as string;
</script>

<template>
  <h1>KakaoMap</h1>
  <p>카카오맵 지도 레벨 변경하기 컴포넌트입니다.</p>
  <CodeBox :tsCode="tsCode" :jsCode="jsCode">
    <template #demo>
      <KakaoMapChangeLevelJs />
    </template>
  </CodeBox>
</template>

<style scoped lang="scss"></style>
