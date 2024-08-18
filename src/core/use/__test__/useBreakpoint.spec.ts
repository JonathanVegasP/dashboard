import { afterAll, describe, expect, it, vi } from 'vitest'
import { useBreakpoint } from '../useBreakpoints'
import { shallowMount } from '@vue/test-utils'
import type { BreakpointBooleanType, BreakpointType } from '@/core/types/BreakpointType'
import { completer } from '@/core/utils/completer'

describe('useBreakpoint', () => {
  const useWrapper = ({
    matches = false,
    addEventListener = undefined as any as MediaQueryList['addEventListener'],
    removeEventListener = undefined as any as MediaQueryList['removeEventListener'],
    addListener = undefined as any as MediaQueryList['addListener'],
    removeListener = undefined as any as MediaQueryList['removeListener']
  }): Promise<BreakpointBooleanType> => {
    vi.spyOn(window, 'matchMedia').mockReturnValue({
      matches,
      addEventListener,
      removeEventListener,
      addListener,
      removeListener
    } as MediaQueryList)
    const c = completer<BreakpointBooleanType>()
    shallowMount({
      template: '<div></div>',
      setup() {
        const useBreakpoints = useBreakpoint()
        const breakpoints = {} as BreakpointBooleanType
        for (const key in useBreakpoints) {
          breakpoints[key as keyof BreakpointType] =
            useBreakpoints[key as keyof BreakpointType]().value
        }
        c.completer(breakpoints)
      }
    }).unmount()
    return c.promise
  }

  afterAll(() => {
    vi.restoreAllMocks()
  })

  it('should return value as false', async () => {
    const { mediumDesktop, mediumTablet, smallDesktop, smallTablet, mobile } = await useWrapper({
      matches: false
    })
    expect(mediumDesktop).toBeFalsy()
    expect(mediumTablet).toBeFalsy()
    expect(smallDesktop).toBeFalsy()
    expect(smallTablet).toBeFalsy()
    expect(mobile).toBeFalsy()
  })

  it('should return value as true', async () => {
    const { mediumDesktop, mediumTablet, smallDesktop, smallTablet, mobile } = await useWrapper({
      matches: true
    })
    expect(mediumDesktop).toBeTruthy()
    expect(smallDesktop).toBeTruthy()
    expect(mediumTablet).toBeTruthy()
    expect(smallTablet).toBeTruthy()
    expect(mobile).toBeTruthy()
  })

  it('should call addEventListener', async () => {
    const mock = vi.fn()
    await useWrapper({ addEventListener: mock })
    expect(mock).toHaveBeenCalledTimes(5)
  })

  it('should call addListener', async () => {
    const mock = vi.fn()
    await useWrapper({ addListener: mock })
    expect(mock).toHaveBeenCalledTimes(5)
  })

  it('should call addListener', async () => {
    const mock = vi.fn()
    await useWrapper({ addListener: mock })
    expect(mock).toHaveBeenCalledTimes(5)
  })

  it('should call removeEventListener', async () => {
    const mock = vi.fn()
    await useWrapper({ removeEventListener: mock })
    expect(mock).toHaveBeenCalledTimes(5)
  })

  it('should call removeListener', async () => {
    const mock = vi.fn()
    await useWrapper({ removeListener: mock })
    expect(mock).toHaveBeenCalledTimes(5)
  })
})
