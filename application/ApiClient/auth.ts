import { useApi } from '.'
import { useSetToken } from '../../domain/model/Atom/token'
import { NEXT_PUBLIC_API_URL } from '../Env'

// TODO: sign up
export const useAuth = () => {
  const client = useApi(NEXT_PUBLIC_API_URL())
  const { setToken } = useSetToken()

  const signIn = async (email: string, password: string) => {
    return await client.users.sign_in
      .$post({ body: { email, password } })
      .then(async (res) => {
        await setToken(res.token)
        return true
      })
      .finally(() => {
        return false
      })
  }

  const signOut = async () => {
    await setToken('')
  }

  return { signIn, signOut }
}
