<script setup lang="ts">
import {
  KakaoMapPolylineBasicPolylineCodeJs,
  KakaoMapPolylineBasicPolylineCodeTs,
  KakaoMapPolylineArrowPolylineCodeJs,
  KakaoMapPolylineArrowPolylineCodeTs
} from '@/components/KakaoMapPolyline';

const anchorItems = [
  {
    key: 'basic-polyline',
    href: '#basic-polyline',
    title: '폴리라인 생성하기'
  },
  {
    key: 'arrow-polyline',
    href: '#arrow-polyline',
    title: '폴리라인에 화살표 표시하기'
  }
];
</script>

<template>
  <div class="contents-wrap">
    <div class="contents">
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
    </div>
    <div class="anchor">
      <a-affix :offset-top="70">
        <a-anchor :items="anchorItems" :offset-top="70" />
      </a-affix>
    </div>
  </div>
</template>

<style lang="scss"></style>
