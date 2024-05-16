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
    title: 'return',
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

const checkInvalid = (value: string, record: Record<string, any>): void => {
  record.control.isError = isValidNumber(value);
};
</script>

<template>
  <div class="handler-box">
    <a-table
      sticky
      :scroll="{ x: 750, y: 500 }"
      :scrollToFirstRowOnChange="true"
      :columns="columns"
      :data-source="props.dataSource"
      :pagination="false"
    >
      <template #headerCell="{ column }">
        <template v-if="column.key === 'name'">
          <span>Name</span>
        </template>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'name'">
          <b>{{ record.name }}</b
          ><b class="required-star">{{ record && record.required === true ? '*' : '' }}</b>
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
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  max-height: 500px;
  overflow-x: scroll;
  overflow-y: auto;
  background-color: white;
  align-items: flex-start;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>
