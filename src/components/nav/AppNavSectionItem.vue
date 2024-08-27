<script setup lang="ts">
const { title } = defineProps<{ title?: string }>()
</script>

<template>
  <button
    type="button"
    :aria-label="'Abrir Página de ' + title"
    class="flex main-space-between cross-center cursor-pointer width-100 padding-05 border-none on-background-primary on-background-hover-primary color-secondary transition-02"
  >
    <h5>{{ title }}</h5>
    <i class="material-icons">keyboard_arrow_right</i>
  </button>
</template>
