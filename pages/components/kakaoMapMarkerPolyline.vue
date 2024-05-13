<script setup lang="ts">
import {
  KakaoMapMarkerPolylineBasicMarkerPolylineCodeJs,
  KakaoMapMarkerPolylineBasicMarkerPolylineCodeTs,
  KakaoMapMarkerPolylineArrowMarkerPolylineCodeTs,
  KakaoMapMarkerPolylineArrowMarkerPolylineCodeJs
} from '@/components/KakaoMapMarkerPolyline';

const anchorItems = [
  {
    key: 'basic-marker-polyline',
    href: '#basic-marker-polyline',
    title: '마커 폴리라인 생성하기'
  },
  {
    key: 'arrow-marker-polyline',
    href: '#arrow-marker-polyline',
    title: '마커 폴리라인에 화살표 표시하기'
  }
];
</script>

<template>
  <div class="contents-wrap">
    <div class="contents">
      <h1>KakaoMapMarkerPolyline</h1>
      <p>카카오 지도 마커 폴리라인 컴포넌트입니다.</p>
      <KakaoMapMarkerPolylineBasicMarkerPolyline />
      <h2 id="basic-marker-polyline">마커 폴리라인 생성하기</h2>
      <p>기본적인 마커 폴리라인 생성입니다.</p>
      <CodeBox
        :tsCode="KakaoMapMarkerPolylineBasicMarkerPolylineCodeTs"
        :jsCode="KakaoMapMarkerPolylineBasicMarkerPolylineCodeJs"
      >
        <template #demo>
          <KakaoMapMarkerPolylineBasicMarkerPolylineTs />
        </template>
      </CodeBox>
      <h2 id="arrow-marker-polyline">마커 폴리라인에 화살표 표시하기</h2>
      <p>마커 폴리라인에 화살표를 표시하는 예제입니다.</p>
      <CodeBox
        :tsCode="KakaoMapMarkerPolylineArrowMarkerPolylineCodeTs"
        :jsCode="KakaoMapMarkerPolylineArrowMarkerPolylineCodeJs"
      >
        <template #demo>
          <KakaoMapMarkerPolylineArrowMarkerPolylineTs />
        </template>
      </CodeBox>
    </div>
    <div class="anchor">
      <a-anchor :items="anchorItems" :offsetTop="20" />
    </div>
  </div>
</template>
