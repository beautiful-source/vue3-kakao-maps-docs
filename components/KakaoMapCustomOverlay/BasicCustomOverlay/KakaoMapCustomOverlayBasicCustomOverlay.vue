<script setup lang="ts">
import { KakaoMap, KakaoMapCustomOverlay } from 'vue3-kakao-maps';
import type { ControlDataSourceType } from '@/components/common/ControlBox.vue';

const lat = ref<number>(33.450701);
const lng = ref<number>(126.570667);
const content = ref<string>();
const zIndex = ref<number>();
const visible = ref<boolean>(true);

const dataSource: Ref<ControlDataSourceType[]> = ref([
  {
    name: 'lat',
    description: '커스텀 오버레이의 위도 값',
    required: true,
    type: ['number'],
    control: {
      type: 'Input',
      value: lat
    }
  },
  {
    name: 'lng',
    description: '커스텀 오버레이의 경도 값',
    required: true,
    type: ['number'],
    control: {
      type: 'Input',
      value: lng
    }
  },
  {
    name: 'content',
    description: '커스텀 오버레이의 내용. 문자열, HTML 문자열 형태입니다.',
    type: ['string'],
    control: {
      type: 'Input',
      value: content
    }
  },
  {
    name: 'xAnchor',
    description: '컨텐츠의 x축 위치. 0_1 사이의 값을 가진다. 기본값은 0.5, 최초 생성시에만 적용됩니다.',
    type: ['number'],
    default: 0.5
  },
  {
    name: 'yAnchor',
    description: '컨텐츠의 y축 위치. 0_1 사이의 값을 가진다. 기본값은 0.5, 최초 생성시에만 적용됩니다.',
    type: ['number'],
    default: 0.5
  },
  {
    name: 'zIndex',
    description: '커스텀 오버레이의 z-index',
    type: ['number'],
    control: {
      type: 'Input',
      value: zIndex
    }
  },
  {
    name: 'clickable',
    description: 'true 로 설정하면 컨텐츠 영역을 클릭했을 경우 지도 이벤트를 막아준다, 최초 생성시에만 적용됩니다.',
    type: ['boolean'],
    default: 'false'
  },
  {
    name: 'visible',
    description: '초기에 커스텀 오버레이를 표시할 것인지 여부',
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
    <ClientOnly>
      <KakaoMap :lat="33.450701" :lng="126.570667">
        <KakaoMapCustomOverlay :lat="lat" :lng="lng" :content="content" :zIndex="zIndex" :visible="visible">
          <div
            style="
              padding: 10px;
              background-color: white;
              border: 1px solid #ccc;
              border-radius: 5px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
            "
          >
            <div style="font-weight: bold; margin-bottom: 5px">카카오 스페이스닷원</div>
            <div style="display: flex">
              <div style="margin-right: 10px">
                <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png" width="73" height="70" />
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-start">
                <div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap">제주특별자치도 제주시 첨단로 242</div>
                <div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap">(우) 63309 (지번) 영평동 2181</div>
                <div><a href="https://www.kakaocorp.com/main" target="_blank" style="color: blue">홈페이지</a></div>
              </div>
            </div>
          </div>
        </KakaoMapCustomOverlay>
      </KakaoMap>
    </ClientOnly>
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
