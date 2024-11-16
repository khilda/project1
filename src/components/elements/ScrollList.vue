<template>
  <div class="scroll-list scroll">
    <component
      :is="isSelect ? 'button' : 'div'"
      v-for="(item, idx) in list"
      :key="`list_item_${idx}`"
      class="list-item"
      :class="{ 'is-selected': idx === selectedIdx }"
      @click="clickItemHandler($event, idx)"
    >
      <slot :item="item" :selected-idx="selectedIdx" />
    </component>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  isSelect: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["item-click"]);

const selectedIdx = ref(0);
function clickItemHandler(e, idx) {
  selectedIdx.value = idx;
  emits("item-click", idx);
}
</script>

<style></style>
