<script setup lang="ts">
const { title } = defineProps<{ title?: string }>()
</script>

<template>
  <button type="button" :aria-label="'Abrir Página de ' + title">
    <h6>{{ title }}</h6>
    <i class="material-icons">keyboard_arrow_right</i>
  </button>
</template>

<style scoped>
button {
  padding: 0.5rem;
  border: none;
  color: white;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease-out;
}
button:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
