<script setup lang="ts">
import { ref } from 'vue';
import { KakaoMap } from 'vue3-kakao-maps';

const map = ref<kakao.maps.Map>();
const message = ref<string>('');

const onLoadKakaoMap = (mapRef: kakao.maps.Map) => {
  map.value = mapRef;

  kakao.maps.event.addListener(map.value, 'click', function (mouseEvent: kakao.maps.event.MouseEvent) {
    // 클릭한 위도, 경도 정보를 가져옵니다
    const latlng = mouseEvent.latLng;

    message.value = `클릭한 위치의 위도는 ${latlng.getLat()} 이고, <br>`;
    message.value += `경도는 ${latlng.getLng()} 입니다`;
  });
};
</script>

<template>
  <KakaoMap :lat="33.450701" :lng="126.570667" @onLoadKakaoMap="onLoadKakaoMap" />
  <p>지도를 클릭해주세요!</p>
  <p v-html="message"></p>
</template>

<style lang="scss" scoped></style>
