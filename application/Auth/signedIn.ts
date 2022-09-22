import { useTokenHydration } from '../../domain/model/Atom/token'

export const useIsSignedIn = () => {
  const { token } = useTokenHydration()

  // `null`か``(空文字)の場合は未ログイン
  return token != null && token != ''
}
