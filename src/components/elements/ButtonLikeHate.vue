<template>
  <div class="el-likeHate">
    <button
      type="button"
      class="btn-like"
      :class="{ 'is-active': selectedValue === true }"
      @click="clickLikeHandler"
    >
      <i class="ico-like"></i>
    </button>
    <button
      type="button"
      class="btn-hate"
      :class="{ 'is-active': selectedValue === false }"
      @click="clickHateHandler"
    >
      <i class="ico-hate"></i>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
/**
 * undefined : 아무것도 선택안함
 * true : 좋아요 활성화
 * false : 싫어요 활성화
 */
const props = defineProps({
  modelValue: {
    type: [Boolean, undefined],
  },
});
const emits = defineEmits(["update:model-value"]);

const selectedValue = ref(props.modelValue);
function clickLikeHandler() {
  switch (selectedValue.value) {
    case true:
      selectedValue.value = undefined;
      break;
    case undefined:
    case false:
      selectedValue.value = true;
      break;
  }
  emits("update:model-value", selectedValue.value);
}
function clickHateHandler() {
  switch (selectedValue.value) {
    case false:
      selectedValue.value = undefined;
      break;
    case undefined:
    case true:
      selectedValue.value = false;
      break;
  }
  emits("update:model-value", selectedValue.value);
}
</script>

<style></style>
