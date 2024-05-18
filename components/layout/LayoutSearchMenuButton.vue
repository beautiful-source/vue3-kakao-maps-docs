<script setup lang="ts">
import { contentList } from '@/assets/data/contentsList';
import { SearchOutlined } from '@ant-design/icons-vue';
import type { Directive } from 'vue';
const open = ref<boolean>(false);
const searchValue = ref<string>('');
const router = useRouter();

const showModal = () => {
  open.value = true;
};

type SearchResultItem = {
  isComponent: boolean;
  componentName: string;
  title: string;
  href: string;
};

const searchResultList = ref<SearchResultItem[]>([]);

const searchMenu = (keyword: string) => {
  const results: SearchResultItem[] = [];
  contentList.forEach((component) => {
    if (component.key.includes(keyword) || component.title.includes(keyword)) {
      results.push({
        isComponent: true,
        componentName: component.title,
        title: component.title,
        href: component.key
      });
    }
    component.pages.forEach((page) => {
      if (page.key.includes(keyword) || page.href.includes(keyword) || page.title.includes(keyword)) {
        results.push({
          isComponent: false,
          componentName: component.title,
          href: component.key + page.href,
          title: page.title
        });
      }
    });
  });
  return results;
};

const onSelectMenu = (menu: SearchResultItem) => {
  router.push(menu.href);
  open.value = false;
};

watch(searchValue, (keyword: string) => {
  searchResultList.value = searchMenu(keyword);
});

// 최초 1회 mount시 인풋에 포커스
const vFocus: Directive = {
  mounted: (el: HTMLSpanElement) => {
    if (el.children[0] && 'focus' in el.children[0]) {
      const inputElement = el.children[0] as HTMLInputElement;
      inputElement.focus();
    }
  }
};
</script>

<template>
  <a-button @click="showModal" class="search-button"> <SearchOutlined />빠른 검색... </a-button>
  <a-modal v-model:open="open" :closable="false" :footer="null" class="search-menu-modal">
    <template #title>
      <a-input v-model:value="searchValue" allowClear :bordered="false" placeholder="필요한 예제를 검색하세요" v-focus />
    </template>

    <div v-show="searchValue.length > 0 && searchResultList.length > 0">
      <ul>
        <li v-for="menu of searchResultList" :key="menu.href" @click="() => onSelectMenu(menu)">
          <p class="component-name">
            {{ menu.isComponent ? 'Component' : menu.componentName }}
          </p>
          <p class="menu-title">
            {{ menu.title }}
          </p>
        </li>
      </ul>
    </div>
    <div class="void-result" v-show="searchValue.length == 0 || searchResultList.length == 0">
      <p>검색 결과가 없습니다.</p>
    </div>
  </a-modal>
</template>

<style lang="scss">
.search-button {
  width: 100%;
  margin-bottom: 0.5rem;
}
.dark-mode {
  .search-button {
    background-color: $transparency-gray-1;
    border-color: $gray-7;
    color: $gray-4;

    &:hover {
      background-color: $transparency-gray-2;
      border-color: $gray-6;
      color: $gray-3;
    }
  }
}
.search-menu-modal {
  .ant-modal-header {
    background-color: transparent;
  }
  .ant-input {
    color: $gray-4;
    font-size: 1.3rem !important;
    font-weight: 400;
  }
  input::placeholder {
    color: $gray-5;
  }
  ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    height: 30rem;
    overflow-y: auto;
  }
  li {
    list-style: none;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 1rem;
    background: $transparency-gray-3;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid $transparency-gray-3;
    cursor: pointer;
    &:hover {
      background-color: $primary;
      .component-name {
        color: $gray-1;
      }
      .menu-title {
        color: $gray-3;
      }
    }
  }
  p {
    margin: 0;
  }
  .component-name {
    font-size: 0.7rem;
    color: $gray-8;
  }
  .menu-title {
    font-weight: 600;
    color: $gray-10;
  }
  .ant-modal-content {
    background: $transparency-gray-2;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid $transparency-gray-3;
  }

  .void-result {
    border-top: 1px solid $transparency-gray-3;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem;
    font-size: 1rem;
    color: $gray-3;
  }
}
</style>
