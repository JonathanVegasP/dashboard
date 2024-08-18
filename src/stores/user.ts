import type { LoginUserParams, UserType } from '@/core/types/UserType'
import { validateLoginUserParams } from '@/core/validators/user'
import { defineStore } from 'pinia'
import { computed, shallowRef } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = shallowRef<UserType>({ isLoggedIn: false })

  const isLoggedIn = computed(() => user.value.isLoggedIn)

  const login = (loginUserParams: LoginUserParams) => {
    const isValid = validateLoginUserParams(loginUserParams)
    if (isValid.isValid) user.value = { isLoggedIn: true }
    return isValid
  }

  return { user, isLoggedIn, login }
})
