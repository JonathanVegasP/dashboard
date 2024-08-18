import type { Ref } from 'vue'

export type ClickOutsideType = {
  el: Ref<HTMLElement | undefined>
  onClick: () => void
}
