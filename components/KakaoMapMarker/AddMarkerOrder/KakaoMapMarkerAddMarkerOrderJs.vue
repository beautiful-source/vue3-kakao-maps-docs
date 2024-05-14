<script setup lang="ts">
import { ref } from 'vue';
import { KakaoMap, KakaoMapMarker } from 'vue3-kakao-maps';

const order1 = 1;
const order2 = '도착';
const orderBottomMargin = '65px';
</script>

<template>
  <KakaoMap :lat="33.4515" :lng="126.571667">
    <KakaoMapMarker :lat="33.4515" :lng="126.570667" :order="order1" />
    <KakaoMapMarker :lat="33.4515" :lng="126.572367" :order="order2" :order-bottom-margin="orderBottomMargin" />
  </KakaoMap>
</template>
