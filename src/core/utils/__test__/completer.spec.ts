import { describe, expect, it } from 'vitest'
import { completer } from '../completer'

describe('completer', () => {
  it('should complete', async () => {
    const c = completer()
    c.completer(null)

    await expect(c.promise).resolves.toBeNull()
  })

  it('should reject', async () => {
    const c = completer()
    c.reject(null)

    await expect(c.promise).rejects.toBeNull()
  })

  it('should do nothing', async () => {
    const c = completer()
    completer().promise.then(c.completer)

    setTimeout(() => {
      c.reject('timeout')
    }, 250)

    await expect(c.promise).rejects.toThrowError()
  })
})
