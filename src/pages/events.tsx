import type { NextPage } from 'next'
import { useEvents } from '../../application/ApiClient/events'
import { EventListPage } from '../template/EventListPage'

const Events: NextPage = () => {
  const { data: events } = useEvents()
  return <EventListPage events={events ?? []} />
}

export default Events
