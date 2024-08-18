import { ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { useBreakpoint } from '@/core/use/useBreakpoints'

export const useAppStore = defineStore('app', () => {
  const { smallTablet } = useBreakpoint()

  const isTablet = smallTablet()
  const menuExpanded = ref(true)

  watchEffect(() => {
    menuExpanded.value = !isTablet.value
  })

  const toggleMenu = () => {
    menuExpanded.value = !menuExpanded.value
  }

  const toggleMenuWithValue = (expand: boolean) => {
    menuExpanded.value = expand
  }

  return { menuExpanded, isTablet, toggleMenu, toggleMenuWithValue }
})
