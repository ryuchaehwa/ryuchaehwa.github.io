<template>
    <div class="top-menu">
        <div class="menu-logo">유채화</div>
        <div>메뉴</div>
        <div><span class="local-lang" @click="changeLang(0)">한국어</span> / <span class="local-lang"
                @click="changeLang(1)">영어</span></div>
    </div>

</template>

<script setup>

import { useLangStore } from '@/pinia/langStore';

const store = useLangStore()
console.log('-store', store.getCurrentLang)

function changeLang(value) {
    store.setCurrentLang(value)
}
</script>

<style scoped>
.top-menu {
    height: 80px;
    line-height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    background-color: #343434;
    color: #FCFAF1;
    padding: 0 20px;
    font-size: 24px;
}

.menu-logo:hover,
.local-lang:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #E6B31E
}
</style>