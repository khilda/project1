<template>
  <div class="l-layout">
    <!-- 이메일 -->
    <EmailView />
    <section class="l-column">
      <ProductInfomationView />
      <QnAView />
    </section>
    <!-- AI Recommendation -->
    <section class="l-column">
      <AIRecommendView />
      <ChatView />
    </section>
  </div>
  <div class="btn-wrap align-right">
    <ElButton type="primary" size="lg">
      <i class="ico-send"></i>
      Send Reply
    </ElButton>
  </div>
</template>

<script setup>
import ElButton from "@/components/elements/Button.vue";
import ChatView from "@/components/module/ChatView.vue";
import EmailView from "@/components/module/EmailView.vue";
import ProductInfomationView from "@/components/module/ProductInfomationView.vue";
import QnAView from "@/components/module/QnAView.vue";
import AIRecommendView from "@/components/module/AIRecommendView.vue";
</script>

<style></style>
