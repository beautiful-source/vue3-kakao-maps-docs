<script setup lang="ts">
import { KakaoMap } from 'vue3-kakao-maps';
import type { ControlDataSourceType } from '@/components/common/ControlBox.vue';
import type { HandlerBoxDataSourceType } from '@/components/common/HandlerBox.vue';
import chickenList from '@/assets/data/chicken.json';

const controlData: Ref<ControlDataSourceType[]> = ref([
  {
    name: 'markers',
    description: '클러스터링 할 마커 배열',
    type: ['KakaoMapMarkerProps[]'],
    required: true
  },
  {
    name: 'gridSize',
    description: '클러스터의 격자 크기',
    type: ['number'],
    default: '60'
  },
  {
    name: 'averageCenter',
    description: '마커들의 좌표 평균을 클러스터 좌표 설정 여부',
    type: ['boolean'],
    default: 'false'
  },
  {
    name: 'minLevel',
    description: '클러스터링 할 지도의 최소 레벨 값',
    type: ['number'],
    default: '0'
  },
  {
    name: 'minClusterSize',
    description: '클러스터링 할 최소 마커 수',
    type: ['number'],
    default: '2'
  },
  {
    name: 'styles',
    description: '클러스터의 스타일, calculator 로 구분된 사이즈 구간마다 적용',
    type: ['object[]']
  },
  {
    name: 'texts',
    description: '클러스터에 표시할 문자열 또는 문자열 생성 함수',
    type: ['string[]', '((size: number) => string)'],
    default: '클러스터에 포함된 숫자'
  },
  {
    name: 'calculator',
    description: '클러스터 크기를 구분하는 값을 가진 배열 또는 구분값 생성함수',
    type: ['number[]', '((size: number) => number[])'],
    default: '[10, 100, 1000, 10000]'
  },
  {
    name: 'disableClickZoom',
    description: '클러스터 클릭 시 지도 확대 불가 여부',
    type: ['boolean'],
    default: 'false'
  },
  {
    name: 'clickable',
    description: '클러스터 클릭 가능 여부 지정 옵션',
    type: ['boolean'],
    default: 'true'
  },
  {
    name: 'hoverable',
    description: ' 클러스터에 마우스 over/out 가능 여부 지정 옵션',
    type: ['boolean'],
    default: 'true'
  }
]);

const eventsData: Ref<HandlerBoxDataSourceType[]> = ref([
  {
    name: 'onLoadKakaoMapMarkerCluster',
    description: '클러스터가 로드되었을 때 발생하는 이벤트',
    return: 'kakao.maps.MarkerClusterer'
  }
]);
</script>

<template>
  <BasicComponentBox :control-data="controlData" :events-data="eventsData">
    <KakaoMap :lat="36.34" :lng="127.77" :level="14" :markerCluster="{ markers: chickenList }" />
  </BasicComponentBox>
</template>

<style scoped lang="scss">
.control-div {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}
.emit-event-title {
  font-size: 1.4rem;
  font-weight: 600;
}
</style>
