import { describe, vi, it, expect, afterAll } from 'vitest'
import { useClickOutside } from '../useClickOutside'
import { ref } from 'vue'
import { shallowMount } from '@vue/test-utils'

describe('useClickOutside', () => {
  const useWrapper = (
    contains: (...arg: any) => boolean,
    onClick: () => void,
    target?: boolean,
    currentTarget?: boolean
  ) => {
    vi.spyOn(window, 'addEventListener').mockImplementation((_, call: any) => call({}))
    vi.spyOn(window, 'removeEventListener')
    shallowMount({
      template: '<div></div>',
      setup() {
        useClickOutside({ el: ref({ contains, target, currentTarget } as any), onClick })
      }
    })
  }
  afterAll(() => {
    vi.restoreAllMocks()
  })

  it('should do nothing', async () => {
    const mock = vi.fn().mockImplementation(() => {})
    const contains = vi.fn().mockReturnValue(true)
    useWrapper(contains, mock)
    expect(mock).toHaveBeenCalledTimes(0)
    expect(contains).toHaveBeenCalledTimes(1)
  })

  it('should call outside', async () => {
    const mock = vi.fn().mockImplementation(() => {})
    const contains = vi.fn().mockReturnValue(false)
    useWrapper(contains, mock, true)
    expect(mock).toHaveBeenCalledTimes(1)
    expect(contains).toHaveBeenCalledTimes(1)
  })

  it('should call outside with currentTarget', async () => {
    const mock = vi.fn().mockImplementation(() => {})
    const contains = vi.fn().mockReturnValue(false)
    useWrapper(contains, mock, undefined, true)
    expect(mock).toHaveBeenCalledTimes(1)
    expect(contains).toHaveBeenCalledTimes(1)
  })
})
