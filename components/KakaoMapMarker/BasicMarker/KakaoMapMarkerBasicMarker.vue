<script setup lang="ts">
import {
  KakaoMap,
  type KakaoMapMarkerImage,
  KakaoMapMarker,
  type KakaoMapMarkerInfoWindow,
} from 'vue3-kakao-maps';
import type { ControlDataSourceType } from '@/components/common/ControlBox.vue';

const lat = ref<number>(33.450705);
const lng = ref<number>(126.570667);
const image = ref<KakaoMapMarkerImage>();
const infoWindow = ref<KakaoMapMarkerInfoWindow>();
const title = ref<string>('마커');
const draggable = ref<boolean>(true);
const clickable = ref<boolean>(true);
const zIndex = ref<number>();
const opacity = ref<number>();
const altitude = ref<number>();

const dataSource: Ref<ControlDataSourceType[]> = ref([
  {
    name: 'lat',
    description: '마커의 위도 값',
    type: ['number'],
    control: {
      type: 'Input',
      value: lat,
    },
  },
  {
    name: 'lng',
    description: '마커의 경도 값',
    type: ['number'],
    control: {
      type: 'Input',
      value: lng,
    },
  },
  {
    name: 'infoWindow',
    description: '마커에 추가할 InfoWindow content',
    type: ['KakaoMapMarkerInfoWindow'],
  },
  {
    name: 'image',
    description:
      '마커 이미지, 이미지를 설정하지 않으면 기본 마커 이미지로 보임',
    type: ['KakaoMapMarkerImage'],
  },
  {
    name: 'title',
    description: '마커의 타이틀 속성 값 (툴팁)',
    type: ['string'],
    control: {
      type: 'Input',
      value: title,
    },
  },
  {
    name: 'draggable',
    description: '마커의 드래그 가능 여부',
    type: ['boolean'],
    control: {
      type: 'Boolean',
      value: draggable,
    },
  },
  {
    name: 'clickable',
    description: '마커의 클릭 가능 여부',
    type: ['boolean'],
    control: {
      type: 'Boolean',
      value: clickable,
    },
  },

  {
    name: 'zIndex',
    description: '마커의 z-index 속성 값',
    type: ['number'],
    control: {
      type: 'Input',
      value: zIndex,
    },
  },
  {
    name: 'opacity',
    description: '마커 투명도 (0-1)',
    type: ['number'],
    control: {
      type: 'Input',
      value: opacity,
    },
  },
  {
    name: 'altitude',
    description: '로드뷰에 올라가 있는 마커의 높이 값(m 단위)',
    type: ['number'],
  },
  {
    name: 'range',
    description:
      '로드뷰 상에서 마커의 가시반경(m 단위), 두 지점 사이의 거리가 지정한 값보다 멀어지면 마커는 로드뷰에서 보이지 않게 됨',
    type: ['number'],
  },
]);
</script>

<template>
  <div>
    <KakaoMap :lat="33.450705" :lng="126.570667">
      <KakaoMapMarker
        :lat="lat"
        :lng="lng"
        :title="title"
        :infoWindow="{
          content: 'Hello world',
        }"
        :altitude="altitude"
        :draggable="draggable"
        :clickable="clickable"
        :opacity="opacity"
        :z-index="zIndex"
      />
    </KakaoMap>
    <ControlBox v-model:dataSource="dataSource" />
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  align-items: center;
}
</style>
