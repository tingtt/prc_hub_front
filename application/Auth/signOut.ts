import { useAuth } from '../ApiClient/auth'

export const useSignOut = () => {
  const auth = useAuth()

  const signOut = async (callback: () => Promise<void>) => {
    await auth.signOut()
    callback()
  }

  return { signOut }
}
