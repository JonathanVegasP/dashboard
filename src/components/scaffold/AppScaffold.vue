<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import AppHeader from '../header/AppHeader.vue'
const store = useUserStore()
</script>

<template>
  <div>
    <AppHeader v-if="store.isLoggedIn"></AppHeader>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  overflow: auto;
  overflow-clip-margin: 3px;
  flex-grow: 1;
  height: 100%;
}
</style>
