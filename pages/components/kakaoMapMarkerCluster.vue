<script setup lang="ts">
import {
  KakaoMapMarkerClusterBasicMarkerClusterCodeJs,
  KakaoMapMarkerClusterBasicMarkerClusterCodeTs,
  KakaoMapMarkerClusterChickenClustererCodeJs,
  KakaoMapMarkerClusterChickenClustererCodeTs
} from '@/components/KakaoMapMarkerCluster';
</script>

<template>
  <h1 id="marker-cluster-control">KakaoMapMarkerCluster</h1>
  <p>카카오 지도 마커 클러스터 컴포넌트입니다.</p>
  <KakaoMapMarkerClusterBasicMarkerCluster />
  <h2 id="basic-marker-cluster">마커 클러스터 생성하기</h2>
  <p>기본적인 마커 클러스터 생성입니다.</p>
  <CodeBox :tsCode="KakaoMapMarkerClusterBasicMarkerClusterCodeTs" :jsCode="KakaoMapMarkerClusterBasicMarkerClusterCodeJs">
    <template #demo>
      <KakaoMapMarkerClusterBasicMarkerClusterTs />
    </template>
  </CodeBox>
  <h2 id="chicken-clusterer">클러스터 마커에 텍스트 표시하기</h2>
  <p>클러스터 마커에 텍스트 표시하기입니다.</p>
  <div>사용한 데이터를 보시려면 <a href="https://apis.map.kakao.com/download/web/data/chicken.json">여기를 클릭하세요!</a></div>
  <CodeBox :tsCode="KakaoMapMarkerClusterChickenClustererCodeTs" :jsCode="KakaoMapMarkerClusterChickenClustererCodeJs">
    <template #demo>
      <KakaoMapMarkerClusterChickenClustererTs />
    </template>
  </CodeBox>
</template>
