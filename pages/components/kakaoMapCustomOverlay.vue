<script setup lang="ts">
import {
  KakaoMapBasicMapCodeTs,
  KakaoMapBasicMapCodeJs,
  KakaoMapBasicMap,
} from '@/components/KakaoMap';

const anchorItems = [
  {
    key: 'basic-map',
    href: '#basic-map',
    title: '지도 생성하기',
  },
  {
    key: 'move-map',
    href: '#move-map',
    title: '지도 이동시키기',
  },
  {
    key: 'map-info',
    href: '#map-info',
    title: '지도 정보 얻어오기',
  },
];

const tsCode = KakaoMapBasicMapCodeTs as string;
const jsCode = KakaoMapBasicMapCodeJs as string;
</script>

<template>
  <div>
    <h1>KakaoMapCustomOverlay</h1>
    <p>카카오 커스텀 오버레이 컴포넌트입니다.</p>
    <KakaoMapBasicMap />
  </div>
  <div class="anchor">
    <a-anchor :items="anchorItems" />
  </div>
</template>
