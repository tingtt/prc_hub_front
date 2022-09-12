import { useForm } from 'react-hook-form'
import { useSessionState } from '../../domain/model/Atom/token'
import { useAuth } from '../ApiClient/auth'

// TODO: useFormをgeneric化して抽象化
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

export const useIsSignIn = () => {
  const token = useSessionState()

  // `null`か``(空文字)の場合は未ログイン
  return token != null && token != ''
}
