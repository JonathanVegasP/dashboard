export type UserType = {
  isLoggedIn: boolean
}

export type LoginUserParams = {
  email: string
  password: string
}

export type LoginValidationType = {
  isValid: boolean
  error?: string
}
