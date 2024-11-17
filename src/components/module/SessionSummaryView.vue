<!--
# Call : SessionSummaryView 항목
-->
<template>
  <article class="l-section summary-view">
    <header class="section-header">
      <span class="body-h1">Session Summary</span>
      <button
        type="button"
        class="btn-pin"
        :class="{ 'is-active': isActive }"
        @click="clickToggleHandler"
      >
        Toggle
      </button>
    </header>
    <div class="section-body">
      <div class="scroll">
        <div class="summary-content">
          <ElRadio
            v-for="({ value, text }, idx) in radioList"
            :key="`radio_list_${idx}`"
            v-model="radio"
            :value="value"
            :name="radioName"
          >
            <div class="type-contents">
              <i class="ico-check"></i>
              <span>{{ text }}</span>
            </div>
          </ElRadio>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ElRadio from "@/components/elements/Radio.vue";
import { useGenerateId } from "@/composable/generateID";
const isActive = ref(false);
function clickToggleHandler() {
  isActive.value = !isActive.value;
}
const radio = ref("1");
const radioName = ref("");
const radioList = [
  {
    value: "1",
    text: "Zusammenfsssung der Sitzung: Der Berater bestatigt den Termin und fragt nach weiteren Fragen des Kunden, Der Kunde hat keine weiteren Fragen und das Gesorsch wird beendet.",
  },
  {
    value: "2",
    text: "Zusammenfsssung der Sitzung: Der Berater bestatigt den Termin und fragt nach weiteren Fragen des Kunden, Der Kunde hat keine weiteren Fragen und das Gesorsch wird beendet.",
  },
  {
    value: "3",
    text: "Zusammenfsssung der Sitzung: Der Berater bestatigt den Termin und fragt nach weiteren Fragen des Kunden, Der Kunde hat keine weiteren Fragen und das Gesorsch wird beendet.",
  },
  {
    value: "4",
    text: "Zusammenfsssung der Sitzung: Der Berater bestatigt den Termin und fragt nach weiteren Fragen des Kunden, Der Kunde hat keine weiteren Fragen und das Gesorsch wird beendet.",
  },
  {
    value: "5",
    text: "Zusammenfsssung der Sitzung: Der Berater bestatigt den Termin und fragt nach weiteren Fragen des Kunden, Der Kunde hat keine weiteren Fragen und das Gesorsch wird beendet.",
  },
  {
    value: "6",
    text: "Zusammenfsssung der Sitzung: Der Berater bestatigt den Termin und fragt nach weiteren Fragen des Kunden, Der Kunde hat keine weiteren Fragen und das Gesorsch wird beendet.",
  },
  {
    value: "7",
    text: "Zusammenfsssung der Sitzung: Der Berater bestatigt den Termin und fragt nach weiteren Fragen des Kunden, Der Kunde hat keine weiteren Fragen und das Gesorsch wird beendet.",
  },
];

onMounted(() => {
  radioName.value = `radio_summary_${useGenerateId()}`;
});
</script>
<style></style>
