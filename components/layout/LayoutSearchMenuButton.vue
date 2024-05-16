<script setup lang="ts">
import { contentList } from '@/assets/data/contentsList';
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
</script>

<template>
  <a-button @click="showModal"> 빠른 검색</a-button>
  <a-modal v-model:open="open" :closable="false" :footer="null">
    <template #title>
      <a-input v-model:value="searchValue" :bordered="false" placeholder="필요한 예제를 검색하세요"></a-input>
    </template>
    <div v-show="searchValue.length > 0 && searchResultList.length > 0">
      <ul>
        <li v-for="menu of searchResultList" :key="menu.href" @click="() => onSelectMenu(menu)">
          <p class="component-name" v-if="!menu.isComponent">
            {{ menu.componentName }}
          </p>
          <p>
            {{ menu.title }}
          </p>
        </li>
      </ul>
    </div>
    <div v-show="searchResultList.length == 0">
      <p>검색 결과가 없습니다.</p>
    </div>
  </a-modal>
</template>

<style scoped lang="scss"></style>
