<script setup lang="ts">
import { KakaoMap, KakaoMapCustomOverlay } from 'vue3-kakao-maps';
</script>

<template>
  <KakaoMap :lat="37.566826" :lng="126.9786567">
    <KakaoMapCustomOverlay :lat="37.566826" :lng="126.9786567">
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
</template>

<style scoped></style>
