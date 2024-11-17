<!--
# Call : Counselling Result
-->
<template>
  <div class="counselling-view">
    <article class="l-section">
      <header class="section-header">
        <i class="ico-counselling"></i>
        <span class="body-h1">Counselling Result</span>
        <ElButton>Call Summary</ElButton>
      </header>
      <div class="section-body">
        <!-- Call Code Infomation -->
        <div class="content-group type-call">
          <div class="group-title">Call Code Infomation</div>
          <div class="group-contents">
            <div class="col">
              <ElRadio
                v-model="radio1"
                value="1"
                :name="radioName1"
                label="IB"
              />
              <ElRadio
                v-model="radio1"
                value="2"
                :name="radioName1"
                label="OB"
              />
            </div>
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
        </div>
        <!-- // Call Code Infomation -->
        <!-- Symptom Type -->
        <div class="content-group type-table">
          <div class="group-title col">
            Symptom Type
            <button
              type="button"
              class="btn-search"
              @click="clickPopupBtnHandler"
            >
              검색
            </button>
          </div>
          <div class="group-contents scroll">
            <ElScrollList :list="scrollList">
              <template v-slot="{ item }">
                <ElRadio
                  v-model="radio2"
                  :value="item.value"
                  :name="radioName2"
                >
                  <dl class="type-contents">
                    <dd>{{ item.dep1 }}</dd>
                    <dt>{{ item.dep2 }}</dt>
                  </dl>
                </ElRadio>
              </template>
            </ElScrollList>
          </div>
        </div>
        <!-- // Symptom Type -->
        <!-- Counselling Summary -->
        <div class="content-group type-summary">
          <div class="group-title">Counselling Summary</div>
          <div class="group-contents">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequatur doloremque deleniti obcaecati, ullam, explicabo dolores
            doloribus veniam hic aperiam magni ipsum ea! Quis aspernatur libero
            repellat laudantium corporis sunt nihil.
          </div>
        </div>
        <!-- // Counselling Summary -->
      </div>
    </article>
    <!-- AI Recommendation -->
    <article class="counselling-recommend">
      <div class="col">
        <h5 class="body-h1">AI Recommendation</h5>
        <ElButtonLikeHate v-model="favorite" />
        <ElInput v-model="input1" placeholder="placeholder" />
      </div>
      <div class="btn-wrap align-full">
        <ElButton>Complete</ElButton>
        <ElButton type="primary">Save to GSFS</ElButton>
      </div>
    </article>
  </div>
  <!-- 팝업 -->
  <PopupSymptomType v-model="isPopupOpen" @get-data="updatePopupHandler" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import ElButton from "@/components/elements/Button.vue";
import ElScrollList from "@/components/elements/ScrollList.vue";
import ElRadio from "@/components/elements/Radio.vue";
import ElButtonLikeHate from "@/components/elements/ButtonLikeHate.vue";
import ElInput from "@/components/elements/Input.vue";
import PopupSymptomType from "@/components/module/PopupSymptomType.vue";
import { useGenerateId } from "@/composable/generateID";
const radio1 = ref("1");
const radioName1 = ref("");

const radio2 = ref("1");
const radioName2 = ref("");

const input1 = ref("");
const favorite = ref(undefined);

const scrollList = [
  {
    value: "1",
    dep1: "Energy Rating/Power Consumption/Electricity Cost",
    dep2: "No Softener Scent on Clothes After Wash [Automatic Detergent]",
  },
  {
    value: "2",
    dep1: "Energy Rating/Power Consumption/Electricity Cost",
    dep2: "No Softener Scent on Clothes After Wash [Automatic Detergent]",
  },
  {
    value: "3",
    dep1: "Energy Rating/Power Consumption/Electricity Cost",
    dep2: "No Softener Scent on Clothes After Wash [Automatic Detergent]",
  },
  {
    value: "4",
    dep1: "Energy Rating/Power Consumption/Electricity Cost",
    dep2: "No Softener Scent on Clothes After Wash [Automatic Detergent]",
  },
  {
    value: "5",
    dep1: "Energy Rating/Power Consumption/Electricity Cost",
    dep2: "No Softener Scent on Clothes After Wash [Automatic Detergent]",
  },
];
/**
 * Popup
 */
const isPopupOpen = ref(false);
function clickPopupBtnHandler() {
  isPopupOpen.value = true;
}
function updatePopupHandler(data) {
  isPopupOpen.value = false;
  console.log(data);
}
onMounted(() => {
  radioName1.value = `radio_counselling_${useGenerateId()}`;
  radioName2.value = `radio_counselling_${useGenerateId()}`;
});
</script>
<style></style>
