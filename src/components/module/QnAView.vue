<template>
  <article class="l-section qna-view">
    <header class="section-header ico-title">AI Q&A</header>
    <div class="section-body">
      <div class="content-group type-table">
        <h3 class="group-title">Symptom Type</h3>
        <div class="group-contents">
          <ElScrollList :list="scrollList">
            <template v-slot="{ item }">
              <ElRadio v-model="radio" :value="item.value">
                <dl class="type-contents">
                  <dd>{{ item.dep1 }}</dd>
                  <dt>{{ item.dep2 }}</dt>
                </dl>
              </ElRadio>
            </template>
          </ElScrollList>
        </div>
      </div>
      <div class="content-group type-solution">
        <h3 class="group-title">Symptom Solution</h3>
        <div class="group-contents scroll">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          magni assumenda, dolore dolor laudantium perferendis qui error
          delectus nostrum veritatis consequatur reiciendis? Exercitationem
          perspiciatis vel vitae voluptatem alias? Soluta, excepturi?Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Cupiditate magni
          assumenda, dolore dolor laudantium perferendis qui error delectus
          nostrum veritatis consequatur reiciendis? Exercitationem perspiciatis
          vel vitae voluptatem alias? Soluta, excepturi?Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Cupiditate magni assumenda, dolore
          dolor laudantium perferendis qui error delectus nostrum veritatis
          consequatur reiciendis? Exercitationem perspiciatis vel vitae
          voluptatem alias? Soluta, excepturi?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cupiditate magni assumenda, dolore dolor
          laudantium perferendis qui error delectus nostrum veritatis
          consequatur reiciendis? Exercitationem perspiciatis vel vitae
          voluptatem alias? Soluta, excepturi?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cupiditate magni assumenda, dolore dolor
          laudantium perferendis qui error delectus nostrum veritatis
          consequatur reiciendis? Exercitationem perspiciatis vel vitae
          voluptatem alias? Soluta, excepturi?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cupiditate magni assumenda, dolore dolor
          laudantium perferendis qui error delectus nostrum veritatis
          consequatur reiciendis? Exercitationem perspiciatis vel vitae
          voluptatem alias? Soluta, excepturi?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cupiditate magni assumenda, dolore dolor
          laudantium perferendis qui error delectus nostrum veritatis
          consequatur reiciendis? Exercitationem perspiciatis vel vitae
          voluptatem alias? Soluta, excepturi?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cupiditate magni assumenda, dolore dolor
          laudantium perferendis qui error delectus nostrum veritatis
          consequatur reiciendis? Exercitationem perspiciatis vel vitae
          voluptatem alias? Soluta, excepturi?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cupiditate magni assumenda, dolore dolor
          laudantium perferendis qui error delectus nostrum veritatis
          consequatur reiciendis? Exercitationem perspiciatis vel vitae
          voluptatem alias? Soluta, excepturi?
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ElButton from "@/components/elements/Button.vue";
import ElScrollList from "@/components/elements/ScrollList.vue";
import ElRadio from "@/components/elements/Radio.vue";
import { useGenerateId } from "@/composable/generateID";

const radio = ref("1");
const radioName = ref("");
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
onMounted(() => {
  radioName.value = `radio_QnA_${useGenerateId()}`;
});
</script>

<style></style>
