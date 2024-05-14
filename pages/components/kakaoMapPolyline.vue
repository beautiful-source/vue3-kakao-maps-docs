<script setup lang="ts">
import {
  KakaoMapPolylineBasicPolylineCodeJs,
  KakaoMapPolylineBasicPolylineCodeTs,
  KakaoMapPolylineArrowPolylineCodeJs,
  KakaoMapPolylineArrowPolylineCodeTs
} from '@/components/KakaoMapPolyline';
</script>

<template>
  <h1>KakaoMapPolyline</h1>
  <p>카카오 폴리라인 컴포넌트입니다.</p>
  <KakaoMapPolylineBasicPolyline />
  <h2 id="basic-polyline">폴리라인 생성하기</h2>
  <p>기본적인 폴리라인 lat, lng을 포함한 객체 배열을 속성으로 설정하여 생성할 수 있습니다.</p>
  <CodeBox :tsCode="KakaoMapPolylineBasicPolylineCodeTs" :jsCode="KakaoMapPolylineBasicPolylineCodeJs">
    <template #demo>
      <KakaoMapPolylineBasicPolylineTs />
    </template>
  </CodeBox>
  <h2 id="arrow-polyline">폴리라인에 화살표 표시하기</h2>
  <p>폴리라인에 화살표를 표시할 수 있습니다.</p>
  <CodeBox :tsCode="KakaoMapPolylineArrowPolylineCodeTs" :jsCode="KakaoMapPolylineArrowPolylineCodeJs">
    <template #demo>
      <KakaoMapPolylineArrowPolylineTs />
    </template>
  </CodeBox>
</template>

<style lang="scss"></style>
