<script setup lang="ts">
import {
  KakaoMapInfoWindowBasicInfoWindow1CodeTs,
  KakaoMapInfoWindowBasicInfoWindow1CodeJs,
  KakaoMapInfoWindowBasicInfoWindow2CodeJs,
  KakaoMapInfoWindowBasicInfoWindow2CodeTs,
  KakaoMapInfoWindowMarkerWithInfoWindowCodeJs,
  KakaoMapInfoWindowMarkerWithInfoWindowCodeTs
} from '@/components/KakaoMapInfoWindow';

useSeoMeta({
  title: 'KakaoMapInfoWindow',
  description: '카카오맵 인포윈도우(KakaoMapInfoWindow) 컴포넌트 소개와 해당 컴포넌트로 구현할 수 있는 기능입니다.'
});
</script>

<template>
  <h1 id="infowindow-control">KakaoMapInfoWindow</h1>
  <p>카카오 인포윈도우 컴포넌트입니다.</p>
  <KakaoMapInfoWindowBasicInfoWindow />
  <h2 id="basic-infowindow-1">인포윈도우 생성하기 1</h2>
  <p>props로 추가하는 예시입니다.</p>
  <CodeBox :tsCode="KakaoMapInfoWindowBasicInfoWindow1CodeTs" :jsCode="KakaoMapInfoWindowBasicInfoWindow1CodeJs">
    <template #demo>
      <KakaoMapInfoWindowBasicInfoWindow1Ts />
    </template>
  </CodeBox>
  <h2 id="basic-infowindow-2">인포윈도우 생성하기 2</h2>
  <p>slot으로 추가하는 예시입니다.</p>
  <CodeBox :tsCode="KakaoMapInfoWindowBasicInfoWindow2CodeTs" :jsCode="KakaoMapInfoWindowBasicInfoWindow2CodeJs">
    <template #demo>
      <KakaoMapInfoWindowBasicInfoWindow2Ts />
    </template>
  </CodeBox>
  <h2 id="marker-With-infowindow">마커에 인포윈도우 표시하기</h2>
  <p>마커 위에 인포윈도우를 함께 표시합니다. 인포윈도우에 들어갈 내용은 HTML로 자유롭게 입력할 수 있습니다.</p>
  <CodeBox :tsCode="KakaoMapInfoWindowMarkerWithInfoWindowCodeTs" :jsCode="KakaoMapInfoWindowMarkerWithInfoWindowCodeJs">
    <template #demo>
      <KakaoMapInfoWindowMarkerWithInfoWindowTs />
    </template>
  </CodeBox>
</template>
