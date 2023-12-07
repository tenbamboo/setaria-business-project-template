<template>
  {{ userinfo }}
  <el-button @click="setUser">设置用户 BY Pinia</el-button>
</template>
<script lang="ts" setup>
  import { computed } from "vue";
  import { useUserStore } from "setaria-business-framework";
  // //
  const userStore = useUserStore();
  const userinfo = computed(() => userStore.getUserInfo);
  function setUser() {
    userStore.setUserInfo({ userId: 1 });
  }
</script>
