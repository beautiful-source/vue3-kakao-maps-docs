<script setup lang="ts">
import {
  KakaoMapMarkerClusterBasicMarkerClusterCodeJs,
  KakaoMapMarkerClusterBasicMarkerClusterCodeTs,
  KakaoMapMarkerClusterChickenClustererCodeJs,
  KakaoMapMarkerClusterChickenClustererCodeTs,
  KakaoMapMarkerClusterAddClustererClickEventCodeJs,
  KakaoMapMarkerClusterAddClustererClickEventCodeTs,
  KakaoMapMarkerClusterCustomOverlayClusterTsCode,
  KakaoMapMarkerClusterCustomOverlayClusterJsCode
} from '@/components/KakaoMapMarkerCluster';
</script>

<template>
  <h1 id="marker-cluster-control">KakaoMapMarkerCluster</h1>
  <p>카카오 지도 마커 클러스터 컴포넌트입니다.</p>
  <div>마커 클러스터를 쓰려면 <NuxtLink to="/docs/get-started/library">여기에서</NuxtLink> 라이브러리를 추가해주세요!</div>
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
  <br />
  <CodeBox :tsCode="KakaoMapMarkerClusterChickenClustererCodeTs" :jsCode="KakaoMapMarkerClusterChickenClustererCodeJs">
    <template #demo>
      <KakaoMapMarkerClusterChickenClustererTs />
    </template>
  </CodeBox>
  <h2 id="clusterer-click-event">마커 클러스터 클릭 이벤트</h2>
  <p>마커 클러스터 클릭 이벤트입니다.</p>
  <CodeBox
    :tsCode="KakaoMapMarkerClusterAddClustererClickEventCodeTs"
    :jsCode="KakaoMapMarkerClusterAddClustererClickEventCodeJs"
  >
    <template #demo>
      <KakaoMapMarkerClusterAddClustererClickEventTs />
    </template>
  </CodeBox>
  <h2 id="custom-overlay-cluster">커스텀 오버레이 클러스터</h2>
  <p>커스텀 오버레이 클러스터입니다.</p>
  <CodeBox :tsCode="KakaoMapMarkerClusterCustomOverlayClusterTsCode" :jsCode="KakaoMapMarkerClusterCustomOverlayClusterJsCode">
    <template #demo>
      <KakaoMapMarkerClusterCustomOverlayClusterTs />
    </template>
  </CodeBox>
</template>
