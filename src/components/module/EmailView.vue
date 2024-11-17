<!--
# 이메일 : 이메일을 보여주는 영역
-->
<template>
  <section class="l-section l-email">
    <header class="email-header">
      <div class="email-info">
        <strong class="info-sender">Sender</strong>
        <span class="info-date">YYYY.MM.DD(WEEK)</span>
      </div>
      <h3 class="email-title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum tempore
        amet, odio, saepe laudantium quidem eveniet ducimus, odit ea reiciendis
        beatae? Modi quas expedita voluptates quibusdam doloremque ratione
        maxime rem!
      </h3>
    </header>
    <div class="email-contents scroll">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum saepe
      voluptates fugiat. Velit quam earum incidunt ea error similique, sint
      expedita ad natus aspernatur. Iusto veritatis cupiditate ea voluptas?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum saepe
      voluptates fugiat. Velit quam earum incidunt ea error similique, sint
      expedita ad natus aspernatur. Iusto veritatis cupiditate ea voluptas?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum saepe
      voluptates fugiat. Velit quam earum incidunt ea error similique, sint
      expedita ad natus aspernatur. Iusto veritatis cupiditate ea voluptas?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum saepe
      voluptates fugiat. Velit quam earum incidunt ea error similique, sint
      expedita ad natus aspernatur. Iusto veritatis cupiditate ea voluptas?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum saepe
      voluptates fugiat. Velit quam earum incidunt ea error similique, sint
      expedita ad natus aspernatur. Iusto veritatis cupiditate ea voluptas?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum saepe
      voluptates fugiat. Velit quam earum incidunt ea error similique, sint
      expedita ad natus aspernatur. Iusto veritatis cupiditate ea voluptas?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum saepe
      voluptates fugiat. Velit quam earum incidunt ea error similique, sint
      expedita ad natus aspernatur. Iusto veritatis cupiditate ea voluptas?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum saepe
      voluptates fugiat. Velit quam earum incidunt ea error similique, sint
      expedita ad natus aspernatur. Iusto veritatis cupiditate ea voluptas?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum saepe
      voluptates fugiat. Velit quam earum incidunt ea error similique, sint
      expedita ad natus aspernatur. Iusto veritatis cupiditate ea voluptas?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum saepe
      voluptates fugiat. Velit quam earum incidunt ea error similique, sint
      expedita ad natus aspernatur. Iusto veritatis cupiditate ea voluptas?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum saepe
      voluptates fugiat. Velit quam earum incidunt ea error similique, sint
      expedita ad natus aspernatur. Iusto veritatis cupiditate ea voluptas?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum saepe
      voluptates fugiat. Velit quam earum incidunt ea error similique, sint
      expedita ad natus aspernatur. Iusto veritatis cupiditate ea voluptas?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum saepe
      voluptates fugiat. Velit quam earum incidunt ea error similique, sint
      expedita ad natus aspernatur. Iusto veritatis cupiditate ea voluptas?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum saepe
      voluptates fugiat. Velit quam earum incidunt ea error similique, sint
      expedita ad natus aspernatur. Iusto veritatis cupiditate ea voluptas?
    </div>
    <!-- 텍스트 입력 부분 -->
    <!-- (11/14) 디자인 삭제 -->
    <!-- <div class="textarea-view">
      <header class="textarea-header">ICON AREA</header>
      <textarea class="textarea"></textarea>
    </div>
    <div class="btn-wrap align-right">
      <ElButton type="primary" @click="clickBtnHandler">Send Reply</ElButton>
    </div> -->
  </section>
</template>

<script setup>
import ElButton from "@/components/elements/Button.vue";
function clickBtnHandler(evt) {
  console.log("버튼 클릭 : ", evt);
}
</script>

<style></style>
