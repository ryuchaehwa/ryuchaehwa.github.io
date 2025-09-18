<template>
  <LeftSide></LeftSide>
  <div class="main-container">
    <div>
      <PersonalInfo></PersonalInfo>
      <SkillsInfo></SkillsInfo>
      <CareerInfo></CareerInfo>
      <ProjectsInfo></ProjectsInfo>
      <PostsContainer></PostsContainer>
      <PicsContainer></PicsContainer>
    </div>
  </div>
</template>

<script setup>
import LeftSide from './common/LeftSide.vue';
import PersonalInfo from './main/PersonalInfo.vue';
import SkillsInfo from './main/SkillsInfo.vue';
import CareerInfo from './main/CareerInfo.vue'
import ProjectsInfo from './main/ProjectsInfo.vue'
import PostsContainer from './main/PostsContainer.vue'
import PicsContainer from './main/PicsContainer.vue'
</script>

<style scoped>
/** mc: main-container */
.main-container {
  /* background-color: #35495E; */
  /* background-color: #35495E; */
  background-color: #1F1F1F;
  color: #0078D4;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
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
