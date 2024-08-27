<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import AppHeader from '../header/AppHeader.vue'
const store = useUserStore()
</script>

<template>
  <div class="flex col grow height-100 overflow-auto overflow-margin-025">
    <AppHeader v-if="store.isLoggedIn"></AppHeader>
    <slot></slot>
  </div>
</template>
