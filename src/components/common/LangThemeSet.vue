<template>
  <div class="ls-container">
    <!-- {{ getCurrentThemeIconClass }} -->
    <!-- {{ getCurrentThemeClass }} -->
    <div class="btn-box">한국어</div>
    <div class="btn-box">EN</div>
    <i :class="getCurrentThemeIconClass" @click="changeTheme"></i>
    <!-- :class="getCurrentThemeClass" -->
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useThemeStore } from "../../pinia/theme";

const themeStore = useThemeStore();
let themeIconClass = ref("pi pi-moon");

let currentTheme = ref(0);

function changeTheme() {
  if (currentTheme === 0) {
    themeIconClass.value = "pi pi-sun";
    themeStore.setCurrentTheme("theme-light");
    currentTheme = 1;
  } else {
    themeIconClass.value = "pi pi-moon";
    themeStore.setCurrentTheme("theme-dark");
    currentTheme = 0;
  }
}

let getCurrentThemeClass = computed(() => {
  themeStore.getCurrentThemeClass;
});

let getCurrentThemeIconClass = computed(() => {
  return themeIconClass;
});
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
  border-bottom: 0.5px solid #94a199;
  color: #94a199;
  margin: 0 20px 0 0;
}

.btn-box:hover {
  cursor: pointer;
  color: #0078d4;
}
</style>
