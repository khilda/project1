<template>
  <article class="l-section chat-view" :class="{ 'is-open': isOpen }">
    <header class="section-header">
      <span>Agent Question</span>
      <button type="button" class="btn-toggle" @click="clickToggleHandler">
        Toggle
      </button>
    </header>
    <div class="section-body">
      <div class="chat-contents scroll">
        <!-- AI 답변 -->
        <div class="chat-item type-receive">
          <p class="chat-text">Lorem ipsum, dolor sit</p>
          <div class="chat-info">
            <span class="date">4:18 PM</span>
          </div>
        </div>
        <!-- //AI 답변 -->
        <!-- 내 질문 -->
        <div class="chat-item type-send">
          <p class="chat-text">Lorem ipsum, dolor sit</p>
          <div class="chat-info">
            <i>check</i>
            <span class="date">4:18 PM</span>
          </div>
        </div>
        <!-- //내 질문 -->
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

const isOpen = ref(false);
function clickToggleHandler() {
  isOpen.value = !isOpen.value;
}
</script>

<style></style>
