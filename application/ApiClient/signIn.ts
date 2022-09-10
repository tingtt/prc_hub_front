import { useForm } from 'react-hook-form'
import { useAuth } from './auth'

export const useSignIn = () => {
  const auth = useAuth()

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
      const success = await auth.signIn(data.email, data.password)
      callback(success)
    })()
  }

  return {
    registerEmail,
    registerPassword,
    signIn,
  }
}
