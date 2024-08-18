import { shallowMount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { useUserStore } from '../user'
import { createTestingPinia } from '@pinia/testing'

describe('useUserStore', () => {
  const useWrapper = (isLoggedIn: boolean) => {
    shallowMount(
      {
        template: '<div></div>',
        setup() {
          useUserStore()
        }
      },
      {
        global: {
          plugins: [
            createTestingPinia({
              createSpy: vi.fn,
              stubActions: false,
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
      }
    )
  }

  it('should return initial values', () => {
    useWrapper(false)
    const store = useUserStore()
    expect(store.user).toMatchObject({
      isLoggedIn: false
    })
    expect(store.isLoggedIn).toBeFalsy()
  })

  it('should login user', () => {
    useWrapper(false)
    const store = useUserStore()
    expect(store.login({ email: 'email', password: 'password' })).toMatchObject({
      isValid: true
    })
    expect(store.user).toMatchObject({
      isLoggedIn: true
    })
    expect(store.isLoggedIn).toBeTruthy()
  })

  it('should not login user with invalid email', () => {
    useWrapper(false)
    const store = useUserStore()
    expect(store.login({ email: '', password: 'password' })).toMatchObject({
      isValid: false,
      error: 'E-mail não pode estar em branco'
    })
    expect(store.user).toMatchObject({
      isLoggedIn: false
    })
    expect(store.isLoggedIn).toBeFalsy()
  })

  it('should not login user with invalid password', () => {
    useWrapper(false)
    const store = useUserStore()
    expect(store.login({ email: 'email', password: '' })).toMatchObject({
      isValid: false,
      error: 'Senha não pode estar em branco'
    })
    expect(store.user).toMatchObject({
      isLoggedIn: false
    })
    expect(store.isLoggedIn).toBeFalsy()
  })
})
