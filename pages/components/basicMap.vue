<script setup lang="ts">
import { KakaoMap } from "vue3-kakao-maps";
</script>

<template>
  <h1>KakaoMap</h1>
  <p>카카오맵 컴포넌트입니다.</p>
  <KakaoMap :lat="33.450701" :lng="126.570667"> </KakaoMap>
</template>

<style scoped lang="scss"></style>
