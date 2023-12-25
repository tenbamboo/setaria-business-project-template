<template>
  <p>基本国际化</p>
  <el-button @click="setLang">{{ t("setLang") }}</el-button>
  <p>{{ t("currentLang", { lang: currentlang }) }}</p>

  <p>Element Plus国际化</p>
  <el-calendar />

  <p>表格组件国际化</p>

  <sc-schema-table :schema="schema" :data="dataList" show-page :page-total="pageTotal" />

  <p>封装组件中的国际化</p>

  <sc-search-form
    v-model="formValue"
    :schema="schema"
    label-width="130px"
    label-suffix=":"
    columns="3"
  />

  <p>业务组件中的国际化</p>

  <bf-search-page
    :schema="baseSchema"
    :condition-schema="conditionSchema"
    :request="handlerRequest"
  />
</template>
<script lang="ts" setup>
  import { computed, reactive } from "vue";
  import { useI18n } from "vue-i18n";
  import { http } from "@setaria/setaria-ts";
  import type { SchemaProps } from "setaria-components";

  const { t, locale } = useI18n();
  // //
  function setLang() {
    locale.value = locale.value === "zh-cn" ? "en-us" : "zh-cn";
  }

  const currentlang = computed(() => {
    return locale.value === "zh-cn" ? "中文" : "English";
  });

  const schema = reactive<SchemaProps>({
    required: [],
    properties: {
      testString: {
        type: "string",
        title: "测试String",
      },
    },
  });

  const formValue = {};
  const dataList: any[] = [];

  const pageTotal = 100;

  const baseSchema = reactive<SchemaProps>({
    required: [],
    properties: {
      compId: {
        type: "string",
        description: "",
        title: "公司id",
      },
      dictId: { type: "string", description: "", title: "字典id" },
      dictName: { type: "string", description: "", title: "字典名称" },
      dispValue: { type: "string", description: "", title: "展示值" },
      fldValue: { type: "string", description: "", title: "字典值" },
      id: {
        type: "string",
        description: "",
        title: "主键id",
      },
      orderId: {
        type: "string",
        description: "",
        title: "排序",
      },
      parentId: {
        type: "string",
        description: "",
        title: "父级id",
      },
      status: { type: "string", description: "", title: "状态" },
    },
  });

  const conditionSchema = ["dictName", "dispValue", "fldValue", "orderId", "status"];
  // const tableUi = reactive<Record<string, SchemaUiPropsByTable>>({})

  const handlerRequest = (pageInfo: any) => {
    return http.admin.post("/t-rmbs-dict/pageSize", pageInfo).then((res: any) => {
      console.log(res);
      return res;
    });
  };
</script>
