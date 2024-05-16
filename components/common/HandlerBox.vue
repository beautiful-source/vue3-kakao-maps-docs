tepmplate
<script setup lang="ts">
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width: '40%'
  },
  {
    title: 'Return',
    dataIndex: 'return',
    key: 'return',
    width: '30%'
  }
];

export type HandlerBoxDataSourceType = {
  name: string;
  return: string;
  description: string;
};

type HandlerBoxPropsType = {
  dataSource: HandlerBoxDataSourceType[];
};

const props = defineProps<HandlerBoxPropsType>();
</script>

<template>
  <div class="handler-box">
    <a-table sticky :scrollToFirstRowOnChange="true" :columns="columns" :data-source="props.dataSource" :pagination="false">
      <template #headerCell="{ column }">
        <template v-if="column.key === 'name'">
          <span>Name</span>
        </template>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'name'">
          {{ record.name }}
        </template>
        <template v-if="column.key === 'description'">
          {{ record.description }}
        </template>
        <template v-else-if="column.key === 'return'">
          {{ record.return }}
        </template>
      </template>
    </a-table>
  </div>
</template>

<style scoped lang="scss">
.handler-box {
  display: flex;
  width: 100%;
  border-radius: 10px;
  margin-top: -12px;
}
</style>
