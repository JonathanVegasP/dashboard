import AppScaffold from '@/components/scaffold/AppScaffold.vue'
import { createTestingPinia } from '@pinia/testing'
import { shallowMount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

describe('AppScaffold', () => {
  const useWrapper = (isLoggedIn: boolean) => {
    return shallowMount(AppScaffold, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              user: {
                user: {
                  isLoggedIn
                }
              }
            }
          })
        ]
      }
    })
  }

  it('renders properly without auth', () => {
    expect(useWrapper(false).html()).not.toContain('app-header-stub')
  })

  it('renders properly with auth', () => {
    expect(useWrapper(true).html()).toContain('app-header-stub')
  })
})
