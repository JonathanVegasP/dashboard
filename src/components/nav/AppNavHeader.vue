<script setup lang="ts">
const { title, subTitle } = defineProps<{ title?: string; subTitle?: string }>()
</script>

<template>
  <section aria-label="Dados da Conta" class="flex cross-center padding-1 margin-bottom-1">
    <i
      class="material-icons background-grey padding-05 margin-right-05 border-radius-rounded"
      aria-label="Foto da Conta"
      >person</i
    >
    <div class="min-width-0">
      <h5 class="text-nowrap">{{ title }}</h5>
      <h6 class="text-nowrap">{{ subTitle }}</h6>
    </div>
  </section>
</template>
