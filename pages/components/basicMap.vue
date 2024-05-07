<script setup lang="ts">
import {
  KakaoMapBasicMapCodeTs,
  KakaoMapBasicMapCodeJs,
} from "@/components/KakaoMap";

const tsCode = KakaoMapBasicMapCodeTs as string;
const jsCode = KakaoMapBasicMapCodeJs as string;
</script>

<template>
  <h1>KakaoMap</h1>
  <p>카카오맵 컴포넌트입니다.</p>
  <CodeBox :tsCode="tsCode" :jsCode="jsCode">
    <template #demo>
      <KakaoMapBasicMapJs />
    </template>
  </CodeBox>
</template>

<style scoped lang="scss"></style>
