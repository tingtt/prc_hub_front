import useSWR from 'swr'
import { useApi } from '.'
import { NEXT_PUBLIC_API_URL } from '../Env'

export const useEvents = () => {
  const client = useApi(NEXT_PUBLIC_API_URL())
  return useSWR('/events', async () => {
    try {
      const res = await client.events.get({
        query: { embed: ['user', 'documents'] },
      })
      return res.body
    } catch {
      return []
    }
  })
}
