<template>
  <div class="pi-container">
    <div class="pi-title">웰컴</div>
    <div class="pi-contents">
      자바스크립트 풀스택 개발자 <span class="text-strong">유채화</span>의 깃헙
      페이지에 오신 것을 환영합니다.
    </div>
    <div class="pi-contents">
      이 깃헙은 제 개인포트폴리오이자, 신입/초보 개발자들에게 (어쩌면) 쏠쏠한
      정보를 제공할 수 있는 레포이기도 합니다.
    </div>
    <div class="pi-contents">
      자바스크립트의 각종 라이브러리 기본 사용법에 대해 포스팅하고 있으니,
      궁금하신 분은 포스팅을 확인해주세요.
    </div>
  </div>
</template>

<script setup>
// import { useLangStore } from "../../pinia";
// const langStore = useLangStore();
</script>

<style scoped>
/* pi: personal info */
.pi-container {
  color: #fff;
  height: 100vh;
  width: 100%;
}

.pi-title {
  font-family: MuseumCulturalFoundationClassic;
  font-size: 8rem;
  color: #0078d4;
}

.pi-contents {
  font-family: Ridibatang;
  letter-spacing: 1.5px;
  font-size: 1.5rem;
  color: #c3c3c3;
}
</style>
