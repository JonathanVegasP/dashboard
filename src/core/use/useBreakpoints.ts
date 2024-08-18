import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import type { BreakpointType } from '../types/BreakpointType'
import { fallback } from '../utils/fallback'

export const useBreakpoint: () => BreakpointType = () => {
  return {
    mobile: () => {
      const media = window.matchMedia('(max-width: 576px)')

      const data = ref(media.matches)

      const handleEvent = (event: MediaQueryListEvent) => {
        data.value = event.matches
      }

      onMounted(() => {
        fallback(media.addEventListener)
          .or(media.addListener)
          .bind(media)
          .then('change', { handleEvent })
          .else(handleEvent)
      })

      onBeforeUnmount(() =>
        fallback(media.removeEventListener)
          .or(media.removeListener)
          .bind(media)
          .then('change', { handleEvent })
          .else(handleEvent)
      )

      return computed(() => data.value)
    },
    smallTablet: () => {
      const media = window.matchMedia('(max-width: 768px)')

      const data = ref(media.matches)

      const handleEvent = (event: MediaQueryListEvent) => {
        data.value = event.matches
      }

      onMounted(() => {
        fallback(media.addEventListener)
          .or(media.addListener)
          .bind(media)
          .then('change', { handleEvent })
          .else(handleEvent)
      })

      onBeforeUnmount(() =>
        fallback(media.removeEventListener)
          .or(media.removeListener)
          .bind(media)
          .then('change', { handleEvent })
          .else(handleEvent)
      )

      return computed(() => data.value)
    },
    mediumTablet: () => {
      const media = window.matchMedia('(max-width: 992px)')

      const data = ref(media.matches)

      const handleEvent = (event: MediaQueryListEvent) => {
        data.value = event.matches
      }

      onMounted(() => {
        fallback(media.addEventListener)
          .or(media.addListener)
          .bind(media)
          .then('change', { handleEvent })
          .else(handleEvent)
      })

      onBeforeUnmount(() =>
        fallback(media.removeEventListener)
          .or(media.removeListener)
          .bind(media)
          .then('change', { handleEvent })
          .else(handleEvent)
      )

      return computed(() => data.value)
    },
    smallDesktop: () => {
      const media = window.matchMedia('(max-width: 1200px)')
      const data = ref(media.matches)

      const handleEvent = (event: MediaQueryListEvent) => {
        data.value = event.matches
      }

      onMounted(() => {
        fallback(media.addEventListener)
          .or(media.addListener)
          .bind(media)
          .then('change', { handleEvent })
          .else(handleEvent)
      })

      onBeforeUnmount(() =>
        fallback(media.removeEventListener)
          .or(media.removeListener)
          .bind(media)
          .then('change', { handleEvent })
          .else(handleEvent)
      )

      return computed(() => data.value)
    },
    mediumDesktop: () => {
      const media = window.matchMedia('(max-width: 1400px)')

      const data = ref(media.matches)

      const handleEvent = (event: MediaQueryListEvent) => {
        data.value = event.matches
      }

      onMounted(() => {
        fallback(media.addEventListener)
          .or(media.addListener)
          .bind(media)
          .then('change', { handleEvent })
          .else(handleEvent)
      })

      onBeforeUnmount(() =>
        fallback(media.removeEventListener)
          .or(media.removeListener)
          .bind(media)
          .then('change', { handleEvent })
          .else(handleEvent)
      )

      return computed(() => data.value)
    }
  }
}
