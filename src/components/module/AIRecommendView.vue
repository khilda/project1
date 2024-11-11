<template>
  <article class="l-section recommend-view">
    <header class="recommend-header">AI Recommendation</header>
    <div class="recommend-body">
      <div class="body-contents">
        <div class="result">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ea
          nobis eveniet libero, nisi dolor repellat nam molestias, fugiat quo
          tenetur repudiandae quod incidunt quaerat eos alias culpa aspernatur
          facilis.
        </div>
        <div class="ai-ipt">
          <ElInput v-model="input" />
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref } from "vue";
import ElInput from "../elements/Input.vue";
const input = ref("");
</script>

<style></style>
