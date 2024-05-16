<script setup lang="ts">
import { KakaoMap, KakaoMapInfoWindow } from 'vue3-kakao-maps';
import type { ControlDataSourceType } from '@/components/common/ControlBox.vue';

const lat = ref<number>(33.450701);
const lng = ref<number>(126.570667);
const removable = ref<boolean>(true);
const marker = ref<kakao.maps.Marker>();
const content = ref<string>();
const disableAutoPan = ref<boolean>(false);
const zIndex = ref<number>();
const altitude = ref<number>();
const range = ref<number>(500);
const visible = ref<boolean>(true);

const dataSource: Ref<ControlDataSourceType[]> = ref([
  {
    name: 'lat',
    description: '인포윈도우의 위도 값',
    type: ['number'],
    control: {
      type: 'NumberInput',
      value: lat
    },
    required: true
  },
  {
    name: 'lng',
    description: '인포윈도우의 경도 값',
    type: ['number'],
    control: {
      type: 'NumberInput',
      value: lng
    },
    required: true
  },
  {
    name: 'removable',
    description: '삭제 가능한 인포윈도우 여부, 최초 생성시에만 적용됩니다.',
    type: ['boolean'],
    default: 'false',
    control: {
      type: 'Boolean',
      value: removable
    }
  },
  {
    name: 'marker',
    description: '인포윈도우가 올라갈 marker 객체',
    type: ['kakao.maps.Marker']
  },
  {
    name: 'content',
    description: '엘리먼트 또는 HTML 문자열 형태의 인포윈도우의 내용 slot으로도 전달 가능합니다.',
    type: ['string'],
    control: {
      type: 'Input',
      value: content
    }
  },
  {
    name: 'disableAutoPan',
    description: '인포윈도우를 열 때 지도가 자동으로 패닝하지 않을지의 여부 (기본값: false), 최초 생성시에만 적용됩니다.',
    type: ['boolean'],
    default: 'false',
    control: {
      type: 'Boolean',
      value: disableAutoPan
    }
  },
  {
    name: 'zIndex',
    description: '인포윈도우 엘리먼트의 z-index 속성 값',
    type: ['number'],
    control: {
      type: 'NumberInput',
      value: zIndex
    }
  },
  {
    name: 'altitude',
    description: '로드뷰에 올라있는 인포윈도우의 높이 값(m 단위)',
    type: ['number']
  },
  {
    name: 'range',
    description:
      '로드뷰 상에서 인포윈도우의 가시반경(m 단위), 두 지점 사이의 거리가 지정한 값보다 멀어지면 인포윈도우는 보이지 않게 됩니다. 기본값은 500입니다.',
    type: ['number']
  },
  {
    name: 'visible',
    description: '사용자가 좌표를 클릭하기 전에 인포윈도우를 표시할 것인지 여부 (기본값: true)',
    type: ['boolean'],
    default: 'true',
    control: {
      type: 'Boolean',
      value: visible
    }
  }
]);
</script>

<template>
  <div>
    <KakaoMap :lat="33.450701" :lng="126.570667">
      <KakaoMapInfoWindow
        :lat="lat"
        :lng="lng"
        :removable="removable"
        :marker="marker"
        :content="content"
        :disableAutoPan="disableAutoPan"
        :zIndex="zIndex"
        :altitude="altitude"
        :range="range"
        :visible="visible"
      >
        <div>Hello World!</div>
      </KakaoMapInfoWindow>
    </KakaoMap>
    <ControlBox v-model:dataSource="dataSource" />
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  align-items: center;
  width: 100%;
}
</style>
