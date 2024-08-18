import { describe, expect, it, vi } from 'vitest'
import { fallback } from '../fallback'

describe('fallback', () => {
  it('should call then function', () => {
    const mock = vi.fn()
    fallback(mock).or().bind(vi).then().else()
    expect(mock).toHaveBeenCalledOnce()
  })

  it('should call else function', () => {
    const mock = vi.fn()
    fallback().or(mock).bind(vi).then().else()
    expect(mock).toHaveBeenCalledOnce()
  })

  it('should do nothing', () => {
    expect(() => fallback().or().bind(null).then().else()).not.toThrowError()
  })
})
