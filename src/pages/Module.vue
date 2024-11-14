<template>
  <div class="guide-box">
    <div class="title-h3">AI Recommendation</div>
    <AIRecommendView />
  </div>
  <div class="guide-box">
    <div class="title-h3">Agent Question</div>
    <Question />
  </div>
  <div class="guide-box">
    <div class="title-h3">Product Infomation</div>
  </div>
  <div class="guide-box">
    <div class="title-h3">AI Q&A</div>
    <QnAView />
  </div>
  <div class="guide-box">
    <div class="title-h3">Email View</div>
    <EmailView />
  </div>
</template>

<script setup>
import ElButton from "@/components/elements/Button.vue";
import EmailView from "@/components/module/EmailView.vue";
import QnAView from "@/components/module/QnAView.vue";
import Question from "@/components/module/Question.vue";
import AIRecommendView from "@/components/module/AIRecommendView.vue";
</script>

<style scoped>
.guide-box {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 20px 0;
}
.row-box {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
