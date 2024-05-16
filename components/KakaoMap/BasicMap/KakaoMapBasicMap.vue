<script setup lang="ts">
import { KakaoMap } from 'vue3-kakao-maps';
import type { ControlDataSourceType } from '@/components/common/ControlBox.vue';
import type { HandlerBoxDataSourceType } from '@/components/common/HandlerBox.vue';

const lat = ref<number>(33.450701);
const lng = ref<number>(126.570667);
const width = ref<number | string>('40rem');
const height = ref<number | string>('30rem');
const level = ref<number>(3);
const mapTypeId = ref<number>(1);
const draggable = ref<boolean>(true);
const scrollwheel = ref<boolean>(true);
const projectionId = ref<string>('kakao.maps.ProjectionId.WCONG');
const keyboardShortcuts = ref<boolean>();

const dataSource: Ref<ControlDataSourceType[]> = ref([
  {
    name: 'width',
    description: '지도의 가로 길이',
    type: ['number', 'string'],
    default: '40rem',
    control: {
      type: 'Input',
      value: width
    }
  },
  {
    name: 'height',
    description: '지도의 세로 길이',
    type: ['number', 'string'],
    default: '30rem',
    control: {
      type: 'Input',
      value: height
    }
  },
  {
    name: 'markerList',
    description: '지도에 표시할 marker 데이터의 리스트',
    type: ['KakaoMapMarkerListItem[]']
  },
  {
    name: 'infoWindowList',
    description: '지도에 표시할 인포윈도우 데이터의 리스트',
    type: ['KakaoMapInfoWindowListItem[]']
  },
  {
    name: 'markerCluster',
    description: '지도에 표시할 marker cluster의 속성 및 데이터 리스트',
    type: ['MarkerClusterInfo']
  },
  {
    name: 'lat',
    description: '지도의 위도 값',
    type: ['number'],
    control: {
      type: 'NumberInput',
      value: lat
    },
    required: true
  },
  {
    name: 'lng',
    description: '지도의 경도 값',
    type: ['number'],
    control: {
      type: 'NumberInput',
      value: lng
    },
    required: true
  },
  {
    name: 'level',
    description:
      '지도 확대 수준. MapTypeId 의 종류에 따라 설정 범위가 다르다. SKYVIEW, HYBRID 일 경우 0 ~ 14, ROADMAP 일 경우 1 ~ 14.',
    type: ['number'],
    default: 3,
    control: {
      type: 'NumberInput',
      value: level
    }
  },
  {
    name: 'mapTypeId',
    description:
      '지도 종류를 설정합니다. 기본값은 일반 지도(1), (베이스) 일반 지도: 1, (베이스) 스카이뷰:2, (베이스) 하이브리드(스카이뷰 + 레이블): 3, (오버레이) 레이블: 4',
    type: ['kakao.maps.MapTypeId'],
    default: 1,
    control: {
      type: 'Select',
      value: mapTypeId,
      selectArgs: [
        {
          value: 1,
          name: 1
        },
        {
          value: 2,
          name: 2
        },
        {
          value: 3,
          name: 3
        },
        {
          value: 4,
          name: 4
        }
      ]
    }
  },
  {
    name: 'draggable',
    description: '마우스 드래그, 휠, 모바일 터치를 이용한 시점 변경(이동, 확대, 축소) 가능 여부',
    type: ['boolean'],
    default: 'true',
    control: {
      type: 'Boolean',
      value: draggable
    }
  },
  {
    name: 'scrollwheel',
    description: '마우스 휠, 모바일 터치를 이용한 확대 및 축소 가능 여부',
    type: ['boolean'],
    default: 'true',
    control: {
      type: 'Boolean',
      value: scrollwheel
    }
  },
  {
    name: 'disableDoubleClick',
    description: '더블클릭 이벤트 및 더블클릭 확대 가능 여부, 최초 생성시에만 적용됩니다.',
    type: ['boolean'],
    default: 'false'
  },
  {
    name: 'disableDoubleClickZoom',
    description: '더블클릭 확대 가능 여부, 최초 생성시에만 적용됩니다.',
    type: ['boolean'],
    default: 'false'
  },
  {
    name: 'projectionId',
    description: '투영법 지정',
    type: ['string'],
    default: 'kakao.maps.ProjectionId.WCONG',
    control: {
      type: 'Input',
      value: projectionId
    }
  },
  {
    name: 'tileAnimation',
    description: '지도 타일 애니메이션 설정 여부 ',
    type: ['boolean'],
    default: 'true'
  },
  {
    name: 'keyboardShortcuts',
    description:
      '키보드의 방향키와 +,-키로 지도 이동,확대,축소 가능여부를 설정한다. speed 속성은 지도의 이동속도이며, 처음 생성시에만 적용된다.',
    type: ['boolean', '{ speed: number; }'],
    default: 'true',
    control: {
      type: 'Boolean',
      value: keyboardShortcuts
    }
  }
]);

const handlerDataSource: Ref<HandlerBoxDataSourceType[]> = ref([
  {
    name: 'onLoadKakaoMap',
    description: '지도가 로드되었을 때 발생하는 이벤트',
    return: 'kakao.maps.Map'
  },
  {
    name: 'onLoadKakaoMapMarkerCluster',
    description: '지도의 마커 클러스터 로드되었을 때 발생하는 이벤트',
    return: 'kakao.maps.MarkerClusterer'
  }
]);
</script>

<template>
  <div class="control-div">
    <KakaoMap
      :width="width"
      :height="height"
      :lat="lat"
      :lng="lng"
      :level="level"
      :mapTypeId="mapTypeId"
      :draggable="draggable"
      :scrollwheel="scrollwheel"
      :projectionId="projectionId"
      :keyboardShortcuts="keyboardShortcuts"
    />
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
