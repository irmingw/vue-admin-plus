<template>
  <div class="app">
    <button @click="() => changeLayout('AdminLayout')">admin</button>
    <button @click="() => changeLayout('DefaultLayout')">default</button>
    <Component :is="layoutStore.getLayout" />
  </div>
</template>

<script setup>
import useLayout from "../store/useLayout.ts";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import AdminLayout from "./layouts/AdminLayout.vue";
import { computed } from "vue";

defineOptions({
  components: {
    DefaultLayout,
    AdminLayout,
  },
});
const layoutStore = useLayout();
const changeLayout = (value) => {
  layoutStore.updateLayout(value);
};
</script>

<style lang="scss" scoped>
.app {
  height: 100%;
  width: 100%;
  padding: 24px;
}
</style>
