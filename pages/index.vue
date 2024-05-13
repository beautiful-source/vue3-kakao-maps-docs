<template>
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
</template>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: $purple-5;
  transition: 0.4s;
}
a:hover {
  background-color: $purple-1;
}
code {
  color: $blue-7;
  background-color: $blue-1;
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
    font-size: 18px;
    text-align: center;
    word-break: keep-all;
  }

  .link-wrap {
    display: flex;
    gap: 1rem;
    font-size: 1.3rem;
    margin-top: 1rem;
    .link {
      padding: 12px 16px;
      border-radius: 10px;
    }
  }
}
.dark-mode {
  a {
    color: $purple-3;
  }
  a:hover {
    background-color: $purple-9;
  }
  a > code {
    color: inherit;
  }
  code {
    color: $gray-1;
    background-color: $dark-mode-tag-bg;
    border: 1px solid $dark-mode-tag-border;
  }
  .link-wrap {
    .link {
      border-color: $dark-mode-border-color;
    }
  }
}
</style>
