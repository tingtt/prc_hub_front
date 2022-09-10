import api from '../../domain/model/ApiClient/$api'
import aspida from '@aspida/fetch'
import { useSessionState } from '../../domain/model/Atom/token'

export const useApi = (baseURL: string) => {
  const token = useSessionState()

  let headers: HeadersInit | undefined
  if (token != null) {
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`,
    }
  }

  return api(
    aspida(fetch, {
      baseURL,
      headers,
    })
  )
}
