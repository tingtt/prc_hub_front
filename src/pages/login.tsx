import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { LoginPage } from '../template/LoginPage'

const Login: NextPage = () => {
  const router = useRouter()

  return (
    <LoginPage
      singInRequestCallback={async (success) => {
        if (success) {
          await router.push('/events')
        }
      }}
    />
  )
}

export default Login
