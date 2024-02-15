<script setup lang="ts">
import { BasicButton, BasicIcon, Loading } from '@vue-basic-kit/components';
</script>

<template>
  <div class="light">
    <Loading />
    <basic-icon size="12px" color="red"><Loading /></basic-icon>
    <basic-button type="primary" dark size="small">button</basic-button>
    <basic-button type="danger" size="small">button</basic-button>
    <basic-button type="warning" size="small">button</basic-button>
    <basic-button size="small" round>button</basic-button>
  </div>
</template>

<style scoped>
div.dark {
  /* 自定义深色背景颜色 */
  --basic-kit-color-primary: #626aef;
  --basic-kit-bg-color: #000;
  --basic-kit-color-danger: green;
}
</style>
