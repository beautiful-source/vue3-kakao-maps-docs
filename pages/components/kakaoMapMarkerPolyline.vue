<script setup lang="ts">
import {
  KakaoMapMarkerPolylineBasicMarkerPolylineCodeJs,
  KakaoMapMarkerPolylineBasicMarkerPolylineCodeTs,
  KakaoMapMarkerPolylineArrowMarkerPolylineCodeTs,
  KakaoMapMarkerPolylineArrowMarkerPolylineCodeJs,
  KakaoMapMarkerPolylineOrderMarkerPolylineCodeTs,
  KakaoMapMarkerPolylineOrderMarkerPolylineCodeJs,
  KakaoMapMarkerPolylineCustomMarkerPolylineCodeTs,
  KakaoMapMarkerPolylineCustomMarkerPolylineCodeJs
} from '@/components/KakaoMapMarkerPolyline';
</script>

<template>
  <h1 id="marker-polyline-control">KakaoMapMarkerPolyline</h1>
  <p>카카오 지도 마커 폴리라인 컴포넌트입니다.</p>
  <KakaoMapMarkerPolylineBasicMarkerPolyline />
  <h2 id="basic-marker-polyline">마커 폴리라인 생성하기</h2>
  <p>기본적인 마커 폴리라인을 생성하는 예제입니다.</p>
  <CodeBox :tsCode="KakaoMapMarkerPolylineBasicMarkerPolylineCodeTs" :jsCode="KakaoMapMarkerPolylineBasicMarkerPolylineCodeJs">
    <template #demo>
      <KakaoMapMarkerPolylineBasicMarkerPolylineTs />
    </template>
  </CodeBox>
  <h2 id="arrow-marker-polyline">마커 폴리라인에 화살표 표시하기</h2>
  <p>마커 폴리라인에 화살표를 표시하는 예제입니다. endArrow를 true로 설정합니다.</p>
  <CodeBox :tsCode="KakaoMapMarkerPolylineArrowMarkerPolylineCodeTs" :jsCode="KakaoMapMarkerPolylineArrowMarkerPolylineCodeJs">
    <template #demo>
      <KakaoMapMarkerPolylineArrowMarkerPolylineTs />
    </template>
  </CodeBox>
  <h2 id="order-marker-polyline">마커 폴리라인에 순서 표시하기</h2>
  <p>마커 폴리라인에 순서를 표시하는 예제입니다. showMarkerOrder를 true로 설정합니다.</p>
  <CodeBox :tsCode="KakaoMapMarkerPolylineOrderMarkerPolylineCodeTs" :jsCode="KakaoMapMarkerPolylineOrderMarkerPolylineCodeJs">
    <template #demo>
      <KakaoMapMarkerPolylineOrderMarkerPolylineTs />
    </template>
  </CodeBox>
  <h2 id="custom-marker-polyline">마커 폴리라인 커스텀하기</h2>
  <p>마커 폴리라인을 커스텀한 예제입니다.</p>
  <CodeBox :tsCode="KakaoMapMarkerPolylineCustomMarkerPolylineCodeTs" :jsCode="KakaoMapMarkerPolylineCustomMarkerPolylineCodeJs">
    <template #demo>
      <KakaoMapMarkerPolylineCustomMarkerPolylineTs />
    </template>
  </CodeBox>
</template>
