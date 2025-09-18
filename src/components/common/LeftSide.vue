<template>
    <div class="ls-container">
        <div class="ls-socials">
            <div v-for="link in links" class="ls-icon">
                <i :class="link.icon" class="ls-icon-item" />
                <!-- <font-awesome-icon :icon="link.icon" /> -->
            </div>
        </div>
        <hr class="ls-hr" />
        <div class="ls-menus">
            <div v-for="menu in menus" class="ls-icon">
                <i :class="menu.icon" class="ls-icon-item" />
            </div>
        </div>
    </div>
</template>

<script setup>
import links from '../../data/links'
import menus from '../../data/menus'
</script>

<style scoped>
/* ls: left side */
.ls-container {
    position: fixed;
    width: 80px;
    color: #94A199;
    font-size: 35px;
    background-color: #181818;
    border-right: 0.5px solid #94A19950;
    height: 100vh;
}

.ls-socials {
    width: 100%;
    text-align: center;
}

.ls-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    margin: 10px 0;
    /* border-left: 3px solid #0078D4; */
    width: 100%;
    color: #94A199;
}

.ls-icon-item {
    font-size: 1.5rem;
}

.ls-hr {
    border: 0.5px solid #94A19950;
    width: 80%;
    border-style: dashed;
    margin: 0 auto;
}

.selected {}

.ls-icon:hover {
    cursor: pointer;
    color: #fff
}
</style>