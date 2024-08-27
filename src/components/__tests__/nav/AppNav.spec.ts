import { describe, it, expect, beforeEach, vi, afterAll } from 'vitest'
import { shallowMount, VueWrapper } from '@vue/test-utils'
import AppNav from '@/components/nav/AppNav.vue'
import { createTestingPinia } from '@pinia/testing'
import { useAppStore } from '@/stores/app'
import { nextTick } from 'vue'
describe('AppNav', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    vi.spyOn(window, 'matchMedia').mockReturnValue({ matches: false } as any)
    wrapper = shallowMount(AppNav, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            stubActions: false,
            initialState: {
              app: { menuExpanded: true },
              user: {
                user: { isLoggedIn: true }
              }
            }
          })
        ]
      }
    })
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  it('renders properly', () => {
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.html()).toContain('<nav')
    expect(wrapper.classes()).toContain('w-min-240')
  })

  it('should collapse', async () => {
    const store = useAppStore()
    store.toggleMenu()
    await nextTick()
    expect(wrapper.classes()).not.toContain('w-min-240')
  })
})
