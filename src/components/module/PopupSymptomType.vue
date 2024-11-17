<!--
 # Popup : Symptom Type 선택 팝업
-->
<template>
  <ElPopup v-model="isOpen" title="Symptom Type" class="pop-symptom">
    <template #container>
      <div class="col">
        <div class="content-group">
          <h3 class="group-title">Symptom Type</h3>
          <div class="group-contents">
            <ElScrollList
              :list="scrollList"
              is-select
              @item-click="clickListItemHandler"
            >
              <template v-slot="{ item }">
                <span>{{ item.dep1 }}</span>
                <span>{{ item.dep2 }}</span>
              </template>
            </ElScrollList>
          </div>
        </div>
        <div class="content-group">
          <h3 class="group-title">Symptom Type</h3>
          <div class="group-contents">
            <ElScrollList
              :list="scrollList"
              is-select
              @item-click="clickListItemHandler"
            >
              <template v-slot="{ item }">
                <span>{{ item.dep1 }}</span>
                <span>{{ item.dep2 }}</span>
              </template>
            </ElScrollList>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="btn-wrap align-full">
        <ElButton @click="closePopup">Cancel</ElButton>
        <ElButton type="primary" @click="clickPopupCloseHandler">
          Confirm
        </ElButton>
      </div>
    </template>
  </ElPopup>
</template>

<script setup>
import { ref, watch } from "vue";
import ElButton from "@/components/elements/Button.vue";
import ElPopup from "@/components/elements/Popup.vue";
import ElScrollList from "@/components/elements/ScrollList.vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["update:model-value", "get-data"]);

// Popup Open 여부 조작
const isOpen = defineModel();
watch(
  () => props.modelValue,
  () => {
    isOpen.value = props.modelValue;
  }
);
// Popup 닫기
function closePopup() {
  isOpen.value = false;
  emits("update:model-value", false);
}

// Popup 닫을때 데이터 가져오기
function clickPopupCloseHandler() {
  closePopup();
  emits("get-data", selectData.value);
}
// 리스트 선택
const selectData = ref();
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
function clickListItemHandler(selectIdx) {
  selectData.value = scrollList[selectIdx];
}
</script>
