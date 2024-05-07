<script setup lang="ts">
import {
  KakaoMapBasicMapCodeTs,
  KakaoMapBasicMapCodeJs,
} from "@/components/KakaoMap";

const anchorItems = [
  {
    key: "part-1",
    href: "#part-1",
    title: "Part 1",
  },
  {
    key: "part-2",
    href: "#part-2",
    title: "Part 2",
  },
  {
    key: "part-3",
    href: "#part-3",
    title: "Part 3",
  },
];

const tsCode = KakaoMapBasicMapCodeTs as string;
const jsCode = KakaoMapBasicMapCodeJs as string;
</script>

<template>
  <div>
    <h1 id="part-1">KakaoMap</h1>
    <p>카카오맵 컴포넌트입니다.</p>
    <CodeBox :tsCode="tsCode" :jsCode="jsCode">
      <template #demo>
        <KakaoMapBasicMapJs />
      </template>
    </CodeBox>
    <h1 id="part-2">KakaoMap2</h1>
    <p>카카오맵 컴포넌트입니다.</p>
    <CodeBox :tsCode="tsCode" :jsCode="jsCode">
      <template #demo>
        <KakaoMapBasicMapJs />
      </template>
    </CodeBox>
    <h1 id="part-3">KakaoMap3</h1>
    <p>카카오맵 컴포넌트입니다.</p>
    <CodeBox :tsCode="tsCode" :jsCode="jsCode">
      <template #demo>
        <KakaoMapBasicMapJs />
      </template>
    </CodeBox>
  </div>
  <div class="anchor">
    <a-anchor :items="anchorItems" />
  </div>
</template>

<style scoped lang="scss"></style>
