<template>
  <button
    type="button"
    class="btn"
    :class="getClass"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String, // 'default' | 'primary' | 'form'
    default: "default",
  },
  size: {
    type: String, // 'default' | 'md' | 'lg'
    default: "default",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
defineEmits(["click"]);

const type = {
  default: "",
  primary: "type-primary",
  gray: "type-gray",
  form: "type-form",
};
const size = {
  default: "",
  md: "btn-md",
  lg: "btn-lg",
};
const getClass = computed(() => {
  return [type[props.type], size[props.size]];
});
</script>

<style></style>
