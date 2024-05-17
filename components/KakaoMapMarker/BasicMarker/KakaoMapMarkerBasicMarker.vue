<script setup lang="ts">
import { KakaoMap, KakaoMapMarker } from 'vue3-kakao-maps';
import type { ControlDataSourceType } from '@/components/common/ControlBox.vue';
import type { HandlerBoxDataSourceType } from '@/components/common/HandlerBox.vue';

const lat = ref<number>(33.450705);
const lng = ref<number>(126.570667);
const title = ref<string>('마커');
const draggable = ref<boolean>(false);
const clickable = ref<boolean>(false);
const zIndex = ref<number>();
const opacity = ref<number>();
const altitude = ref<number>();
const order = ref<number | string>(5);
const orderBottomMargin = ref<string>('70px');

const controlData: Ref<ControlDataSourceType[]> = ref([
  {
    name: 'lat',
    description: '마커의 위도 값',
    required: true,
    type: ['number'],
    control: {
      type: 'NumberInput',
      value: lat
    }
  },
  {
    name: 'lng',
    description: '마커의 경도 값',
    required: true,
    type: ['number'],
    control: {
      type: 'NumberInput',
      value: lng
    }
  },
  {
    name: 'infoWindow',
    description: '마커에 추가할 InfoWindow content',
    type: ['KakaoMapMarkerInfoWindow']
  },
  {
    name: 'image',
    description: '마커 이미지, 이미지를 설정하지 않으면 기본 마커 이미지로 보임',
    type: ['KakaoMapMarkerImage']
  },
  {
    name: 'title',
    description: '마커의 타이틀 속성 값 (툴팁)',
    type: ['string'],
    control: {
      type: 'Input',
      value: title
    }
  },
  {
    name: 'draggable',
    description: '마커의 드래그 가능 여부',
    type: ['boolean'],
    default: 'false',
    control: {
      type: 'Boolean',
      value: draggable
    }
  },
  {
    name: 'clickable',
    description: '마커의 클릭 가능 여부',
    type: ['boolean'],
    default: 'false',
    control: {
      type: 'Boolean',
      value: clickable
    }
  },

  {
    name: 'zIndex',
    description: '마커의 z-index 속성 값',
    type: ['number'],
    default: '0',
    control: {
      type: 'NumberInput',
      value: zIndex
    }
  },
  {
    name: 'opacity',
    description: '마커 투명도 (0-1)',
    type: ['number'],
    control: {
      type: 'NumberInput',
      value: opacity
    }
  },
  {
    name: 'altitude',
    description: '로드뷰에 올라가 있는 마커의 높이 값(m 단위)',
    type: ['number']
  },
  {
    name: 'range',
    description:
      '로드뷰 상에서 마커의 가시반경(m 단위), 두 지점 사이의 거리가 지정한 값보다 멀어지면 마커는 로드뷰에서 보이지 않게 됨',
    type: ['number']
  },
  {
    name: 'order',
    description: '마커에 표시할 순서',
    type: ['number', 'string'],
    control: {
      type: 'Input',
      value: order
    }
  },
  {
    name: 'orderBottomMargin',
    description: '마커에 표시될 순서의 y축 위치 (px, rem, vh 등 단위 포함)',
    type: ['string'],
    control: {
      type: 'Input',
      value: orderBottomMargin
    }
  }
]);

const eventsData: Ref<HandlerBoxDataSourceType[]> = ref([
  {
    name: 'onLoadKakaoMapMarker',
    description: '마커가 로드되었을 때 발생하는 이벤트',
    return: 'kakao.maps.Marker'
  },
  {
    name: 'onClickKakaoMapMarker',
    description: '마커를 클릭할 때 발생하는 이벤트'
  },
  {
    name: 'dragEndKakaoMapMarker',
    description: '마커를 드래그할 때 발생하는 이벤트',
    return: 'kakao.maps.Marker'
  },
  {
    name: 'mouseOverKakaoMapMarker',
    description: '마커에 마우스가 오버될 때 발생하는 이벤트'
  },
  {
    name: 'mouseOutKakaoMapMarker',
    description: '마커에 마우스가 아웃될 때 발생하는 이벤트'
  },
  {
    name: 'deleteKakaoMapMarker',
    description: '지도에서 마커가 언마운트 될 때 발생하는 이벤트',
    return: 'kakao.maps.Marker'
  }
]);
</script>

<template>
  <BasicComponentBox :control-data="controlData" :events-data="eventsData">
    <KakaoMap :lat="33.450705" :lng="126.570667">
      <KakaoMapMarker
        :lat="lat"
        :lng="lng"
        :title="title"
        :altitude="altitude"
        :draggable="draggable"
        :clickable="clickable"
        :opacity="opacity"
        :z-index="zIndex"
        :order="order"
        :order-bottom-margin="orderBottomMargin"
      />
    </KakaoMap>
  </BasicComponentBox>
</template>
