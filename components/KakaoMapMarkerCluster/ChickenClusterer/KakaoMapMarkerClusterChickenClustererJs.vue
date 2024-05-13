<script setup>
import { KakaoMap } from 'vue3-kakao-maps';
import chickenList from '../chicken.json';
</script>

<template>
  <KakaoMap
    :lat="36.34"
    :lng="127.77"
    :level="14"
    :markerCluster="{
      markers: chickenList,
      averageCenter: true,
      minLevel: 10,
      calculator: [10, 30, 50],
      texts: ['삐약', '꼬꼬', '꼬끼오', '치멘'],
      styles: [
        {
          width: '30px',
          height: '30px',
          background: 'rgba(51, 204, 255, .8)',
          borderRadius: '15px',
          color: '#000',
          textAlign: 'center',
          fontWeight: 'bold',
          lineHeight: '31px'
        },
        {
          width: '40px',
          height: '40px',
          background: 'rgba(255, 153, 0, .8)',
          borderRadius: '20px',
          color: '#000',
          textAlign: 'center',
          fontWeight: 'bold',
          lineHeight: '41px'
        },
        {
          width: '50px',
          height: '50px',
          background: 'rgba(255, 51, 204, .8)',
          borderRadius: '25px',
          color: '#000',
          textAlign: 'center',
          fontWeight: 'bold',
          lineHeight: '51px'
        },
        {
          width: '60px',
          height: '60px',
          background: 'rgba(255, 80, 80, .8)',
          borderRadius: '30px',
          color: '#000',
          textAlign: 'center',
          fontWeight: 'bold',
          lineHeight: '61px'
        }
      ]
    }"
  />
</template>
