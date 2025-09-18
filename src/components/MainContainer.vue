<template>
  <LeftSide></LeftSide>
  <LangSet></LangSet>
  <div class="main-container">
    <div style="width: 90%; min-width: 90%; max-width: 90%; padding: 80px 40px 0 40px;">
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

.mc-name {
  font-size: 90px;
  font-family: Paperozi;
}

.mc-name-en {
  font-size: 50px
}

.mc-job-title {
  font-size: 70px;
  font-family: Paperozi;
}
</style>
