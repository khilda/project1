<template>
  <div class="el-ipt">
    <div class="ipt-box" :class="getClass">
      <input
        v-model="model"
        type="date"
        class="ipt"
        required
        :placeholder="placeholder"
        :disabled="disabled"
      />
    </div>
    <p v-if="isInvalid" class="ipt-desc">{{ invalidMessage }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
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
    default: "YYYY-MM-DD",
  },
});

const model = defineModel();
defineEmits(["click-search"]);

const getClass = computed(() => ({
  "type-search": props.isSearch,
  "is-invalid": props.isInvalid,
  "is-disabled": props.disabled,
}));
</script>

<style></style>
