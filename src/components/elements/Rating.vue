<template>
  <div class="el-rating">
    <button
      v-for="(_, idx) in count"
      type="button"
      class="btn-rating"
      :class="{ 'is-active': modelValue >= idx + 1 }"
      @click="clickRatingHandler(idx)"
    >
      <i class="ico-star"></i>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Number, // 1 ~ count
  },
  count: {
    type: Number,
    default: 5,
  },
});
const emits = defineEmits(["update:model-value"]);
function clickRatingHandler(idx) {
  emits("update:model-value", idx + 1);
}
</script>

<style></style>
