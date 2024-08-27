<script setup lang="ts">
import { computed, ref, shallowRef } from 'vue'

const { title } = defineProps<{ title?: string }>()
const isExpanded = ref(false)
const collapsible = shallowRef<HTMLDivElement>()
const isActive = computed(() => ({
  'on-background-active-secondary': isExpanded.value,
  'border-top-radius-025': isExpanded.value
}))
const rotate = computed(() => ({ 'rotate-deg-180': isExpanded.value }))
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
  <section :aria-label="'Seção ' + title" class="width-100 padding-horizontal-1 margin-bottom-1">
    <button
      :aria-expanded="isExpanded"
      type="button"
      :aria-label="'Botão Expandir Seção ' + title"
      @click="onClick"
      class="flex main-space-between cross-center cursor-pointer width-100 padding-05 border-none border-radius-025 on-background-secondary on-background-hover-secondary color-secondary transition-02"
      :class="isActive"
    >
      <h5 v-once>{{ title }}</h5>
      <i
        class="material-icons rotate-deg0 transition-02"
        aria-label="Icone Que Indica Expansão da Seção"
        :class="rotate"
        >keyboard_arrow_down</i
      >
    </button>
    <div
      v-once
      ref="collapsible"
      :aria-label="'Seção Expandida de ' + title"
      class="max-height-0 overflow-none on-background-active-secondary border-bottom-radius-025 transition-02"
    >
      <slot></slot>
    </div>
  </section>
</template>
