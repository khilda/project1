<template>
  <div class="el-ipt">
    <div class="ipt-box" :class="getClass">
      <input
        v-model="model"
        type="text"
        class="ipt"
        :placeholder="placeholder"
        :disabled="disabled"
      />
      <button
        v-if="isSearch"
        type="button"
        class="ipt-btn"
        :disabled="disabled"
        @click="$emit('click-search', $event)"
      >
        검색
      </button>
    </div>
    <p v-if="isInvalid" class="ipt-desc">text</p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  isSearch: {
    type: Boolean,
    default: false,
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
    default: "",
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
