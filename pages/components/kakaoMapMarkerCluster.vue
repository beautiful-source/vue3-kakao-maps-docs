<script setup lang="ts">
import {
  KakaoMapMarkerClusterBasicMarkerClusterCodeJs,
  KakaoMapMarkerClusterBasicMarkerClusterCodeTs
} from '@/components/KakaoMapMarkerCluster';

const anchorItems = [
  {
    key: 'marker-cluster-control',
    href: '#marker-cluster-control',
    title: '컨트롤러'
  }
];
</script>

<template>
  <div class="contents-wrap">
    <div class="contents">
      <h1 id="marker-cluster-control">KakaoMapMarkerCluster</h1>
      <p>카카오 지도 마커 클러스터 컴포넌트입니다.</p>
      <KakaoMapMarkerClusterBasicMarkerCluster />
      <h2>마커 클러스터 생성하기</h2>
      <p>기본적인 마커 클러스터 생성입니다.</p>
      <CodeBox :tsCode="KakaoMapMarkerClusterBasicMarkerClusterCodeTs" :jsCode="KakaoMapMarkerClusterBasicMarkerClusterCodeJs">
        <template #demo>
          <KakaoMapMarkerClusterBasicMarkerClusterTs />
        </template>
      </CodeBox>
    </div>
    <div class="anchor">
      <a-anchor :items="anchorItems" :offsetTop="20" />
    </div>
  </div>
</template>
