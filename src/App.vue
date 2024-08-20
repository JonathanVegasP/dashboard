<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNav from './components/nav/AppNav.vue'
import AppScaffold from './components/scaffold/AppScaffold.vue'
</script>

<template>
  <AppNav></AppNav>
  <AppScaffold>
    <RouterView></RouterView>
  </AppScaffold>
</template>
