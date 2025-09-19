<template>
    <div class="si-container">

        <div class="section-title"> <i class="pi pi-wrench"></i> 개발 스택</div>
        <div class="section-sub-title">프론트 Frontend</div>
        <div class=""></div>

        <div class="si-icons">
            <FontAwesomeIcon :icon="faVuejs" />
            <FontAwesomeIcon :icon="faApple" />
            <FontAwesomeIcon :icon="faWindows" />
            <FontAwesomeIcon :icon="faFigma" />
            <FontAwesomeIcon :icon="faHtml5" />
            <FontAwesomeIcon :icon="faNode" />
            <FontAwesomeIcon :icon="faAtlassian" />
            <FontAwesomeIcon :icon="faNotion" />
            <FontAwesomeIcon :icon="faNpm" />
            <FontAwesomeIcon :icon="faJs" />
            <FontAwesomeIcon :icon="faKakaoTalk" />
            <FontAwesomeIcon :icon="faJira" />
            <FontAwesomeIcon :icon="faGoogleDrive" />
            <FontAwesomeIcon :icon="faGit" />
            <FontAwesomeIcon :icon="faConfluence" />
            <FontAwesomeIcon :icon="faCss" />
            <FontAwesomeIcon :icon="faChrome" />
            <FontAwesomeIcon :icon="faBootstrap" />
            <!-- <FontAwesomeIcon :icon="fa500Px" /> -->
            <FontAwesomeIcon :icon="faCentos" />
            <FontAwesomeIcon :icon="faUbuntu" />
        </div>
    </div>
</template>

<script setup>
// fa500Px,
import { faVuejs, faApple, faUbuntu, faCentos, faChrome, faBootstrap, faConfluence, faGit, faCss, faWindows, faFigma, faHtml5, faNode, faAtlassian, faNotion, faNpm, faJs, faKakaoTalk, faJira, faGoogleDrive } from '@fortawesome/free-brands-svg-icons'
</script>

<style scoped>
/* si: skills info */
.si-container {
    color: #fff;
    height: 100vh;
    font-size: 1rem;
}

.si-icons {
    /* background-color: lightblue; */
    font-size: 2rem
}
</style>