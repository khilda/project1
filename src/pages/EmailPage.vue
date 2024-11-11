<template>
  <div class="l-layout">
    <!-- 이메일 -->
    <EmailView />
    <section class="l-section">
      <!-- Product Infomation -->
      <article class="pi-view"></article>
      <!-- AI Q&A -->
      <QnAView />
    </section>
    <!-- AI Recommendation -->
    <AIRecommendView />
  </div>
  <div class="btn-wrap align-right">
    <ElButton size="lg">Chatbot</ElButton>
    <ElButton type="primary" size="lg">Send Reply</ElButton>
  </div>
</template>

<script setup>
import ElButton from "@/components/elements/Button.vue";
import EmailView from "@/components/module/EmailView.vue";
import QnAView from "@/components/module/QnAView.vue";
import AIRecommendView from "@/components/module/AIRecommendView.vue";
</script>

<style></style>
