<script setup lang="ts">
  import { computed, nextTick, ref, watch } from "vue";
  import { useI18n } from "vue-i18n";
  // import zhCn from "@/config/i18n/lang/element-plus/zh";
  import elementZh from "element-plus/dist/locale/zh-cn.mjs";
  import elementEN from "element-plus/dist/locale/en.mjs";
  // import enUs from "@/config/i18n/lang/element-plus/en";
  import scZh from "setaria-components/es/locale/lang/zh-cn.mjs";
  import scEn from "setaria-components/es/locale/lang/en.mjs";
  import { merge } from "lodash-es";

  const { locale } = useI18n();
  const isReady = ref(true);

  watch(
    () => locale.value,
    () => {
      isReady.value = false;
      nextTick().then(() => {
        isReady.value = true;
        console.log("locale", locale.value);
      });
    },
  );

  const elementPlusLocale = computed(() => {
    if (locale.value === "zh-cn") {
      return merge(elementZh, scZh);
    }
    console.log(merge(elementEN, scEn));
    return merge(elementEN, scEn);
  });
  // elementPlusLocale

  // :locale="elementPlusLocale"
</script>

<template>
  <el-config-provider v-if="isReady" :locale="elementPlusLocale">
    <router-view />
  </el-config-provider>
</template>

<style scoped></style>
