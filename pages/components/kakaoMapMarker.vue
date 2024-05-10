<script setup lang="ts">
import {
  KakaoMapMarkerBasicMarkerCodeTs,
  KakaoMapMarkerBasicMarkerCodeJs,
  KakaoMapMarkerImageMarkerCodeTs,
  KakaoMapMarkerImageMarkerCodeJs,
  KakaoMapMarkerInfoWindowMarker1CodeTs,
  KakaoMapMarkerInfoWindowMarker1CodeJs,
  KakaoMapMarkerInfoWindowMarker2CodeTs,
  KakaoMapMarkerInfoWindowMarker2CodeJs,
  KakaoMapMarkerAddMarkerClickEventCodeTs,
  KakaoMapMarkerAddMarkerClickEventCodeJs,
  KakaoMapMarkerAddMarkerMouseEventCodeTs,
  KakaoMapMarkerAddMarkerMouseEventCodeJs,
  KakaoMapMarkerAddMarkerOrderCodeTs,
  KakaoMapMarkerAddMarkerOrderCodeJs
} from '@/components/KakaoMapMarker';

const anchorItems = [
  {
    key: 'basic-marker',
    href: '#basic-marker',
    title: '마커 생성하기'
  },
  {
    key: 'image-marker',
    href: '#image-marker',
    title: '이미지 마커 생성하기'
  },
  {
    key: 'infowindow-marker-1',
    href: '#infowindow-marker-1',
    title: '인포윈도우가 있는 마커 생성하기1'
  },
  {
    key: 'infowindow-marker-2',
    href: '#infowindow-marker-2',
    title: '인포윈도우가 있는 마커 생성하기2'
  },
  {
    key: 'add-marker-click-event',
    href: '#add-marker-click-event',
    title: '마커에 클릭 이벤트 등록하기'
  },
  {
    key: 'add-marker-mouse-event',
    href: '#add-marker-mouse-event',
    title: '마커에 마우스 이벤트 등록하기'
  },
  {
    key: 'add-marker-order',
    href: '#add-marker-order',
    title: '마커에 순서 표시하기'
  }
];
</script>

<template>
  <div class="contents-wrap">
    <div class="contents">
      <h1>KakaoMapMarker</h1>
      <p>카카오 마커 컴포넌트입니다.</p>
      <KakaoMapMarkerBasicMarker />
      <h2 id="basic-marker">마커 생성하기</h2>
      <p>기본적인 마커 생성입니다.</p>
      <CodeBox :tsCode="KakaoMapMarkerBasicMarkerCodeTs" :jsCode="KakaoMapMarkerBasicMarkerCodeJs">
        <template #demo>
          <KakaoMapMarkerBasicMarkerTs />
        </template>
      </CodeBox>
      <h2 id="image-marker">다른 이미지로 마커 생성하기</h2>
      <p>
        원하는 이미지를 사용해서 더 멋진 마커를 만들 수 있습니다. 아래 예제는 마커로 사용할 이미지의 크기나 꼭지점 위치 등을
        지정하여 기본 마커 대신 이용하는 예제입니다. 이미지의 경로는 절대경로와 상대경로 모두 사용이 가능합니다.
      </p>
      <CodeBox :tsCode="KakaoMapMarkerImageMarkerCodeTs" :jsCode="KakaoMapMarkerImageMarkerCodeJs">
        <template #demo>
          <KakaoMapMarkerImageMarkerTs />
        </template>
      </CodeBox>
      <h2 id="infowindow-marker-1">인포윈도우가 있는 마커 생성하기 1</h2>
      <p>props로 추가하는 예시입니다.</p>
      <CodeBox :tsCode="KakaoMapMarkerInfoWindowMarker1CodeTs" :jsCode="KakaoMapMarkerInfoWindowMarker1CodeJs">
        <template #demo>
          <KakaoMapMarkerInfoWindowMarker1Ts />
        </template>
      </CodeBox>
      <h2 id="infowindow-marker-2">인포윈도우가 있는 마커 생성하기 2</h2>
      <p>v-slot으로 추가하는 예시입니다.</p>
      <CodeBox :tsCode="KakaoMapMarkerInfoWindowMarker2CodeTs" :jsCode="KakaoMapMarkerInfoWindowMarker2CodeJs">
        <template #demo>
          <KakaoMapMarkerInfoWindowMarker2Ts />
        </template>
      </CodeBox>
      <h2 id="add-marker-click-event">마커에 클릭 이벤트 등록하기</h2>
      <p>
        마커를 마우스로 클릭했을때 click 이벤트가 발생합니다. 이 예제에서는 마커를 클릭했을 때 마커 위의 인포윈도우를 안보이게
        하고 있습니다.
      </p>
      <CodeBox :tsCode="KakaoMapMarkerAddMarkerClickEventCodeTs" :jsCode="KakaoMapMarkerAddMarkerClickEventCodeJs">
        <template #demo>
          <KakaoMapMarkerAddMarkerClickEventTs />
        </template>
      </CodeBox>
      <h2 id="add-marker-mouse-event">마커에 마우스 이벤트 등록하기</h2>
      <p>
        마커에 마우스 커서를 올렸을때 mouseover 이벤트가, 마우스 커서를 내리면 mouseout 이벤트가 발생합니다. 이 예제에서는 마커에
        마우스 커서를 올리고 내릴때 인포윈도우를 표시하거나 제거하고 있습니다.
      </p>
      <CodeBox :tsCode="KakaoMapMarkerAddMarkerMouseEventCodeTs" :jsCode="KakaoMapMarkerAddMarkerMouseEventCodeJs">
        <template #demo>
          <KakaoMapMarkerAddMarkerMouseEventTs />
        </template>
      </CodeBox>
      <h2 id="add-marker-order">마커에 순서 표시하기</h2>
      <p>마커에 순서를 표시하는 예제입니다. orderBottomMargin를 통해 마커에 순서가 표시될 y축 위치를 조정할 수 있습니다.</p>
      <CodeBox :tsCode="KakaoMapMarkerAddMarkerOrderCodeTs" :jsCode="KakaoMapMarkerAddMarkerOrderCodeJs">
        <template #demo>
          <KakaoMapMarkerAddMarkerOrderTs />
        </template>
      </CodeBox>
    </div>
    <div class="anchor">
      <a-anchor :items="anchorItems" :offsetTop="20" />
    </div>
  </div>
</template>
