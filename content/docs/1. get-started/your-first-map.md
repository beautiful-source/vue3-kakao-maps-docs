# 첫 지도 그리기

## 1. 카카오맵 API 로드

`main.{js|ts}`에서 `useKakao('API key')` 호출을 통해 카카오맵 API를 로드합니다.

참고: API key 발급 관련 내용은 [공식 문서](https://apis.map.kakao.com/web/guide/)을 참고해주세요.

::code-block

```js
import { createApp } from 'vue';
import App from './App.vue';
import { useKakao } from 'vue3-kakao-maps/@utils';

useKakao('API key');
createApp(App).mount('#app');
```

::

## 2. 지도 컴포넌트 호출

카카오맵 지도를 띄우기 위해서 `KakaoMap` 컴포넌트를 사용합니다. `props`를 통해 카카오맵 API에서 제공하는 다양한 [`option`](https://apis.map.kakao.com/web/documentation/#Map)을 전달할 수 있습니다.

::code-block

```vue
<script setup>
import { KakaoMap, KakaoMapMarker } from 'vue3-kakao-maps';
const coordinate = {
  lat: 37.566826,
  lng: 126.9786567
};
</script>

<template>
  <KakaoMap :lat="coordinate.lat" :lng="coordinate.lng" :draggable="true">
    <KakaoMapMarker :lat="coordinate.lat" :lng="coordinate.lng"></KakaoMapMarker>
  </KakaoMap>
</template>
```

::

잘 하셨어요! 이제 <a href="/components">컴포넌트 페이지</a>로 이동해 세부 기능을 구현해보세요.
