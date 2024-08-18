import { onBeforeUnmount, onMounted } from 'vue'
import type { ClickOutsideType } from '../types/ClickOutisdeType'

export const useClickOutside = ({ el, onClick }: ClickOutsideType) => {
  const callback = (event: Event) => {
    const target = event.target || event.currentTarget
    if (!el.value!.contains(target as Node)) {
      onClick()
    }
  }

  onMounted(() => window.addEventListener('click', callback))
  onBeforeUnmount(() => window.removeEventListener('click', callback))
}
