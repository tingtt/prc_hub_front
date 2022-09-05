import useSWR from 'swr'
import { newClient } from '.'
import { NEXT_PUBLIC_API_URL } from '../Env'

export const getEvents = () => {
  const client = newClient(NEXT_PUBLIC_API_URL())
  return () =>
    useSWR('/events', async () => {
      try {
        const res = await client.events.get()
        return res.body
      } catch {
        return []
      }
    })
}
