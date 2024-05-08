<script setup lang="ts">
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width: 400,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Default',
    dataIndex: 'default',
    key: 'default',
  },
  {
    title: 'Control',
    dataIndex: 'control',
    key: 'control',
    width: 400,
  },
];

export type ControlDataSourceType = {
  name: string;
  description: string;
  type: string[];
  default?: string | number;
  control?: {
    type: 'Boolean' | 'Input';
    value?: string | number | boolean;
  };
};

type ControlBoxPropsType = {
  dataSource: ControlDataSourceType[];
};

const props = defineProps<ControlBoxPropsType>();
</script>

<template>
  <div>
    <a-table
      :columns="columns"
      :data-source="props.dataSource"
      :pagination="false"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'name'">
          <b>{{ record.name }}</b>
        </template>
        <template v-else-if="column.key === 'type'">
          <span>
            <a-tag
              v-for="tag in record.type"
              :key="tag"
              :color="'geekblue'"
            >
              {{ tag }}
            </a-tag>
          </span>
        </template>
        <template v-else-if="column.key === 'control'">
          <span>
            <a-switch
              v-if="record?.control?.type === 'Boolean'"
              checked-children="true"
              un-checked-children="false"
              v-model:checked="record.control.value"
            />
            <a-input
              v-else-if="record?.control?.type === 'Input'"
              v-model:value="record.control.value"
            />
          </span>
        </template>
      </template>
    </a-table>
  </div>
</template>

<style scoped lang="scss">
div {
  max-height: 500px;
  overflow-y: scroll;
}
</style>
