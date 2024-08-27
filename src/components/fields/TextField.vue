<script setup lang="ts">
const { label } = defineProps<{ label?: string }>()
const model = defineModel<string>({ default: '' })
</script>

<template>
  <fieldset class="position-relative padding-0 border-none outline-none">
    <input
      v-model="model"
      placeholder=""
      class="width-100 padding-vertical-05 padding-left-075 border-none outline-primary border-radius-025 transition-02"
    />
    <label
      data-app-field
      class="position-absolute top-0 left-05 cursor-none font-size-075 text-center padding-horizontal-025 translate-y-50 transition-02"
      >{{ label }}</label
    >
  </fieldset>
</template>

<style>
fieldset > input:placeholder-shown + label[data-app-field] {
  top: 50%;
  left: 0.75rem;
  font-size: 1rem;
}

fieldset > input:focus + label[data-app-field] {
  top: 0px;
  left: 0.5rem;
  font-size: 0.75rem;
}
</style>
