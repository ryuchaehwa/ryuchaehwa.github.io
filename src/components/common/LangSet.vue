<template>
    <div class="ls-container">
        <div class="btn-box">한국어</div>
        <div class="btn-box">EN</div>
    </div>
</template>

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
</style>