<template>
  <LeftSide></LeftSide>
  <LangSet></LangSet>
  <div class="main-container">
    <div class="mc-items">
      <PersonalInfo></PersonalInfo>
      <SkillsInfo></SkillsInfo>
      <CareerInfo></CareerInfo>
      <ProjectsInfo></ProjectsInfo>
      <PostsContainer></PostsContainer>
    </div>
  </div>
</template>

<script setup>
import LeftSide from './common/LeftSide.vue';
import LangSet from './common/LangSet.vue';
import PersonalInfo from './main/PersonalInfo.vue';
import SkillsInfo from './main/SkillsInfo.vue';
import CareerInfo from './main/CareerInfo.vue'
import ProjectsInfo from './main/ProjectsInfo.vue'
import PostsContainer from './main/PostsContainer.vue'
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
