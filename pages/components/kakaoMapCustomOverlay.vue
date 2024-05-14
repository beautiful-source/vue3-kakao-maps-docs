<script setup lang="ts">
import {
  KakaoMapCustomOverlayBasicCustomOverlayCodeTs,
  KakaoMapCustomOverlayBasicCustomOverlayCodeJs,
  KakaoMapCustomOverlayBasicCustomOverlay2CodeTs,
  KakaoMapCustomOverlayBasicCustomOverlay2CodeJs,
  KakaoMapCustomOverlayMarkerCustomOverlayCodeTs,
  KakaoMapCustomOverlayMarkerCustomOverlayCodeJs,
  KakaoMapCustomOverlayRemovableCustomOverlayCodeTs,
  KakaoMapCustomOverlayRemovableCustomOverlayCodeJs,
  KakaoMapCustomOverlayInvisibleCustomOverlayCodeTs,
  KakaoMapCustomOverlayInvisibleCustomOverlayCodeJs
} from '@/components/KakaoMapCustomOverlay';

useSeoMeta({
  title: 'KakaoMapCustomOverlay',
  description: '카카오맵 커스텀 오버레이(KakaoMapCustomOverlay) 컴포넌트 소개와 해당 컴포넌트로 구현할 수 있는 기능입니다.'
});

const anchorItems = [
  {
    key: 'custom-overlay',
    href: '#custom-overlay',
    title: 'KakaoMapCustomOverlay'
  },
  {
    key: 'basic-custom-overlay',
    href: '#basic-custom-overlay',
    title: '커스텀 오버레이 생성하기1'
  },
  {
    key: 'basic-custom-overlay2',
    href: '#basic-custom-overlay2',
    title: '커스텀 오버레이 생성하기2'
  },
  {
    key: 'marker-custom-overlay',
    href: '#marker-custom-overlay',
    title: '커스텀 오버레이 마커 위에 표시하기'
  },
  {
    key: 'removable-custom-overlay',
    href: '#removable-custom-overlay',
    title: '닫기가 가능한 커스텀 오버레이'
  },
  {
    key: 'invisible-custom-overlay',
    href: '#invisible-custom-overlay',
    title: '보이지 않게 커스텀 오버레이 생성하기'
  }
];
</script>

<template>
  <div class="contents-wrap">
    <div class="contents">
      <h1 id="custom-overlay">KakaoMapCustomOverlay</h1>
      <p>카카오 커스텀 오버레이 컴포넌트입니다. HTML과 CSS를 이용해 지도 위에 자유롭게 컨텐츠를 표시할 수 있습니다.</p>
      <KakaoMapCustomOverlayBasicCustomOverlay />
      <h2 id="basic-custom-overlay">커스텀 오버레이 생성하기1</h2>
      <p>slot으로 컨텐츠를 설정할 수 있습니다.</p>
      <CodeBox :tsCode="KakaoMapCustomOverlayBasicCustomOverlayCodeTs" :jsCode="KakaoMapCustomOverlayBasicCustomOverlayCodeJs">
        <template #demo>
          <KakaoMapCustomOverlayBasicCustomOverlayTs />
        </template>
      </CodeBox>
      <h2 id="basic-custom-overlay2">커스텀 오버레이 생성하기2</h2>
      <p>content 속성으로 컨텐츠를 설정할 수 있습니다.</p>
      <CodeBox :tsCode="KakaoMapCustomOverlayBasicCustomOverlay2CodeTs" :jsCode="KakaoMapCustomOverlayBasicCustomOverlay2CodeJs">
        <template #demo>
          <KakaoMapCustomOverlayBasicCustomOverlay2Ts />
        </template>
      </CodeBox>
      <h2 id="marker-custom-overlay">커스텀 오버레이 마커 위에 표시하기</h2>
      <p>lat, lng, yAnchor을 사용하여 KakaoMapMarker 위에 커스텀 오버레이를 생성할 수 있습니다.</p>
      <CodeBox :tsCode="KakaoMapCustomOverlayMarkerCustomOverlayCodeTs" :jsCode="KakaoMapCustomOverlayMarkerCustomOverlayCodeJs">
        <template #demo>
          <KakaoMapCustomOverlayMarkerCustomOverlayTs />
        </template>
      </CodeBox>
      <h2 id="removable-custom-overlay">닫기가 가능한 커스텀 오버레이</h2>
      <p>
        HTML과 CSS를 이용해 지도 위에 자유롭게 컨텐츠를 표시합니다. 커스텀 오버레이를 마커 위에 표시하고 X버튼을 클릭했을 때
        커스텀 오버레이를 지도에서 제거합니다. 마커를 클릭하면 다시 커스텀 오버레이가 표시됩니다.
      </p>
      <CodeBox
        :tsCode="KakaoMapCustomOverlayRemovableCustomOverlayCodeTs"
        :jsCode="KakaoMapCustomOverlayRemovableCustomOverlayCodeJs"
      >
        <template #demo>
          <KakaoMapCustomOverlayRemovableCustomOverlayTs />
        </template>
      </CodeBox>
      <h2 id="invisible-custom-overlay">보이지 않게 커스텀오버레이 생성하기</h2>
      <p>
        visible을 사용하여 초기에 보이지 않게 커스텀 오버레이를 생성할 수 있습니다. 이 예제에서는 마커를 클릭하여 커스텀
        오버레이가 표시되는 여부를 조작합니다.
      </p>
      <CodeBox
        :tsCode="KakaoMapCustomOverlayInvisibleCustomOverlayCodeTs"
        :jsCode="KakaoMapCustomOverlayInvisibleCustomOverlayCodeJs"
      >
        <template #demo>
          <KakaoMapCustomOverlayInvisibleCustomOverlayTs />
        </template>
      </CodeBox>
    </div>
    <div class="anchor">
      <a-affix :offset-top="70">
        <a-anchor :items="anchorItems" :offset-top="70" />
      </a-affix>
    </div>
  </div>
</template>
