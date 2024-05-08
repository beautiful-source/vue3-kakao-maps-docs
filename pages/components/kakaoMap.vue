<script setup lang="ts">
import {
  KakaoMapBasicMapCodeTs,
  KakaoMapBasicMapCodeJs,
  KakaomapchangeLevelCodeTs,
  KakaomapchangeLevelCodeJs,
  KakaoMapDisableMapDragMoveCodeTs,
  KakaoMapDisableMapDragMoveCodeJs,
  KakaoMapEnableDisableZoomInOutCodeTs,
  KakaoMapEnableDisableZoomInOutCodeJs,
  KakaoMapAddClickEventCodeJs,
  KakaoMapAddClickEventCodeTs,
} from "@/components/KakaoMap";

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
    key: "change-level",
    href: "#change-level",
    title: "지도 레벨 바꾸기",
  },
  {
    key: "map-info",
    href: "#map-info",
    title: "지도 정보 얻어오기",
  },
  {
    key: "disable-map-drag-move",
    href: "#disable-map-drag-move",
    title: "지도 이동 막기",
  },
  {
    key: "enable-disable-zoom-in-out",
    href: "#enable-disable-zoom-in-out",
    title: "지도 확대 축소 막기",
  },
  {
    key: "add-map-click-event",
    href: "#add-map-click-event",
    title: "클릭 이벤트 등록하기",
  },
];

const tsCode = KakaoMapBasicMapCodeTs as string;
const jsCode = KakaoMapBasicMapCodeJs as string;
</script>

<template>
  <div>
    <h1>KakaoMap</h1>
    <h2 id="basic-map">지도 생성하기</h2>
    <p>기본적인 지도 생성입니다.</p>
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
    <h2 id="change-level">지도 레벨 바꾸기</h2>
    <p>거리라면 애니메이션 효과처럼 지도를 부드럽게 이동시킬 수도 있습니다.</p>
    <CodeBox
      :tsCode="KakaomapchangeLevelCodeTs"
      :jsCode="KakaomapchangeLevelCodeJs"
    >
      <template #demo>
        <KakaoMapChangeLevelTs />
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
    <h2 id="disable-map-drag-move">지도 이동 막기</h2>
    <p>
      마우스 드래그로 지도를 이동시키는 기능을 막습니다. 모바일 기기에서
      터치스크롤시 지도가 이동되는 것을 막고싶거나 지도가 이동되면 안되는 경우
      등 상황에 따라 지도의 이동 기능을 제어할 수 있습니다.
    </p>
    <CodeBox
      :tsCode="KakaoMapDisableMapDragMoveCodeTs"
      :jsCode="KakaoMapDisableMapDragMoveCodeJs"
    >
      <template #demo>
        <KakaoMapDisableMapDragMoveJs />
      </template>
    </CodeBox>
    <h2 id="enable-disable-zoom-in-out">지도 확대 축소 막기</h2>
    <p>
      마우스 휠이나 멀티터치로 지도 확대, 축소 기능을 막습니다. 상황에 따라 지도
      확대, 축소 기능을 제어할 수 있습니다.
    </p>
    <CodeBox
      :tsCode="KakaoMapEnableDisableZoomInOutCodeTs"
      :jsCode="KakaoMapEnableDisableZoomInOutCodeJs"
    >
      <template #demo>
        <KakaoMapEnableDisableZoomInOutTs />
      </template>
    </CodeBox>
    <h2 id="add-map-click-event">클릭 이벤트 등록하기</h2>
    <p>
      지도를 마우스로 클릭했을때 click 이벤트가 발생합니다. 이 예제에서는 지도를
      클릭했을 때 지도 아래쪽에 해당 위치의 좌표를 뿌려주고 있습니다.
    </p>
    <CodeBox
      :tsCode="KakaoMapAddClickEventCodeTs"
      :jsCode="KakaoMapAddClickEventCodeJs"
    >
      <template #demo>
        <KakaoMapAddClickEventTs />
      </template>
    </CodeBox>
  </div>
  <div class="anchor">
    <a-anchor :items="anchorItems" />
  </div>
</template>
