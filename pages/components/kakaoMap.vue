<script setup lang="ts">
import {
  KakaoMapBasicMapCodeTs,
  KakaoMapBasicMapCodeJs,
} from "@/components/KakaoMap";

const anchorItems = [
  {
    key: "kakao-map",
    href: "#kakao-map",
    title: "KakaoMap",
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
];

const tsCode = KakaoMapBasicMapCodeTs as string;
const jsCode = KakaoMapBasicMapCodeJs as string;
</script>

<template>
  <div>
    <h1 id="kakao-map">KakaoMap</h1>
    <p>카카오맵 컴포넌트입니다.</p>
    <CodeBox :tsCode="tsCode" :jsCode="jsCode">
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
    <CodeBox :tsCode="tsCode" :jsCode="jsCode">
      <template #demo>
        <KakaoMapMoveMapTs />
      </template>
    </CodeBox>
    <h2 id="map-info">지도 정보 얻어오기</h2>
    <p>지도 레벨, 중심좌표, 지도 타입, 지도 영역정보를 얻어와 표출합니다.</p>
    <NuxtLink href="https://apis.map.kakao.com/web/documentation/#MapTypeId"
      >지도 타입을 보시려면 여기를 클릭하세요!</NuxtLink
    >
    <CodeBox :tsCode="tsCode" :jsCode="jsCode">
      <template #demo>
        <KakaoMapMapInfoTs />
      </template>
    </CodeBox>
  </div>
  <div class="anchor">
    <a-anchor :items="anchorItems" />
  </div>
</template>
