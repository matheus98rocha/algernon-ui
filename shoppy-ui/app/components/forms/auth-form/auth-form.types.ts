const TYPE_AUTH_FORM = {
  SIGNUP: "signup",
  LOGIN: "login"
} as const

type ObjectValues<T> = T[keyof T];

type TypeAuthForm = ObjectValues<typeof TYPE_AUTH_FORM>

type AuthFormPops = {
  type: TypeAuthForm
}