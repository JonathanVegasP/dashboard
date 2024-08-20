<script setup lang="ts">
import { useAppStore } from '@/stores/app'
const store = useAppStore()
</script>

<template>
  <header aria-label="Cabeçalho">
    <button
      v-if="store.isTablet"
      type="button"
      aria-label="Expandir Menu Lateral"
      :aria-expanded="store.menuExpanded"
      @click.stop="store.toggleMenu"
      class="material-icons"
    >
      menu
    </button>
    <h1 v-once>Dashboard</h1>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 1rem;
  background-color: white;
  color: black;
  box-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;
}

ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  padding: 0;
}

button {
  cursor: pointer;
  color: black;
  background-color: transparent;
  border-radius: 50%;
  padding: 0.5rem;
  border: none;
  margin-right: 1rem;
  transition: background-color 0.2s ease-out;
}

button:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
