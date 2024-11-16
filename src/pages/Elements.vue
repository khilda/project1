<template>
  <div class="guide-box">
    <h3 class="sub-h2">Button</h3>
    <div class="row-box">
      <ElButton>Button Text</ElButton>
      <ElButton disabled>Button Text</ElButton>
      <ElButton type="primary">Button Text</ElButton>
      <ElButton type="primary" disabled>Button Text</ElButton>
    </div>
    <div class="row-box">
      <ElButton size="md">Button Text</ElButton>
      <ElButton size="md" disabled>Button Text</ElButton>
      <ElButton type="primary" size="md">Button Text</ElButton>
      <ElButton type="primary" size="md" disabled>Button Text</ElButton>
    </div>
    <div class="row-box">
      <ElButton size="lg">Button Text</ElButton>
      <ElButton size="lg" disabled>Button Text</ElButton>
      <ElButton type="primary" size="lg">Button Text</ElButton>
      <ElButton type="primary" size="lg" disabled>Button Text</ElButton>
    </div>
  </div>
  <div class="guide-box">
    <h3 class="sub-h2">input</h3>
    <ElInput v-model="input1" placeholder="placeholder" />
    <ElInput v-model="input1" is-search disabled />
    <ElInput v-model="input1" is-search @click-search="clickSearchHandler" />
    <ElInput v-model="input1" is-invalid />
  </div>
  <div class="guide-box">
    <h3 class="sub-h2">Select</h3>
    <ElSelect v-model="select" :options="options" />
  </div>
  <div class="guide-box">
    <h3 class="sub-h2">Checkbox:: {{ checkbox }}</h3>
    <ElCheckbox
      v-model="checkbox"
      value="1"
      :name="checkboxName"
      label="Checkbox1"
    />
    <ElCheckbox
      v-model="checkbox"
      value="2"
      :name="checkboxName"
      label="Checkbox2"
    />
    <!-- Label을 Custom 할경우 -->
    <ElCheckbox v-model="checkbox" value="3" :name="checkboxName" disabled>
      <strong>Checkbox3</strong>
    </ElCheckbox>
  </div>
  <div class="guide-box">
    <h3 class="sub-h2">Radio:: {{ radio }}</h3>
    <ElRadio v-model="radio" value="1" :name="radioName" label="Radio1" />
    <ElRadio v-model="radio" value="2" :name="radioName" label="Radio2" />
    <!-- Label을 Custom 할경우 -->
    <ElRadio v-model="radio" value="3" :name="radioName" disabled>
      <strong>Radio3</strong>
    </ElRadio>
  </div>
  <div class="guide-box">
    <h3 class="sub-h2">Table</h3>
    <table class="table">
      <thead>
        <tr>
          <th>Symptom</th>
          <th>Sub Symprom1</th>
          <th>Sub Symprom2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>REF</td>
          <td>Door Issues</td>
          <td>Lorem ipsum dolor,</td>
        </tr>
        <tr>
          <td>REF</td>
          <td>Door Issues</td>
          <td>Lorem ipsum dolor,</td>
        </tr>
        <tr>
          <td>REF</td>
          <td>Door Issues</td>
          <td>Lorem ipsum dolor,</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import ElButton from "@/components/elements/Button.vue";
import ElInput from "@/components/elements/Input.vue";
import ElSelect from "@/components/elements/Select.vue";
import ElCheckbox from "@/components/elements/Checkbox.vue";
import ElRadio from "@/components/elements/Radio.vue";
import { useGenerateId } from "@/composable/generateID";

const input1 = ref("");
const select = ref("");
const options = [
  { label: "label1", value: "1" },
  { label: "label2", value: "2" },
  { label: "label3", value: "3" },
  { label: "label4", value: "4" },
];

const checkbox = ref(["1"]);
const checkboxName = ref("");

const radio = ref("1");
const radioName = ref("");

function clickSearchHandler(e) {
  console.log("검색버튼 클릭 : ", e);
}
function clickBtnHandler(evt) {
  console.log("버튼 클릭 : ", evt);
}

onMounted(() => {
  checkboxName.value = `checkbox_Name_${useGenerateId()}`;
  radioName.value = `radio_Name_${useGenerateId()}`;
});
</script>

<style scoped>
.guide-box {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.row-box {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
