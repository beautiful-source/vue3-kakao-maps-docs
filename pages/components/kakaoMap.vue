<script setup lang="ts">
import {
  KakaoMapBasicMapCodeTs,
  KakaoMapBasicMapCodeJs,
  KakaoMapMoveMapCodeTs,
  KakaoMapMoveMapCodeJs,
  KakaoMapMapInfoCodeJs,
  KakaoMapMapInfoCodeTs,
  KakaoMapMarkerListCodeJs,
  KakaoMapMarkerListCodeTs,
} from "@/components/KakaoMap";
import KakaoMapMarkerListTs from "~/components/KakaoMap/MarkerList/KakaoMapMarkerListTs.vue";

const anchorItems = [
  {
    key: "basic-map",
    href: "#basic-map",
    title: "지도 생성하기",
  },
  {
    key: "move-map",
    href: "#move-map",
    title: "지도 이동시키기",
  },
  {
    key: "map-info",
    href: "#map-info",
    title: "지도 정보 얻어오기",
  },
  {
    key: "multiple-marker-control",
    href: "#multiple-marker-control",
    title: "여러개의 마커 제어하기",
  },
];
</script>

<template>
  <div>
    <h1>KakaoMap</h1>
    <h2 id="basic-map">지도 생성하기</h2>
    <p>기본적인 지도 생성입니다.</p>
    <CodeBox :tsCode="KakaoMapBasicMapCodeTs" :jsCode="KakaoMapBasicMapCodeJs">
      <template #demo>
        <KakaoMapBasicMapJs />
      </template>
    </CodeBox>

    <h2 id="move-map">지도 이동시키기</h2>
    <p>
      지도를 이동시킵니다. 지도 객체의 메소드를 통해 지도를 원하는 좌표로
      이동시킬 수 있습니다. 또, 지도가 표시되고 있는 영역크기를 벗어나지 않는
      거리라면 애니메이션 효과처럼 지도를 부드럽게 이동시킬 수도 있습니다.
    </p>
    <CodeBox :tsCode="KakaoMapMoveMapCodeTs" :jsCode="KakaoMapMoveMapCodeJs">
      <template #demo>
        <KakaoMapMoveMapTs />
      </template>
    </CodeBox>
    <h2 id="map-info">지도 정보 얻어오기</h2>
    <p>지도 레벨, 중심좌표, 지도 타입, 지도 영역정보를 얻어와 표출합니다.</p>
    <NuxtLink href="https://apis.map.kakao.com/web/documentation/#MapTypeId"
      >지도 타입을 보시려면 여기를 클릭하세요!</NuxtLink
    >
    <CodeBox :tsCode="KakaoMapMapInfoCodeTs" :jsCode="KakaoMapMapInfoCodeJs">
      <template #demo>
        <KakaoMapMapInfoTs />
      </template>
    </CodeBox>

    <h2 id="multiple-marker-control">여러개의 마커 제어하기</h2>
    <p>버튼을 눌러 마커를 생성하고 삭제해보세요.</p>
    <CodeBox
      :tsCode="KakaoMapMarkerListCodeTs"
      :jsCode="KakaoMapMarkerListCodeJs"
    >
      <template #demo>
        <KakaoMapMarkerListTs />
      </template>
    </CodeBox>
  </div>
  <div class="anchor">
    <a-anchor :items="anchorItems" />
  </div>
</template>
