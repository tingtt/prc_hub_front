import api from '../../domain/model/ApiClient/$api'
import aspida from '@aspida/fetch'
import { useToken } from '../../domain/model/Atom/token'

export const useApi = (baseURL: string) => {
  const { token } = useToken()

  let headers: HeadersInit | undefined
  if (token != null || token == '') {
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
