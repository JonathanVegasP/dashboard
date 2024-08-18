import { describe, expect, it } from 'vitest'
import { validateLoginUserParams } from '../user'

describe('user validators', () => {
  it('should pass', () => {
    expect(validateLoginUserParams({ email: 'email', password: 'password' })).toMatchObject({
      isValid: true
    })
  })

  it('should validate email', () => {
    expect(validateLoginUserParams({ email: '', password: 'password' })).toMatchObject({
      isValid: false
    })

    expect(validateLoginUserParams({ email: '  ', password: 'password' })).toMatchObject({
      isValid: false
    })
  })
  it('should validate password', () => {
    expect(validateLoginUserParams({ email: 'email', password: '' })).toMatchObject({
      isValid: false
    })

    expect(validateLoginUserParams({ email: 'email', password: '  ' })).toMatchObject({
      isValid: false
    })
  })
})
