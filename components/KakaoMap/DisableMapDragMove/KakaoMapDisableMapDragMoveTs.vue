<script setup lang="ts">
import { ref } from 'vue';
import { KakaoMap } from 'vue3-kakao-maps';

const map = ref<kakao.maps.Map>();

const onLoadKakaoMap = (mapRef: kakao.maps.Map) => {
  map.value = mapRef;
};

// 버튼 클릭에 따라 지도 이동 기능을 막거나 풀고 싶은 경우에는 map.value.setDraggable 함수를 사용합니다
const setDraggable = (draggable: boolean) => {
  // 마우스 드래그로 지도 이동 가능여부를 설정합니다
  map.value?.setDraggable(draggable);
};
</script>

<template>
  <KakaoMap :lat="33.450701" :lng="126.570667" @onLoadKakaoMap="onLoadKakaoMap" />
  <button class="demo-button" @click="setDraggable(false)">지도 드래그 이동 끄기</button>
  <button class="demo-button" @click="setDraggable(true)">지도 드래그 이동 켜기</button>
</template>
