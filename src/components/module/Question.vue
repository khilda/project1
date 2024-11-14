<template>
  <article class="l-section chat-view">
    <header class="section-header">Agent Question</header>
    <div class="section-body">
      <div class="chat-contents scroll">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ea
        nobis eveniet libero, nisi dolor repellat nam molestias, fugiat quo
        tenetur repudiandae quod incidunt quaerat eos alias culpa aspernatur
        facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Commodi ea nobis eveniet libero, nisi dolor repellat nam molestias,
        fugiat quo tenetur repudiandae quod incidunt quaerat eos alias culpa
        aspernatur facilis. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Commodi ea nobis eveniet libero, nisi dolor repellat nam
        molestias, fugiat quo tenetur repudiandae quod incidunt quaerat eos
        alias culpa aspernatur facilis.
      </div>
      <div class="chat-ipt">
        <ElInput v-model="input">
          <button type="button" class="ipt-send-btn">보내기</button>
        </ElInput>
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
