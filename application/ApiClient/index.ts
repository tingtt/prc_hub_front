import api from '../../domain/model/ApiClient/$api'
import aspida from '@aspida/fetch'

export const newClient = (baseURL: string) => {
  return api(
    aspida(fetch, {
      baseURL,
    })
  )
}
