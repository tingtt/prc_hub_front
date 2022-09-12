import { useForm } from 'react-hook-form'

export const useSignIn = (
  signInRequest: (email: string, password: string) => Promise<boolean>
) => {
  type LoginForm = {
    email: string
    password: string
  }

  const { handleSubmit, register } = useForm<LoginForm>()

  const registerEmail = {
    ...register('email', {
      required: 'Required',
    }),
  }
  const registerPassword = {
    ...register('password', {
      required: 'Required',
    }),
  }

  const signIn = (callback: (success: boolean) => Promise<void>) => {
    return handleSubmit(async (data) => {
      const success = await signInRequest(data.email, data.password)
      callback(success)
    })()
  }

  return {
    registerEmail,
    registerPassword,
    signIn,
  }
}
