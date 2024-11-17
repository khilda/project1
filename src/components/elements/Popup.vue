<script setup>
import { ModalsContainer, VueFinalModal } from "vue-final-modal";
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  class: {
    type: String,
  },
});
const emits = defineEmits(["update:model-value"]);
const model = defineModel();
</script>

<template>
  <VueFinalModal
    v-model="model"
    click-to-close
    esc-to-close
    background="non-interactive"
    lock-scroll
    reserve-scroll-bar-gap
    class="el-popup-wrapper"
    :content-class="['el-popup', props.class]"
  >
    <header class="popup-header">
      <div class="header-title">
        {{ title }}
      </div>
      <button
        class="header-btn-close"
        @click="$emit('update:model-value', false)"
      >
        Close
      </button>
    </header>
    <section class="popup-container scroll">
      <slot name="container" />
    </section>
    <footer class="popup-footer">
      <slot name="footer" />
    </footer>
  </VueFinalModal>
  <ModalsContainer />
</template>
