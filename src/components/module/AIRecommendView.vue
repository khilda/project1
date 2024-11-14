<template>
  <article class="l-section recommend-view">
    <header class="section-header">AI Recommendation</header>
    <div class="section-body">
      <div class="textarea-view">
        <textarea class="textarea" v-model="textarea"></textarea>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref } from "vue";
const textarea = ref("");
</script>

<style></style>
