import { useState, useEffect } from 'react'
import { useApi } from '.'
import { Event } from '../../domain/model/ApiClient/@types'
import { NEXT_PUBLIC_API_URL } from '../Env'

export const useEvents = () => {
  const [initial, setInitial] = useState(true)
  const [events, setEvents] = useState<Event[]>([])
  const api = useApi(NEXT_PUBLIC_API_URL())
  useEffect(() => {
    if (initial) {
      api.events
        .get({
          query: { embed: ['user', 'documents'] },
        })
        .then((res) => {
          if (Array.isArray(res.body)) {
            setEvents(res.body ?? [])
            setInitial(false)
          }
        })
    }
  })

  return { events }
}
