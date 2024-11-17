<!--
  # Call Page
-->
<template>
  <main class="l-wrapper page-call">
    <div class="l-layout">
      <!-- Conversation & Session Summary -->
      <section class="l-column">
        <ConversationView />
        <SessionSummaryView />
      </section>
      <!-- Product Infomation & AI Q&A -->
      <section class="l-column">
        <ProductInfomationView />
        <QnAView />
      </section>
      <!-- AI Recommendation(Advice Type) & Agent Question -->
      <section class="l-column">
        <AdviceView />
        <ChatView />
        <CounsellingResultView v-if="isShowConsulting" />
      </section>
    </div>
    <div class="notification-wrap">
      <div class="notification">
        <div class="col">
          <p class="c-primary-red">Select Symptom Type</p>
          <p class="c-mid-gray1">
            Energy Rating/Power Consumption/Electricity Cost
          </p>
          <p>No Softener Scent on Clothes After Wash [Automatic Detergent]</p>
        </div>
      </div>
      <ElButton
        :type="isShowConsulting ? 'gray' : 'primary'"
        size="lg"
        @click="clickBtnHandler"
      >
        <i class="ico-counselling"></i>
        Counselling Result
      </ElButton>
    </div>
  </main>
</template>

<script setup>
import ElButton from "@/components/elements/Button.vue";
import ConversationView from "@/components/module/ConversationView.vue";
import SessionSummaryView from "@/components/module/SessionSummaryView.vue";
import ProductInfomationView from "@/components/module/ProductInfomationView.vue";
import QnAView from "@/components/module/QnAView.vue";
import AdviceView from "@/components/module/AdviceView.vue";
import ChatView from "@/components/module/ChatView.vue";
import CounsellingResultView from "@/components/module/CounsellingResultView.vue";
import { ref } from "vue";

const isShowConsulting = ref(true);
function clickBtnHandler() {
  isShowConsulting.value = !isShowConsulting.value;
}
</script>

<style></style>
