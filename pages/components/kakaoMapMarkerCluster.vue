<script setup lang="ts">
import {
  KakaoMapMarkerClusterBasicMarkerClusterJs,
  KakaoMapMarkerClusterBasicMarkerClusterTs
} from '@/components/KakaoMapMarkerCluster';

const anchorItems = [
  {
    key: 'marker-cluster-control',
    href: '#marker-cluster-control',
    title: '마커 클러스터 컨트롤'
  }
];
</script>

<template>
  <div>
    <h1 id="marker-cluster-control">KakaoMapMarkerCluster</h1>
    <p>카카오 지도 마커 클러스터 컴포넌트입니다.</p>
    <KakaoMapMarkerClusterBasicMarkerCluster />
    <h2>마커 클러스터 생성하기</h2>
    <p>기본적인 마커 클러스터 생성입니다.</p>
    <CodeBox :tsCode="KakaoMapMarkerClusterBasicMarkerClusterTs" :jsCode="KakaoMapMarkerClusterBasicMarkerClusterJs">
      <template #demo>
        <KakaoMapMarkerClusterBasicMarkerClusterTs />
      </template>
    </CodeBox>
  </div>
  <div class="anchor">
    <a-anchor :items="anchorItems" />
  </div>
</template>
