<!--
# 이메일 : Product Infomation 상품선택 항목
-->
<template>
  <article class="pi-view" :class="{ 'is-open': isOpen }">
    <header class="pi-header">
      <span>Product Infomation</span>
      <button type="button" class="btn-toggle" @click="clickToggleHandler">
        Toggle
      </button>
    </header>
    <div class="summary">
      <span class="badge">Convenitional Flat TV</span>
      <span class="badge">M623GBB352</span>
    </div>
    <div class="pi-body">
      <div class="row">
        <h5 class="body-h3 required">Product</h5>
        <div class="col">
          <ElScrollList :list="scrollList" is-select>
            <template v-slot="{ item }">
              <span>{{ item.dep1 }}</span>
              <span>{{ item.dep2 }}</span>
            </template>
          </ElScrollList>
          <ElScrollList :list="scrollList" is-select>
            <template v-slot="{ item }">
              <span>{{ item.dep1 }}</span>
              <span>{{ item.dep2 }}</span>
            </template>
          </ElScrollList>
        </div>
      </div>
      <div class="row">
        <h5 class="body-h3">Factory Model</h5>
        <div class="">
          <ElInput v-model="input1" is-search />
        </div>
      </div>
      <div class="row">
        <h5 class="body-h3">Production Date</h5>
        <div class="">
          <ElCalendar v-model="date" />
        </div>
      </div>
      <div class="col">
        <div class="row">
          <h5 class="body-h3">Model</h5>
          <div class="">
            <ElInput v-model="input2" is-search />
          </div>
        </div>
        <div class="row">
          <h5 class="body-h3">Purchase Date</h5>
          <div class="">
            <ElInput v-model="input3" is-search />
          </div>
        </div>
      </div>
      <div class="row">
        <h5 class="body-h3">Serial No</h5>
        <div class="col">
          <ElInput v-model="input4" />
          <ElButton type="form">C</ElButton>
        </div>
      </div>
      <div class="row">
        <h5 class="body-h3">Warranty In/Out</h5>
        <div class="col">
          <ElSelect v-model="select" :options="options" />
          <ElButton type="form" disabled>A</ElButton>
          <ElButton type="form" disabled>P</ElButton>
        </div>
      </div>
      <div class="btn-wrap align-full">
        <ElButton>Cancel</ElButton>
        <ElButton type="primary">Confirm</ElButton>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref } from "vue";
import ElButton from "@/components/elements/Button.vue";
import ElInput from "@/components/elements/Input.vue";
import ElSelect from "@/components/elements/Select.vue";
import ElCalendar from "@/components/elements/Calendar.vue";
import ElScrollList from "@/components/elements/ScrollList.vue";
const input1 = ref("");
const date = ref("");
const input2 = ref("");
const input3 = ref("");
const input4 = ref("");
const select = ref("");
const options = [
  { label: "label1", value: "1" },
  { label: "label2", value: "2" },
  { label: "label3", value: "3" },
  { label: "label4", value: "4" },
];

const isOpen = ref(false);
function clickToggleHandler() {
  isOpen.value = !isOpen.value;
}

const scrollList = [
  { dep1: "REF", dep2: "Refrigerator" },
  { dep1: "TV", dep2: "TV" },
  { dep1: "WM", dep2: "Washing Machine" },
  { dep1: "TLV", dep2: "LCD TV(33 and over)" },
  { dep1: "TLV", dep2: "LCD TV(33 and over)" },
  { dep1: "TLV", dep2: "LCD TV(33 and over)" },
  { dep1: "TLV", dep2: "LCD TV(33 and over)" },
  { dep1: "TLV", dep2: "LCD TV(33 and over)" },
  { dep1: "TLV", dep2: "LCD TV(33 and over)" },
  { dep1: "WM", dep2: "Washing Machine" },
  { dep1: "WM", dep2: "Washing Machine" },
  { dep1: "WM", dep2: "Washing Machine" },
  { dep1: "WM", dep2: "Washing Machine" },
  { dep1: "WM", dep2: "Washing Machine" },
  { dep1: "WM", dep2: "Washing Machine" },
  { dep1: "WM", dep2: "Washing Machine" },
  { dep1: "WM", dep2: "Washing Machine" },
];
</script>

<style></style>
