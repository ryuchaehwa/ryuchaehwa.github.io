<template>
    <div class="lm">
        <div class="lm-items-container">
            <div class="lm-title">
                <span>자바스크립트 풀스텍</span>
                <br>
                <FontAwesomeIcon :icon="faCheck" />
                <FontAwesomeIcon :icon="faStar" />
                <FontAwesomeIcon :icon="faHeart" />
                <FontAwesomeIcon :icon="faLocationDot" />
                <FontAwesomeIcon :icon="faGlobe" />
                <FontAwesomeIcon :icon="faPhone" />
                <FontAwesomeIcon :icon="faFont" />
                <FontAwesomeIcon :icon="faCode" />
                <FontAwesomeIcon :icon="faShop" />
                <FontAwesomeIcon :icon="faCodeCompare" />
                <FontAwesomeIcon :icon="faDatabase" />
                <span>Javascript Full Stack</span>
            </div>
            <div class="icon-container">
                <div>
                    <div>
                        <FontAwesomeIcon class="icon-item" :icon="faGithub" :size="iconSize" />
                        <FontAwesomeIcon class="icon-item" :icon="faFigma" :size="iconSize" />
                        <FontAwesomeIcon class="icon-item" :icon="faFontAwesome" :size="iconSize" />
                        <FontAwesomeIcon class="icon-item" :icon="faApple" :size="iconSize" />
                        <FontAwesomeIcon class="icon-item" :icon="faWindows" :size="iconSize" />
                        <FontAwesomeIcon class="icon-item" :icon="faHtml5" :size="iconSize" />
                        <FontAwesomeIcon class="icon-item" :icon="faNode" :size="iconSize" />
                        <FontAwesomeIcon class="icon-item" :icon="faLinux" :size="iconSize" />
                        <FontAwesomeIcon class="icon-item" :icon="faCentos" :size="iconSize" />
                        <FontAwesomeIcon class="icon-item" :icon="faGitlab" :size="iconSize" />
                        <FontAwesomeIcon class="icon-item" :icon="faAtlassian" :size="iconSize" />
                        <FontAwesomeIcon class="icon-item" :icon="faChrome" :size="iconSize" />

                    </div>
                    <div>
                        <FontAwesomeIcon class="icon-item" :icon="faCss" :size="iconSize" />
                        <FontAwesomeIcon class="icon-item" :icon="faGoogleDrive" :size="iconSize" />
                        <FontAwesomeIcon class="icon-item" :icon="faJs" :size="iconSize" />
                        <FontAwesomeIcon class="icon-item" :icon="faKakaoTalk" :size="iconSize" />
                        <FontAwesomeIcon class="icon-item" :icon="faJira" :size="iconSize" />
                        <FontAwesomeIcon class="icon-item" :icon="faNotion" :size="iconSize" />
                        <FontAwesomeIcon class="icon-item" :icon="faNodeJs" :size="iconSize" />
                        <FontAwesomeIcon class="icon-item" :icon="faNpm" :size="iconSize" />
                        <FontAwesomeIcon class="icon-item" :icon="faSass" :size="iconSize" />
                        <FontAwesomeIcon class="icon-item" :icon="faVuejs" :size="iconSize" />
                        <FontAwesomeIcon class="icon-item" :icon="faVsco" :size="iconSize" />
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faGithub, faFigma, faFontAwesome, faApple, faWindows, faHtml5, faNode,
    faLinux, faGitlab, faAtlassian, faCentos, faChrome, faCss, faGoogleDrive, faJs, faJira, faKakaoTalk,
    faNotion, faNodeJs, faNpm, faSass, faVuejs, faVsco,
} from '@fortawesome/free-brands-svg-icons';
import { faStar, faHeart, } from '@fortawesome/free-regular-svg-icons'
import { faCheck, faLocationDot, faGlobe, faPhone, faFont, faCode,faShop, faCodeCompare, faDatabase } from '@fortawesome/free-solid-svg-icons'

const iconSize = '3x';


</script>

<style scoped>
/** landing-main: lm */
.lm {
    background-color: #E6B31E;
    width: 100vw;
    height: 100vh;
}

.lm-items-container {
    margin: 0 auto;
}

.lm-title {
    font-size: 40px;
    font-family: Taenada;
    text-align: center;
}

.icon-container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
}

.icon-item {
    color: #FCFAF1
}

.icon-item:hover {
    cursor: pointer;
    color: #343434
}
</style>