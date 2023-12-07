<script setup lang="ts">
  import { reactive } from "vue";
  import type { SchemaProps } from "setaria-components";

  const schema = reactive<SchemaProps>({
    required: [],
    properties: {
      testString: {
        type: "string",
        title: "测试String",
      },
      testDesc: {
        type: "string",
        title: "测试Desc",
        description: "我是描述内容",
      },
      testNumber: {
        type: "number",
        title: "测试数值",
        scale: 2,
      },
      testDate: {
        type: "string",
        format: "date",
        title: "测试日期",
      },
      testDateTime: {
        type: "string",
        format: "datetime",
        title: "测试日期时间",
      },
      testTime: {
        type: "string",
        format: "time",
        title: "测试时间",
      },
      testCurrency: {
        type: "number",
        format: "currency",
        title: "测试货币",
        scale: 2,
      },
      testSelect1: {
        type: "string",
        title: "测试下拉1-单选",
        oneOf: [
          {
            const: "t1",
            title: "t1",
          },
          {
            const: "t2",
            title: "t2",
          },
          {
            const: "t3",
            title: "t3",
            disabled: true,
          },
        ],
      },
      testSelect2: {
        type: "number",
        title: "测试下拉2-多选",
        anyOf: [
          {
            const: "t1",
            title: "t1",
          },
          {
            const: "t2",
            title: "t2",
          },
          {
            const: "t3",
            title: "t3",
            disabled: true,
          },
          {
            const: "t4",
            title: "t4",
          },
        ],
      },
      testCustomSlot: {
        type: "string",
        title: "测试自定义插槽",
      },
    },
  });

  const formValue = {};
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <el-button type="primary">hello</el-button>

  <sc-schema-form
    v-model="formValue"
    :schema="schema"
    label-width="130px"
    label-suffix=":"
    columns="3"
  >
    <template #testCustomSlot="scope">
      <el-rate v-model="scope.testCustomSlot" />
    </template>
  </sc-schema-form>

  <hr />
  <sc-search-form
    v-model="formValue"
    :schema="schema"
    label-width="130px"
    label-suffix=":"
    columns="3"
  >
    <template #testCustomSlot="scope">
      <el-rate v-model="scope.testCustomSlot" />
    </template>
  </sc-search-form>
</template>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
