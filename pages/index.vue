<script setup lang="ts">
useSeoMeta({
  title: 'vue3-kakao-maps',
  description: '카카오맵 API를 vue 컴포넌트화한 라이브러리입니다.'
});
definePageMeta({
  layout: false
});
</script>

<template>
  <NuxtLayout name="home">
    <div class="content-wrap">
      <h2 class="title">
        Vue3로
        <br />
        카카오맵을
        <br />
        <span class="accent">가장 손쉽게</span> 사용하는 법
      </h2>
      <p class="sub-title">
        <code>vue3-kakao-maps</code>는 <code>Vue3</code>로
        <NuxtLink to="https://apis.map.kakao.com/" target="_blank"><code>Kakao Map API</code></NuxtLink
        >를 손쉽게 사용할 수 있도록 개발된 컴포넌트 라이브러리입니다.
      </p>
      <p class="sub-title">
        카카오맵 API의 <code>지도</code>, <code>마커</code>, <code>인포윈도우</code>, <code>커스텀 오버레이</code>,
        <code>마커 클러스터</code> 등을 컴포넌트 형태로 제공합니다.
      </p>

      <div class="link-wrap">
        <NuxtLink to="docs" class="link">See docs</NuxtLink>
        <NuxtLink to="components" class="link">See components</NuxtLink>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
@include light-mode-link;
code {
  background-color: $gray-3;
  font-size: 0.9rem;
  padding: 2px;
  border-radius: 2px;
  margin-right: 2px;
}
a > code {
  color: inherit;
}

.content-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 3rem;
  box-sizing: border-box;

  .title {
    font-size: 4rem;
    word-break: keep-all;
    .accent {
      background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .sub-title {
    font-size: 1.2rem;
    text-align: center;
    word-break: keep-all;
  }
  @media (max-width: $media-breakpoint-medium) {
    .title {
      font-size: 3rem;
    }
    .sub-title {
      font-size: 1rem;
    }
  }
  @media (min-width: $media-breakpoint-xlarge) {
    code {
      font-size: 1.8rem;
    }
    .title {
      font-size: 6rem;
    }
    .sub-title {
      font-size: 2rem;
    }
    .link-wrap {
      .link {
        font-size: 2rem;
      }
    }
  }
  .link-wrap {
    display: flex;
    gap: 1rem;
    font-size: 1.3rem;
    margin-top: 1rem;
    .link {
      padding: 12px 16px;
      border-radius: 10px;
      font-weight: 600;
    }
  }
}
.dark-mode {
  @include dark-mode-link;
  a > code {
    color: inherit;
  }
  code {
    color: $gray-1;
    background-color: $dark-mode-tag-bg;
    border: 1px solid $dark-mode-tag-border;
  }
}
</style>
