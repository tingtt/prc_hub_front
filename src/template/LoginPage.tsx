import { useAsyncFn } from 'react-use'
import { useAuth } from '../../application/ApiClient/auth'
import { useSignIn } from '../../application/Auth/signIn'
import { ButtonPrimary } from '../atoms/ButtonPrimary'
import { Input } from '../atoms/Input'

export const LoginPage = ({
  singInRequestCallback,
}: {
  singInRequestCallback: (success: boolean) => Promise<void>
}) => {
  const { registerEmail, registerPassword, signIn } = useSignIn(
    useAuth().signIn
  )

  const [_, doSignIn] = useAsyncFn(async () => {
    await signIn(singInRequestCallback)
  }, [])

  return (
    <div className='flex flex-col justify-center w-screen h-screen'>
      <form
        method='post'
        className='flex flex-col items-center w-full'
        onSubmit={(e) => {
          // デフォルトのsubmitを無効化
          e.preventDefault()
          // ログインリクエスト
          doSignIn()
        }}
      >
        <div className='w-full max-w-xs'>
          <Input
            type='email'
            label='Email address'
            {...registerEmail}
            ref={registerEmail.ref}
          />
        </div>
        <div className='w-full max-w-xs mt-2'>
          <Input
            type='password'
            label='Password'
            {...registerPassword}
            ref={registerPassword.ref}
          />
        </div>
        <div className='w-full max-w-xs mt-8'>
          <ButtonPrimary type='submit'>Login</ButtonPrimary>
        </div>
      </form>
    </div>
  )
}
