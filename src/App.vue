<template>
  <!-- <router-view v-bind:class="getCurrentThemeClass"></router-view> -->
  <div v-bind:class="getCurrentThemeClass">
    <router-view></router-view>
  </div>

</template>

<script setup>
import { useThemeStore } from './pinia/theme.js'
import { computed } from 'vue'
import { defineOptions } from 'vue';

defineOptions({ inheritAttrs: false })

const themeStore = useThemeStore()

let getCurrentThemeClass = computed(() => {
  return themeStore.getCurrentThemeClass
})

</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  width: 100vw;
}
</style>