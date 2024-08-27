<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNav from './components/nav/AppNav.vue'
import AppScaffold from './components/scaffold/AppScaffold.vue'
import { onMounted } from 'vue'

onMounted(() => {
  window.addEventListener('mousemove', function mouseMove() {
    document.body.className = 'hover'
    window.removeEventListener('mousemove', mouseMove)
  })
})
</script>

<template>
  <AppNav></AppNav>
  <AppScaffold>
    <RouterView></RouterView>
  </AppScaffold>
</template>
