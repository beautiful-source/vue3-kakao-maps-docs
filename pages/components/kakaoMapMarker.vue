<script setup lang="ts">
import {
  KakaoMapBasicMarkerCodeTs,
  KakaoMapBasicMarkerCodeJs,
} from "@/components/KakaoMapMarker";
import KakaoMapBasicMarkerTs from "@/components/KakaoMapMarker/BasicMarker/KakaoMapBasicMarkerTs.vue";

const anchorItems = [
  {
    key: "basic-marker",
    href: "#basic-marker",
    title: "마커 생성하기",
  },
];
</script>

<template>
  <div>
    <h1>KakaoMapMarker</h1>
    <h2 id="basic-marker">마커 생성하기</h2>
    <p>기본적인 마커 생성입니다.</p>
    <CodeBox
      :tsCode="KakaoMapBasicMarkerCodeTs"
      :jsCode="KakaoMapBasicMarkerCodeJs"
    >
      <template #demo>
        <KakaoMapBasicMarkerTs />
      </template>
    </CodeBox>
  </div>
  <div class="anchor">
    <a-anchor :items="anchorItems" />
  </div>
</template>
