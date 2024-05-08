<script setup lang="ts">
import {
  KakaoMapCustomOverlayBasicCustomOverlayCodeTs,
  KakaoMapCustomOverlayBasicCustomOverlayCodeJs
} from '@/components/KakaoMapCustomOverlay';
const anchorItems = [
  {
    key: 'basic-map1',
    href: '#basic-map1',
    title: '커스텀 오버레이 생성하기1'
  },
  {
    key: 'move-map',
    href: '#move-map',
    title: '지도 이동시키기'
  },
  {
    key: 'map-info',
    href: '#map-info',
    title: '지도 정보 얻어오기'
  }
];
</script>

<template>
  <div>
    <h1>KakaoMapCustomOverlay</h1>
    <p>카카오 커스텀 오버레이 컴포넌트입니다.</p>
    <KakaoMapCustomOverlayBasicCustomOverlay />
    <h2>KakaoMapCustomOverlay</h2>
    <h2 id="basic-map1">커스텀 오버레이 생성하기1</h2>
    <p>커스텀 오버레이 생성하기</p>
    <CodeBox :tsCode="KakaoMapCustomOverlayBasicCustomOverlayCodeTs" :jsCode="KakaoMapCustomOverlayBasicCustomOverlayCodeJs">
      <template #demo>
        <KakaoMapCustomOverlayBasicCustomOverlayTs />
      </template>
    </CodeBox>
  </div>
  <div class="anchor">
    <a-anchor :items="anchorItems" />
  </div>
</template>
