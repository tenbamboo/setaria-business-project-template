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
</template>
<script lang="ts" setup>
  import { computed, reactive } from "vue";
  import { useI18n } from "vue-i18n";

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
</script>
