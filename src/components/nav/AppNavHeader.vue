<script setup lang="ts">
const { title, subTitle } = defineProps<{ title?: string; subTitle?: string }>()
</script>

<template>
  <section aria-label="Dados da Conta">
    <i class="material-icons" aria-label="Foto da Conta">person</i>
    <div>
      <h5>{{ title }}</h5>
      <h6>{{ subTitle }}</h6>
    </div>
  </section>
</template>

<style scoped>
h5,
h6 {
  overflow: hidden;
  white-space: nowrap;
}
div {
  min-width: 0;
}
section {
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

i {
  padding: 0.5rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  color: white;
  background-color: #ccc;
}
</style>
