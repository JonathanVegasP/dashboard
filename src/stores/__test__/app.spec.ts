import { shallowMount } from '@vue/test-utils'
import { afterAll, describe, expect, it, vi } from 'vitest'
import { useAppStore } from '../app'
import { createTestingPinia } from '@pinia/testing'

describe('useAppStore', () => {
  const useWrapper = (isTablet: boolean) => {
    vi.spyOn(window, 'matchMedia').mockReturnValue({ matches: isTablet } as MediaQueryList)
    shallowMount(
      {
        template: '<div></div>',
        setup() {
          useAppStore()
        }
      },
      {
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
      }
    )
  }

  afterAll(() => {
    vi.restoreAllMocks()
  })

  it('should return initial values when it is desktop', () => {
    useWrapper(false)
    const store = useAppStore()
    expect(store.isTablet).toBeFalsy()
    expect(store.menuExpanded).toBeTruthy()
  })

  it('should return initial values when it is tablet', () => {
    useWrapper(true)
    const store = useAppStore()
    expect(store.isTablet).toBeTruthy()
    expect(store.menuExpanded).toBeFalsy()
  })

  it('should expand', () => {
    useWrapper(false)
    const store = useAppStore()
    store.toggleMenu()
    expect(store.menuExpanded).toBeFalsy()
  })

  it('should expand with fixed value', () => {
    useWrapper(false)
    const store = useAppStore()
    store.toggleMenuWithValue(false)
    expect(store.menuExpanded).toBeFalsy()
  })
})
