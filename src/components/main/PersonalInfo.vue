<template>
    <div class="pi-container">
        <div class="pi-title">123</div>
        <div class="pi-contents">자바스크립트 풀스택 개발자 <span class="text-strong">유채화</span>의 깃헙 페이지에 오신 것을 환영합니다.</div>
    </div>
</template>

<script setup>
import { useLangStore } from '../../pinia';

const langStore = useLangStore()
console.log('langStore', langStore.getCurrentLang)


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
    color: #0078D4;
}

.pi-contents {
    font-family: Ridibatang;
    letter-spacing: 1.5px;
    font-size: 1.5rem;
    color: #C3C3C3
}
</style>