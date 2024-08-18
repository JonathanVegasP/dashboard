import AppHeader from '@/components/header/AppHeader.vue'
import { createTestingPinia } from '@pinia/testing'
import { shallowMount } from '@vue/test-utils'
import { afterAll, describe, expect, it, vi } from 'vitest'

describe('AppHeader', () => {
  const useWrapper = (isTablet: boolean) => {
    vi.spyOn(window, 'matchMedia').mockReturnValue({ matches: isTablet } as any)

    return shallowMount(AppHeader, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            stubActions: false,
            initialState: {
              app: {
                isTablet
              }
            }
          })
        ]
      }
    })
  }

  afterAll(() => {
    vi.restoreAllMocks()
  })

  it('renders properly', () => {
    const wrapper = useWrapper(true)
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.text()).toContain('Dashboard')
    expect(wrapper.text()).toContain('menu')
    expect(wrapper.find('button').attributes()).toMatchObject({
      'aria-expanded': 'false'
    })
  })

  it('should expand', async () => {
    const wrapper = useWrapper(true)
    await wrapper.find('button').trigger('click')

    expect(wrapper.find('button').attributes()).toMatchObject({
      'aria-expanded': 'true'
    })
  })

  it('should remove menu when it is desktop', () => {
    const wrapper = useWrapper(false)
    expect(wrapper.text()).not.contain('menu')
  })
})
