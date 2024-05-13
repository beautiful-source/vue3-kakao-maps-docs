<script setup lang="ts">
import {
  KakaoMapMarkerPolylineBasicMarkerPolylineCodeJs,
  KakaoMapMarkerPolylineBasicMarkerPolylineCodeTs
} from '@/components/KakaoMapMarkerPolyline';

const anchorItems = [
  {
    key: 'basic-marker-polyline',
    href: '#basic-marker-polyline',
    title: '마커 폴리라인 생성하기'
  }
];
</script>

<template>
  <div class="contents-wrap">
    <div class="contents">
      <h1>KakaoMapMarkerCluster</h1>
      <p>카카오 지도 마커 폴리라인 컴포넌트입니다.</p>
      <KakaoMapMarkerPolylineBasicMarkerPolyline />
      <h2 id="#basic-marker-polyline">마커 폴리라인 생성하기</h2>
      <p>기본적인 마커 폴리라인 생성입니다.</p>
      <CodeBox
        :tsCode="KakaoMapMarkerPolylineBasicMarkerPolylineCodeTs"
        :jsCode="KakaoMapMarkerPolylineBasicMarkerPolylineCodeJs"
      >
        <template #demo>
          <KakaoMapMarkerPolylineBasicMarkerPolylineTs />
        </template>
      </CodeBox>
    </div>
    <div class="anchor">
      <a-anchor :items="anchorItems" :offsetTop="20" />
    </div>
  </div>
</template>
