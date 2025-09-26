<template>
  <LeftSide></LeftSide>
  <LangThemeSet></LangThemeSet>
  <div class="main-container">
    <div class="mc-items">
      <router-view></router-view>
      <!-- <MainComponents></MainComponents> -->
    </div>
  </div>
</template>

<script setup>
// import MainComponents from './main/MainComponents.vue';
import LeftSide from './common/LeftSide.vue';
import LangThemeSet from './common/LangThemeSet.vue';
</script>

<style scoped>
/** mc: main-container */
.main-container {
  color: #0078D4;
  height: 100vh;
  padding: 0 0 0 80px;
}

.mc-items {
  width: 90%;
  min-width: 90%;
  max-width: 90%;
  padding: 80px 40px 0 40px;
  margin: 0 auto;
}
</style>
