<template>
  <ContentDoc id="nuxt-content" />
</template>

<style lang="scss">
/*
* Docs(nuxt-content) 한정 스타일
* should be without `scoped`
*/
div#nuxt-content {
  padding-bottom: 100px;
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
    padding: 2px;
    border-radius: 2px;
    margin-right: 2px;
  }

  *[class='code-wrap'] {
    pre,
    code {
      background-color: $light-mode-code-bg;
    }
    pre {
      padding: 1rem;
      border-radius: 5px;
      border: 2px solid $gray-4;
      overflow-x: auto;

      code {
        padding: initial;
        margin: initial;
        display: inline-block;
        height: max-content;
        border: initial;
      }
    }
  }

  ul,
  ol {
    li {
      margin-bottom: 1rem;
    }
  }
}

.dark-mode {
  div#nuxt-content {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      a {
        color: inherit;
      }
    }
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

    *[class='code-wrap'] {
      pre,
      code {
        background-color: $dark-mode-code-bg;
      }
      pre {
        border-color: $dark-mode-border-color;
      }
    }
  }
}
</style>
