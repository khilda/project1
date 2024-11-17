<template>
  <span class="el-checkbox" :class="getClass">
    <input
      :id="uuid"
      v-model="model"
      type="checkbox"
      class="checkbox"
      :value="value"
      :name="name"
      :disabled="disabled"
    />
    <label
      :for="uuid"
      class="checkbox-label"
      :class="{ 'is-checked': isSelected }"
    >
      <slot :id="uuid">
        {{ label }}
      </slot>
    </label>
  </span>
</template>

<script setup>
import { computed } from "vue";
import { useGenerateId } from "@/composable/generateID";
const uuid = `checkbox_item_${useGenerateId()}`;

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
    type: [String, Boolean],
    ddefault: false,
  },
  name: {
    type: String,
    default: "checkboxName",
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
  return model.value.includes(props.value);
});

const size = {
  default: "",
  md: "btn-md",
};
const getClass = computed(() => {
  return [size[props.size], { "is-disabled": props.disabled }];
});
</script>

<style></style>
