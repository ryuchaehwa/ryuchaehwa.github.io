<template>
    <div class="ls-container">
        <span style="color: #fff">{{ storedTheme }}</span>
        <div class="btn-box">한국어</div>
        <div class="btn-box">EN</div>
        <i :class="themeClassName" @click="changeTheme"></i>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useThemeStore } from '../../pinia/theme'

const themeStore = useThemeStore()
let themeClassName = ref('pi pi-moon')

console.log(themeStore)

function changeTheme() {
    if (storedTheme.value === 0) {
        console.log('themeClassNam 000000e',)
        themeClassName.value = 'pi pi-moon theme-dark'
    } else {
        console.log('themeClassNam11111e')
        themeClassName.value = 'pi pi-sun theme-light'
    }
}

onMounted(() => {
    changeTheme()
})

let storedTheme = computed(() => themeStore.getCurrentTheme)

</script>


<style scoped>
/* ls: Lang Set */
.ls-container {
    position: fixed;
    /* float: right; */
    left: calc(100vw - 200px);
    height: 100px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0.5px solid #94A199;
    color: #94A199;
    margin: 0 20px 0 0;
}

.btn-box:hover {
    /* background-color: #fff; */
    cursor: pointer;
    color: #0078D4
}

.theme-light {
    color: #000
}

.theme-dark {
    color: yellow
}

.theme-light:hover,
.theme-dark:hover {
    cursor: pointer;
    color: #0078D4
}
</style>
