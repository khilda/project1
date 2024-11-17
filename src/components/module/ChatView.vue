<!--
# 이메일 : Agent Question 채팅
-->
<template>
  <article class="l-section chat-view" :class="{ 'is-open': isOpen }">
    <header class="section-header">
      <span class="body-h1 ico-title">Agent Question</span>
      <button type="button" class="btn-toggle" @click="clickToggleHandler">
        Toggle
      </button>
    </header>
    <div class="section-body">
      <div class="scroll">
        <div class="chat-contents">
          <div
            v-for="({ type, message, date, isCheck }, idx) in messages"
            :key="`chat_${idx}`"
            class="chat-item"
            :class="[
              { 'type-receive': type === 'receive' },
              { 'type-send': type === 'send' },
            ]"
          >
            <p class="chat-text">{{ message }}</p>
            <div class="chat-info">
              <i v-if="type === 'send' && isCheck" class="ico-check">check</i>
              <span class="date">{{ date }}</span>
            </div>
          </div>
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
              <i class="ico-check">check</i>
              <span class="date">4:18 PM</span>
            </div>
          </div>
          <!-- //내 질문 -->
        </div>
      </div>
      <div class="chat-ipt">
        <ElInput v-model="input">
          <button type="button" class="ipt-btn-send">보내기</button>
        </ElInput>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref } from "vue";
import ElInput from "@/components/elements/Input.vue";
const input = ref("");

const isOpen = ref(false);
function clickToggleHandler() {
  isOpen.value = !isOpen.value;
}

const messages = [
  {
    type: "receive",
    message: "Lorem ipsum, dolor sit",
    date: "4:18 PM",
    isCheck: true,
  },
  {
    type: "send",
    message: "Lorem ipsum, dolor sit",
    date: "4:18 PM",
    isCheck: true,
  },
  {
    type: "receive",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ducimus mollitia suscipit dolorum perferendis labore nihil inventore officiis quam doloribus aperiam, voluptatibus sit, voluptates dignissimos. Adipisci nam asperiores atque non.",
    date: "4:18 PM",
    isCheck: true,
  },
  {
    type: "receive",
    message: "Lorem ipsum, dolor sit",
    date: "4:18 PM",
    isCheck: true,
  },
  {
    type: "receive",
    message: "Lorem ipsum, dolor sit",
    date: "4:18 PM",
    isCheck: true,
  },
];
</script>

<style></style>
