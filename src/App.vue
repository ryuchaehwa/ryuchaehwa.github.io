<template>
  <router-view></router-view>
</template>

<script setup>
import { useThemeStore} from './pinia/theme.js'

const themeStore = useThemeStore()
console.log('---app:', themeStore)

</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  width: 100vw;
}
</style>