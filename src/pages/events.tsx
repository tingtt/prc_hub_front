import type { NextPage } from 'next'
import { getEvents } from '../../application/ApiClient/getEvents'
import { EventListPage } from '../template/EventListPage'

const Events: NextPage = () => {
  const { data: events } = getEvents()()
  return <EventListPage events={events ?? []} />
}

export default Events
