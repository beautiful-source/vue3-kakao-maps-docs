<script setup lang="ts">
import { KakaoMap, type KakaoMapMarkerListItem, KakaoMapMarkerPolyline } from 'vue3-kakao-maps';
import type { ControlDataSourceType } from '@/components/common/ControlBox.vue';
import type { HandlerBoxDataSourceType } from '@/components/common/HandlerBox.vue';

const markerList = ref<KakaoMapMarkerListItem[]>([
  {
    lat: 33.4509,
    lng: 126.571
  },
  { lat: 33.451, lng: 126.572 },
  { lat: 33.452, lng: 126.573 },
  { lat: 33.4518, lng: 126.5725 }
]);
const endArrow = ref<boolean>(false);
const strokeWeight = ref<number>(3);
const strokeColor = ref<string>('#F10000');
const strokeOpacity = ref<number>(0.6);
const strokeStyle = ref<kakao.maps.StrokeStyles>('solid');
const zIndex = ref<number>();
const showMarkerOrder = ref<boolean>(true);

const dataSource: Ref<ControlDataSourceType[]> = ref([
  {
    name: 'markerList',
    description: '지도에 표시할 marker 데이터의 리스트',
    required: true,
    type: ['KakaoMapMarkerListItem[]']
  },
  {
    name: 'endArrow',
    description: '폴리라인의 화살표 여부',
    type: ['boolean'],
    control: {
      type: 'Boolean',
      value: endArrow
    }
  },
  {
    name: 'strokeWeight',
    description: '폴리라인의 두께',
    type: ['number'],
    default: 3,
    control: {
      type: 'Input',
      value: strokeWeight
    }
  },
  {
    name: 'strokeColor',
    description: '폴리라인의 색',
    type: ['string'],
    default: '#F10000',
    control: {
      type: 'Input',
      value: strokeColor
    }
  },
  {
    name: 'strokeOpacity',
    description: '폴리라인의 불투명도. 1에서 0 사이의 값이며 0에 가까울수록 투명하다.',
    type: ['number'],
    default: 0.6,
    control: {
      type: 'Input',
      value: strokeOpacity
    }
  },
  {
    name: 'strokeStyle',
    description:
      '폴리라인의 스타일로 총 11종류가 있다. (solid, shortdash, shortdot, shortdashdot, shortdashdotdot, dot, dash, dashdot, longdash, longdashdot, longdashdotdot)',
    type: ['kakao.maps.StrokeStyles'],
    default: 'solid',
    control: {
      type: 'Input',
      value: strokeStyle
    }
  },
  {
    name: 'zIndex',
    description: '폴리라인의 z-index 속성 값',
    type: ['number'],
    control: {
      type: 'Input',
      value: zIndex
    }
  },
  {
    name: 'showMarkerOrder',
    description: '마커의 순서 여부',
    type: ['boolean'],
    control: {
      type: 'Boolean',
      value: showMarkerOrder
    }
  }
]);
</script>

<template>
  <div class="control-div">
    <KakaoMap :lat="33.452" :lng="126.572">
      <KakaoMapMarkerPolyline
        :markerList="markerList"
        :endArrow="endArrow"
        :strokeWeight="strokeWeight"
        :strokeColor="strokeColor"
        :strokeOpacity="strokeOpacity"
        :strokeStyle="strokeStyle"
        :zIndex="zIndex"
        :showMarkerOrder="showMarkerOrder"
      />
    </KakaoMap>
    <ControlBox v-model:dataSource="dataSource" />
  </div>
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
