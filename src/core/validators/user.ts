import type { LoginUserParams, LoginValidationType } from '../types/UserType'

export const validateLoginUserParams = ({
  email,
  password
}: LoginUserParams): LoginValidationType => {
  const regex = /^\s*$/

  if (!email || regex.test(email))
    return {
      isValid: false,
      error: 'E-mail não pode estar em branco'
    }

  if (!password || regex.test(password))
    return {
      isValid: false,
      error: 'Senha não pode estar em branco'
    }

  return {
    isValid: true
  }
}
