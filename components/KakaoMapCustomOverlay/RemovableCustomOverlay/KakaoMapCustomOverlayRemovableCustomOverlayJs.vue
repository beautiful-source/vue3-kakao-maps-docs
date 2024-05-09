<script setup>
import { ref } from 'vue';
import { KakaoMap, KakaoMapCustomOverlay, KakaoMapMarker } from 'vue3-kakao-maps';

const map = ref();
const overlay = ref();

const onLoadKakaoMap = (mapRef) => {
  map.value = mapRef;
};

const onLoadKakaoMapCustomOverlay = (newCustomOverlay) => {
  overlay.value = newCustomOverlay;
};
const closeOverlay = () => {
  overlay?.value?.setMap(null);
};
const onClickKakaoMapMarker = () => {
  map.value && overlay?.value?.setMap(map.value);
};
</script>

<template>
  <KakaoMap :lat="33.450701" :lng="126.570667" @onLoadKakaoMap="onLoadKakaoMap">
    <KakaoMapMarker :lat="33.450701" :lng="126.570667" @onClickKakaoMapMarker="onClickKakaoMapMarker" />
    <KakaoMapCustomOverlay
      :lat="33.450701"
      :lng="126.570667"
      :yAnchor="1.4"
      @onLoadKakaoMapCustomOverlay="onLoadKakaoMapCustomOverlay"
    >
      <div style="padding: 10px; background-color: white; border: 1px solid #ccc; border-radius: 5px">
        <div style="font-weight: bold; margin-bottom: 5px">
          카카오 스페이스닷원
          <span style="float: right; cursor: pointer" @click="closeOverlay" title="닫기">X</span>
        </div>
        <div style="display: flex">
          <div style="margin-right: 10px">
            <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png" width="73" height="70" />
          </div>
          <div style="flex-grow: 1">
            <div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap">제주특별자치도 제주시 첨단로 242</div>
            <div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap">(우) 63309 (지번) 영평동 2181</div>
            <div><a href="https://www.kakaocorp.com/main" target="_blank" style="color: blue">홈페이지</a></div>
          </div>
        </div>
      </div>
    </KakaoMapCustomOverlay>
  </KakaoMap>
</template>
