<!--
# Call : AI Recommendation Advice 항목
-->
<template>
  <article class="l-section recommend-view">
    <header class="section-header">
      <span class="body-h1 ico-title">AI Recommendation</span>
      <ElRating v-model="rating" />
    </header>
    <div class="scroll">
      <div class="section-body">
        <div
          v-for="(advice, idx) in adviceList"
          :key="`advice_${idx}`"
          class="advice-item"
        >
          <header class="advice-header">
            <div class="body-h3">
              <em class="c-primary-red">
                Advice {{ (idx + 1).toString().padStart(2, "0") }}
              </em>
              {{ advice.title }}
            </div>
            <ElButtonLikeHate v-model="advice.favorite" />
          </header>
          <div class="advice-body">
            {{ advice.content }}
          </div>
        </div>
        <!-- Advice Item -->
        <div class="advice-item">
          <header class="advice-header">
            <div class="body-h3">
              <em class="c-primary-red">Advice 99</em>
              타이틀 입력
            </div>
            <ElButtonLikeHate v-model="favoriteValue" />
          </header>
          <div class="advice-body">본문</div>
        </div>
        <!-- //Advice Item -->
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref } from "vue";
import ElRating from "@/components/elements/Rating.vue";
import ElButtonLikeHate from "@/components/elements/ButtonLikeHate.vue";

const rating = ref(1);
const favoriteValue = ref(undefined);

const adviceList = [
  {
    title: "Check Network Connection",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, suscipit a? Commodi culpa officiis nobis qui cupiditate. Inventore nihil sint iure vel, atque laudantium reprehenderit possimus, recusandae obcaecati, modi veritatis?",
    favorite: true,
  },
  {
    title: "Check Network Connection",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, suscipit a? Commodi culpa officiis nobis qui cupiditate. Inventore nihil sint iure vel, atque laudantium reprehenderit possimus, recusandae obcaecati, modi veritatis?",
    favorite: false,
  },
  {
    title: "Check Network Connection",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, suscipit a? Commodi culpa officiis nobis qui cupiditate. Inventore nihil sint iure vel, atque laudantium reprehenderit possimus, recusandae obcaecati, modi veritatis?",
    favorite: undefined,
  },
];
</script>

<style></style>
