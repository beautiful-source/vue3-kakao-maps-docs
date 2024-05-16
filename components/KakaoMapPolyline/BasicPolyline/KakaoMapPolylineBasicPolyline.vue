<script setup lang="ts">
import { KakaoMap, KakaoMapPolyline } from 'vue3-kakao-maps';
import type { KakaoMapLatLngItem } from 'vue3-kakao-maps';
import type { ControlDataSourceType } from '@/components/common/ControlBox.vue';
import type { HandlerBoxDataSourceType } from '@/components/common/HandlerBox.vue';

const endArrow = ref<boolean>(false);
const strokeWeight = ref<number>(3);
const strokeColor = ref<string>('#F10000');
const strokeOpacity = ref<number>(0.6);
const strokeStyle = ref<kakao.maps.StrokeStyles>('solid');
const zIndex = ref<number>();

const latLngList = ref<KakaoMapLatLngItem[]>([
  { lat: 33.45, lng: 126.571 },
  { lat: 33.449, lng: 126.5705 },
  { lat: 33.45, lng: 126.5725 }
]);
const dataSource: Ref<ControlDataSourceType[]> = ref([
  {
    name: 'latLngList',
    description: '폴리라인이 지나갈 경로',
    type: ['KakaoMapLatLngItem[]'],
    required: true
  },
  {
    name: 'endArrow',
    description: '선의 화살표 여부',
    type: ['boolean'],
    default: 'false',
    control: {
      type: 'Boolean',
      value: endArrow
    }
  },
  {
    name: 'strokeWeight',
    description: '선의 두께',
    type: ['number'],
    default: 3,
    control: {
      type: 'NumberInput',
      value: strokeWeight
    }
  },
  {
    name: 'strokeColor',
    description: '선의 색',
    type: ['string'],
    default: '#F10000',
    control: {
      type: 'Input',
      value: strokeColor
    }
  },
  {
    name: 'strokeOpacity',
    description: '선의 불투명도. 1에서 0 사이의 값이며 0에 가까울수록 투명하다',
    type: ['number'],
    default: 0.6,
    control: {
      type: 'NumberInput',
      value: strokeOpacity
    }
  },
  {
    name: 'strokeStyle',
    description: '선의 스타일',
    type: ['kakao.maps.StrokeStyles'],
    default: 'solid',
    control: {
      type: 'Input',
      value: strokeStyle
    }
  },
  {
    name: 'zIndex',
    description: '선의 z-index 속성 값',
    type: ['number'],
    control: {
      type: 'NumberInput',
      value: zIndex
    }
  }
]);

const handlerDataSource: Ref<HandlerBoxDataSourceType[]> = ref([
  {
    name: 'onLoadKakaoMapPolyline',
    description: '폴리라인이 로드되었을 때 발생하는 이벤트',
    return: 'kakao.maps.Polyline'
  }
]);
</script>

<template>
  <div class="control-div">
    <KakaoMap :lat="33.450701" :lng="126.570667">
      <KakaoMapPolyline
        :latLngList="latLngList"
        :strokeOpacity="strokeOpacity"
        :strokeColor="strokeColor"
        :strokeStyle="strokeStyle"
        :strokeWeight="strokeWeight"
        :zIndex="zIndex"
        :endArrow="endArrow"
      />
    </KakaoMap>
    <ControlBox v-model:dataSource="dataSource" />
  </div>
  <p class="emit-event-title">Events</p>
  <HandlerBox :dataSource="handlerDataSource" />
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
