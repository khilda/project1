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
const textarea = ref(`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          magni assumenda, dolore dolor laudantium perferendis qui error
          delectus nostrum veritatis consequatur reiciendis? Exercitationem
          perspiciatis vel vitae voluptatem alias? Soluta, excepturi?Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Cupiditate magni
          assumenda, dolore dolor laudantium perferendis qui error delectus
          nostrum veritatis consequatur reiciendis? Exercitationem perspiciatis
          vel vitae voluptatem alias? Soluta, excepturi?Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Cupiditate magni assumenda, dolore
          dolor laudantium perferendis qui error delectus nostrum veritatis
          consequatur reiciendis? Exercitationem perspiciatis vel vitae
          voluptatem alias? Soluta, excepturi?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cupiditate magni assumenda, dolore dolor
          laudantium perferendis qui error delectus nostrum veritatis
          consequatur reiciendis? Exercitationem perspiciatis vel vitae
          voluptatem alias? Soluta, excepturi?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cupiditate magni assumenda, dolore dolor
          laudantium perferendis qui error delectus nostrum veritatis
          consequatur reiciendis? Exercitationem perspiciatis vel vitae
          voluptatem alias? Soluta, excepturi?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cupiditate magni assumenda, dolore dolor
          laudantium perferendis qui error delectus nostrum veritatis
          consequatur reiciendis? Exercitationem perspiciatis vel vitae
          voluptatem alias? Soluta, excepturi?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cupiditate magni assumenda, dolore dolor
          laudantium perferendis qui error delectus nostrum veritatis
          consequatur reiciendis? Exercitationem perspiciatis vel vitae
          voluptatem alias? Soluta, excepturi?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cupiditate magni assumenda, dolore dolor
          laudantium perferendis qui error delectus nostrum veritatis
          consequatur reiciendis? Exercitationem perspiciatis vel vitae
          voluptatem alias? Soluta, excepturi?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cupiditate magni assumenda, dolore dolor
          laudantium perferendis qui error delectus nostrum veritatis
          consequatur reiciendis? Exercitationem perspiciatis vel vitae
          voluptatem alias? Soluta, excepturi?`);
</script>

<style></style>
