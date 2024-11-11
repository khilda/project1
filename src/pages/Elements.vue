<template>
  <div class="guide-box">
    <h3 class="sub-h2">button</h3>
    <div class="row-box">
      <ElButton>Button Text</ElButton>
      <ElButton disabled>Button Text</ElButton>
      <ElButton type="primary">Button Text</ElButton>
      <ElButton type="primary" disabled>Button Text</ElButton>
    </div>
    <div class="row-box">
      <ElButton size="md">Button Text</ElButton>
      <ElButton size="md" disabled>Button Text</ElButton>
      <ElButton type="primary" size="md">Button Text</ElButton>
      <ElButton type="primary" size="md" disabled>Button Text</ElButton>
    </div>
    <div class="row-box">
      <ElButton size="lg">Button Text</ElButton>
      <ElButton size="lg" disabled>Button Text</ElButton>
      <ElButton type="primary" size="lg">Button Text</ElButton>
      <ElButton type="primary" size="lg" disabled>Button Text</ElButton>
    </div>
  </div>
  <div class="guide-box">
    <h3 class="sub-h2">input</h3>
    <ElInput v-model="input1" placeholder="placeholder" />
    <ElInput v-model="input1" is-search disabled />
    <ElInput v-model="input1" is-search @click-search="clickSearchHandler" />
    <ElInput v-model="input1" is-invalid />
  </div>
  <div class="guide-box">
    <h3 class="sub-h2">select</h3>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ElButton from "../components/elements/Button.vue";
import ElInput from "../components/elements/Input.vue";

const input1 = ref("");

function clickSearchHandler(e) {
  console.log("검색버튼 클릭 : ", e);
}
function clickBtnHandler(evt) {
  console.log("버튼 클릭 : ", evt);
}
</script>

<style scoped>
.guide-box {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.row-box {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
