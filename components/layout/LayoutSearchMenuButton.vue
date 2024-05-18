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

/**
 * 검색창 인풋 요소에 포커스하는 커스텀 `directive`
 *
 * `a-modal`에 전달한 `destroyOnClose`와 함께 사용 시 검색 모달이 보일 때마다 인풋 요소에 포커스합니다.
 */
const vFocusInput: Directive = {
  mounted: (el: HTMLSpanElement) => {
    if (el.children[0] && 'focus' in el.children[0]) {
      const inputElement = el.children[0] as HTMLInputElement;
      inputElement.focus();
    }
  }
};
// 키보드 제어
/**
 * 포커스 할 메뉴. 다음 검색 결과와 상호작용을 위해 `li` 요소를 기준으로 합니다.
 */
const focusedMenu = ref<HTMLLIElement>();
/**
 * 검색 내용이 변경될 때 검색 결과의 첫 요소를 포커싱하는 커스텀 `directive`
 */
const vFocusSearchItem: Directive = {
  updated: (el: HTMLUListElement) => {
    if (el.children[0]) {
      const firstLIElement = el.children[0] as HTMLLIElement;
      focusedMenu.value = firstLIElement;
    }
  }
};
/**
 * 포커싱된 검색 결과에 포커스 스타일 적용
 */
watch(focusedMenu, (newFocusedMenu, prevFocusedMenu) => {
  if (newFocusedMenu !== undefined) {
    newFocusedMenu.classList.add('focus');
    newFocusedMenu.scrollIntoView({ block: 'nearest' });
    if (prevFocusedMenu !== undefined) {
      prevFocusedMenu.classList.remove('focus');
    }
  }
});
/**
 * 키보드로 검색 결과 메뉴 제어
 *
 * `enter` 키로 해당 메뉴로 이동합니다.
 * `상하 방향키`로 이전/다음 메뉴로 포커스를 옮깁니다.
 */
const onKeydown = (e: KeyboardEvent) => {
  if (focusedMenu.value !== undefined) {
    if (e.key === 'Enter') {
      if (focusedMenu.value.children[0]) {
        const menuButton = focusedMenu.value.children[0] as HTMLButtonElement;
        menuButton.click();
      }
    } else if (e.key === 'ArrowDown' && focusedMenu.value.nextElementSibling) {
      e.preventDefault();
      const nextMenu = focusedMenu.value.nextElementSibling as HTMLLIElement;
      focusedMenu.value = nextMenu;
    } else if (e.key === 'ArrowUp' && focusedMenu.value.previousElementSibling) {
      e.preventDefault();
      const prevMenu = focusedMenu.value.previousElementSibling as HTMLLIElement;
      focusedMenu.value = prevMenu;
    }
  }
};
/**
 * 검색 결과에 마우스 호버 시 포커스 스타일 적용
 */
const onMouseEnter = (e: MouseEvent) => {
  const menu = e.currentTarget as HTMLLIElement;
  focusedMenu.value = menu;
};
/**
 * `tab` 키를 통해 버튼에 실제로 포커스했을 때 포커스 스타일 적용
 */
const onButtonFocus = (e: FocusEvent) => {
  const button = e.currentTarget as HTMLButtonElement;
  const menu = button.parentElement as HTMLLIElement;
  focusedMenu.value = menu;
};
</script>

<template>
  <a-button @click="showModal" class="search-button"> <SearchOutlined />빠른 검색... </a-button>
  <a-modal v-model:open="open" :closable="false" :footer="null" class="search-menu-modal" destroyOnClose>
    <template #title>
      <a-input
        v-model:value="searchValue"
        allowClear
        :bordered="false"
        placeholder="필요한 예제를 검색하세요"
        @keydown="onKeydown"
        v-focus-input
      />
    </template>

    <div v-show="searchValue.length > 0 && searchResultList.length > 0">
      <ul v-focus-search-item>
        <li v-for="menu of searchResultList" :key="menu.href" @mouseenter="onMouseEnter">
          <button @click="() => onSelectMenu(menu)" @focus="onButtonFocus">
            <FileTextOutlined style="font-size: 1.2rem; color: gray" />
            <p>
              <span class="menu-title">
                {{ menu.title }}
              </span>
              <span class="component-name">
                {{ menu.isComponent ? 'Component' : menu.componentName }}
              </span>
            </p>
          </button>
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
    border-color: $gray-6;
    color: $gray-4;

    &:hover {
      background-color: $transparency-gray-2;
      border-color: $gray-5;
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
    font-size: 1rem;
    border-radius: 1rem;
    background: $transparency-gray-3;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    cursor: pointer;
    &.focus {
      background-color: $primary-9;
      .component-name {
        color: $gray-1;
      }
      .menu-title {
        color: $gray-3;
      }
    }
    button {
      border-radius: inherit;
      background-color: transparent;
      width: 100%;
      border: initial;
      padding: 10px 1rem;
      font-size: inherit;
      text-align: initial;
      line-height: inherit;
      box-sizing: border-box;
      display: flex;
      gap: 1rem;
      align-items: center;
      &:focus {
        outline: initial;
      }
      p {
        display: flex;
        flex-direction: column;
        .component-name {
          font-size: 0.7rem;
          color: $gray-8;
          letter-spacing: 0.5px;
        }
        .menu-title {
          font-weight: 600;
          color: $gray-10;
        }
      }
    }
  }
  p {
    margin: 0;
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
