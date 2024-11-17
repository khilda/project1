<!--
# Call : Conversation
-->
<template>
  <article class="l-section conversation-view">
    <header class="section-header">
      <div class="header-title">
        <span class="body-h1">Conversation</span>
        <span class="timer" :class="{ on: isStarTimer }"> 00:00 </span>
      </div>
      <div class="col">
        <div class="col-inner-group">
          <h5 class="body-h3">Customer</h5>
          <ElSelect v-model="select" :options="options" />
        </div>
        <div class="col-inner-group">
          <h5 class="body-h3">Agent</h5>
          <ElSelect v-model="select" :options="options" />
        </div>
      </div>
    </header>
    <div class="scroll">
      <div class="section-body">
        <div class="call-contents">
          <div
            v-for="({ type, message, date, isCheck }, idx) in messages"
            :key="`call_${idx}`"
            class="call-item"
            :class="[
              { 'type-receive': type === 'receive' },
              { 'type-send': type === 'send' },
            ]"
          >
            <div class="call-user">03</div>
            <p class="call-text">{{ message }}</p>
            <div class="call-info">
              <i v-if="type === 'send' && isCheck" class="ico-check">check</i>
              <span class="date">{{ date }}</span>
            </div>
          </div>
          <!-- User 내용 -->
          <div class="call-item type-receive">
            <div class="call-user">03</div>
            <p class="call-text">Lorem ipsum, dolor sit</p>
            <div class="call-info">
              <span class="date">4:18 PM</span>
            </div>
          </div>
          <!-- //User 내용 -->
          <!-- 내 답변 -->
          <div class="call-item type-send">
            <div class="call-user">03</div>
            <p class="call-text">Lorem ipsum, dolor sit</p>
            <div class="call-info">
              <i class="ico-check">check</i>
              <span class="date">4:18 PM</span>
            </div>
          </div>
          <!-- //내 답변 -->
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref } from "vue";
import ElSelect from "@/components/elements/Select.vue";

const isStarTimer = ref(false);

const select = ref("");
const options = [
  { label: "label1", value: "1" },
  { label: "label2", value: "2" },
  { label: "label3", value: "3" },
  { label: "label4", value: "4" },
];
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
