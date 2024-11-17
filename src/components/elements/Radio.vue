<template>
  <span class="el-radio" :class="getClass">
    <input
      :id="uuid"
      v-model="model"
      type="radio"
      class="radio"
      :value="value"
      :name="name"
      :disabled="disabled"
    />
    <label
      :for="uuid"
      class="radio-label"
      :class="{ 'is-checked': isSelected }"
    >
      <slot>
        {{ label }}
      </slot>
    </label>
  </span>
</template>

<script setup>
import { computed } from "vue";
import { useGenerateId } from "@/composable/generateID";
const uuid = `radio_item_${useGenerateId()}`;

const props = defineProps({
  type: {
    type: String, // 'default' | 'check'
    default: "default",
  },
  size: {
    type: String, // 'default' | 'md'
    default: "default",
  },
  value: {
    type: String,
  },
  name: {
    type: String,
    default: "radioName",
  },
  label: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const model = defineModel();
const isSelected = computed(() => {
  return props.value === model.value;
});

const type = {
  default: "",
  check: "type-check",
};
const size = {
  default: "",
  md: "btn-md",
};
const getClass = computed(() => {
  return [
    type[props.type],
    size[props.size],
    { "is-disabled": props.disabled },
  ];
});
</script>

<style></style>
