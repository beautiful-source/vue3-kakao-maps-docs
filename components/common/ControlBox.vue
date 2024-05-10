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
    width: '27%'
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type'
  },
  {
    title: 'Default',
    dataIndex: 'default',
    key: 'default',
    width: '12%'
  },
  {
    title: 'Control',
    dataIndex: 'control',
    key: 'control',
    width: '18%'
  }
];

export type ControlDataSourceType = {
  name: string;
  required?: boolean;
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
  <div class="control-box">
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
          <div class="name-column">
            <span>Name</span>
            <span class="required"><b class="required-star">*</b> 필수 입력값</span>
          </div>
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
        <template v-else-if="column.key === 'type'">
          <a-tag v-for="tag in record.type" :key="tag" :color="'geekblue'">
            {{ tag }}
          </a-tag>
        </template>
        <template v-else-if="column.key === 'default'">
          {{ record.default }}
        </template>
        <template v-else-if="column.key === 'control'">
          <a-switch
            v-if="record?.control?.type === 'Boolean'"
            checked-children="true"
            un-checked-children="false"
            v-model:checked="record.control.value"
          />
          <a-input v-else-if="record?.control?.type === 'Input'" v-model:value="record.control.value" />
        </template>
      </template>
    </a-table>
  </div>
</template>

<style scoped lang="scss">
.control-box {
  border-radius: 10px;
  margin-left: 10px;
  max-height: 500px;
  overflow-x: scroll;
  overflow-y: auto;
  background-color: white;
  align-items: flex-start;

  scrollbar-width: none;
  -ms-overflow-style: none;
}

.control-box::-webkit-scrollbar {
  display: none;
}

.required-star {
  color: rgba(255, 0, 0, 0.841);
  margin-left: 0.05rem;
}
.required {
  align-self: flex-start;
  font-size: 9px;
  color: rgb(77, 76, 76);
  font-weight: 100;
  margin-top: -3px;
}
.name-column {
  display: flex;
  flex-direction: column;
  margin-top: 9px;
}
</style>
