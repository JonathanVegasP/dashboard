<script setup lang="ts">
import { useAppStore } from '@/stores/app'
const store = useAppStore()
</script>

<template>
  <header
    class="flex main-start cross-center padding-1 background-secondary color-secondary shadow"
    aria-label="Cabeçalho"
  >
    <button
      v-if="store.isTablet"
      type="button"
      aria-label="Expandir Menu Lateral"
      :aria-expanded="store.menuExpanded"
      @click.stop="store.toggleMenu"
      class="material-icons cursor-pointer padding-05 margin-right-1 border-radius-rounded border-none background-none on-background-hover-secondary color-secondary transition-02"
    >
      menu
    </button>
    <h3 v-once>Dashboard</h3>
  </header>
</template>
