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
} from "@/components/KakaoMapMarker";

const anchorItems = [
  {
    key: "basic-marker",
    href: "#basic-marker",
    title: "마커 생성하기",
  },
  {
    key: "image-marker",
    href: "#image-marker",
    title: "이미지 마커 생성하기",
  },
  {
    key: "infowindow-marker-1",
    href: "#infowindow-marker-1",
    title: "인포윈도우가 있는 마커 생성하기1",
  },
  {
    key: "infowindow-marker-2",
    href: "#infowindow-marker-2",
    title: "인포윈도우가 있는 마커 생성하기2",
  },
];
</script>

<template>
  <div class="contents-wrap">
    <div class="contents">
      <h1>KakaoMapMarker</h1>
      <h2 id="basic-marker">마커 생성하기</h2>
      <p>기본적인 마커 생성입니다.</p>
      <CodeBox
        :tsCode="KakaoMapMarkerBasicMarkerCodeTs"
        :jsCode="KakaoMapMarkerBasicMarkerCodeJs"
      >
        <template #demo>
          <KakaoMapMarkerBasicMarkerTs />
        </template>
      </CodeBox>
      <h2 id="image-marker">이미지 마커 생성하기</h2>
      <p>이미지 마커 생성입니다.</p>
      <CodeBox
        :tsCode="KakaoMapMarkerImageMarkerCodeTs"
        :jsCode="KakaoMapMarkerImageMarkerCodeJs"
      >
        <template #demo>
          <KakaoMapMarkerImageMarkerTs />
        </template>
      </CodeBox>
      <h2 id="infowindow-marker-1">인포윈도우가 있는 마커 생성하기 1</h2>
      <p>props로 추가하는 예시입니다.</p>
      <CodeBox
        :tsCode="KakaoMapMarkerInfoWindowMarker1CodeTs"
        :jsCode="KakaoMapMarkerInfoWindowMarker1CodeJs"
      >
        <template #demo>
          <KakaoMapMarkerInfoWindowMarker1Ts />
        </template>
      </CodeBox>
      <h2 id="infowindow-marker-2">인포윈도우가 있는 마커 생성하기 2</h2>
      <p>v-slot으로 추가하는 예시입니다.</p>
      <CodeBox
        :tsCode="KakaoMapMarkerInfoWindowMarker2CodeTs"
        :jsCode="KakaoMapMarkerInfoWindowMarker2CodeJs"
      >
        <template #demo>
          <KakaoMapMarkerInfoWindowMarker2Ts />
        </template>
      </CodeBox>
    </div>
    <div class="anchor">
      <a-anchor :items="anchorItems" :offsetTop="20" />
    </div>
  </div>
</template>
