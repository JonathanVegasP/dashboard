<script setup lang="ts">
import { computed, ref, shallowRef } from 'vue'

const { title } = defineProps<{ title?: string }>()
const isExpanded = ref(false)
const collapsible = shallowRef<HTMLDivElement>()
const isActive = computed(() => ({ active: isExpanded.value }))
const onClick = () => {
  var value = (isExpanded.value = !isExpanded.value)
  var div = collapsible.value

  if (!div) return

  if (value) {
    div.style.maxHeight = `${div.scrollHeight}px`
    return
  }

  div.style.maxHeight = '0'
}
</script>

<template>
  <section :aria-label="'Seção ' + title">
    <button
      :aria-controls="collapsible?.id"
      :aria-expanded="isExpanded"
      type="button"
      :aria-label="'Botão Expandir Seção ' + title"
      @click="onClick"
      class="title"
      :class="isActive"
    >
      <h5 v-once>{{ title }}</h5>
      <i class="material-icons" aria-label="Icone Que Indica Expansão da Seção" :class="isActive"
        >keyboard_arrow_down</i
      >
    </button>
    <div v-once ref="collapsible" :aria-label="'Seção Expandida de ' + title">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  padding: 0 1rem;
  margin-bottom: 1rem;
  transition: background-color 0.2s ease-out;
}

i {
  transform: rotate(0deg);
  transition: transform 0.2s ease-out;
}

i.active {
  transform: rotate(-180deg);
}

button {
  padding: 0.5rem;
  color: white;
  border: none;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-between;
  border-radius: 0.25rem;
  align-items: center;
}

button:hover {
  background-color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
}

button.active {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 0.25rem 0.25rem 0 0;
}

div {
  background-color: rgba(255, 255, 255, 0.3);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  border-radius: 0 0 0.25rem 0.25rem;
}
</style>
