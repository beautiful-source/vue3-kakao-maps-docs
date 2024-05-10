<template>
  <ContentDoc id="nuxt-content" />
</template>

<style lang="scss">
/*
* Docs(nuxt-content) 한정 스타일
* should be without `scoped`
*/
div#nuxt-content {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    a {
      color: inherit;
      position: relative;
    }
    a::before {
      content: '';
    }
    a:hover::before {
      content: '#';
      position: absolute;
      left: -16px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 16px;
      color: $purple-6;
    }
  }

  a {
    text-decoration: none;
    color: $purple-5;
    transition: 0.4s;
  }
  a:hover {
    background-color: $purple-1;
  }

  a > code {
    color: inherit;
  }

  code {
    color: $blue-7;
    background-color: $blue-1;
    font-size: 0.9rem;
    padding: 2px 4px;
    border-radius: 2px;
  }

  *[class='code-wrap'] {
    pre,
    code {
      background-color: $code-bg-color;
    }
    pre {
      padding: 1rem;
      border-radius: 5px;
      border: 2px solid $gray-4;
      overflow-x: auto;

      code {
        padding: initial;
        display: inline-block;
        height: max-content;
      }
    }
  }
}
</style>
