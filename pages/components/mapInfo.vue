<script setup lang="ts">
import {
  KakaoMapMapInfoCodeTs,
  KakaoMapMapInfoCodeJs,
} from "@/components/KakaoMap";

const tsCode = KakaoMapMapInfoCodeTs as string;
const jsCode = KakaoMapMapInfoCodeJs as string;
</script>

<template>
  <h2>지도 정보 얻어오기</h2>
  <p>지도 레벨, 중심좌표, 지도 타입, 지도 영역정보를 얻어와 표출합니다.</p>
  <NuxtLink href="https://apis.map.kakao.com/web/documentation/#MapTypeId"
    >지도 타입을 보시려면 여기를 클릭하세요!</NuxtLink
  >
  <CodeBox :tsCode="tsCode" :jsCode="jsCode">
    <template #demo>
      <KakaoMapMapInfoTs />
    </template>
  </CodeBox>
</template>

<style scoped lang="scss"></style>
