import useAspidaSWR from '@aspida/swr'
import { useApi } from '.'
import { NEXT_PUBLIC_API_URL } from '../Env'

export const useEvents = () => {
  const client = useApi(NEXT_PUBLIC_API_URL())
  return useAspidaSWR(client.events, 'get', {
    query: { embed: ['user', 'documents'] },
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })
}
