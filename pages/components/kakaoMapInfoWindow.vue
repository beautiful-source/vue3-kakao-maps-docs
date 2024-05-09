<script setup lang="ts">
import {
  KakaoMapInfoWindowBasicInfoWindow1CodeTs,
  KakaoMapInfoWindowBasicInfoWindow1CodeJs
} from '@/components/KakaoMapInfoWindow';

const anchorItems = [
  {
    key: 'basic-infowindow-1',
    href: '#basic-infowindow-1',
    title: '인포윈도우 생성하기 1'
  }
];
</script>

<template>
  <div class="contents-wrap">
    <div class="contents">
      <h1>KakaoMapInfoWindow</h1>
      <p>카카오 인포윈도우 컴포넌트입니다.</p>
      <KakaoMapInfoWindowBasicInfoWindow />
      <h2 id="basic-marker">인포윈도우 생성하기 1</h2>
      <p>props로 추가하는 예시입니다.</p>
      <CodeBox :tsCode="KakaoMapInfoWindowBasicInfoWindow1CodeTs" :jsCode="KakaoMapInfoWindowBasicInfoWindow1CodeJs">
        <template #demo>
          <KakaoMapInfoWindowBasicInfoWindow1Ts />
        </template>
      </CodeBox>
    </div>
    <div class="anchor">
      <a-anchor :items="anchorItems" :offsetTop="20" />
    </div>
  </div>
</template>
