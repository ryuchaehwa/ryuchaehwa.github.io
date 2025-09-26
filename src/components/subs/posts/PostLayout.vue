<template>
    <div class="pl-container" ref="postLayout" @scroll="scrollDetector">
        <ProgressBar :value="progressValue"> </ProgressBar>
        gheight
        <button @scroll="test">test</button>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Editor from 'primevue/editor'
import ProgressBar from 'primevue/progressbar'

let progressValue = ref(0)
let scrollHeight = ref(0)

const pageFrameHeight = 2000

const postLayout = ref(null)

onMounted(() => {

    window.addEventListener('scroll', function (event) {

        let pageHeight = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
        let innerHeight = window.innerHeight

        progressValue.value = ((pageHeight + innerHeight - 100) / pageFrameHeight) * 100

    })
});

</script>

<style scoped>
/* pl: post layout */
.pl-container {
    color: #fff;
    height: 2000px
        /* background-color: #fff; */
}
</style>