<template>
  <div class="el-select" :class="getClass">
    <button
      type="button"
      class="select-btn"
      :disabled="disabled"
      @click="clickValueHandler"
    >
      <span class="select-value">{{ selectedValue }}</span>
      <i class="ico-select"></i>
    </button>
    <div class="select-option scroll">
      <button
        v-for="({ label, value }, idx) in options"
        :key="`option_${idx}`"
        type="button"
        class="option-btn"
        :class="{ 'is-selected': value === selected?.value }"
        @click="clickOptionHandler(value)"
      >
        <span class="option-label">{{ label }}</span>
        <i v-if="value === selected?.value" class="ico-check-red"></i>
      </button>
    </div>
    <p v-if="isInvalid" class="ipt-desc">{{ invalidMessage }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
  },
  options: {
    type: Array,
    default: () => [],
  },
  isInvalid: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  invalidMessage: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "선택해주세요",
  },
});
const emits = defineEmits(["update:model-value"]);

const selected = computed(() => {
  return props.options.find((opt) => opt.value === props.modelValue);
});
const selectedValue = computed(() => {
  if (props.modelValue && selected.value) {
    return selected.value.label;
  }
  return props.placeholder;
});
const isOpen = ref(false);

const getClass = computed(() => ({
  "is-open": isOpen.value,
  "is-invalid": props.isInvalid,
  "is-disabled": props.disabled,
}));

function clickValueHandler() {
  isOpen.value = !isOpen.value;
}
function clickOptionHandler(value) {
  isOpen.value = false;
  emits("update:model-value", value);
}
</script>

<style></style>
