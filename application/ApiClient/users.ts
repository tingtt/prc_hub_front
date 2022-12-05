import useAspidaSWR from '@aspida/swr'
import { useApi } from '.'
import { NEXT_PUBLIC_API_URL } from '../Env'

export const useUsers = () => {
  const client = useApi(NEXT_PUBLIC_API_URL())
  return useAspidaSWR(client.users, 'get', {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })
}
