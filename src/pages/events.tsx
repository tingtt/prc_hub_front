import type { NextPage } from 'next'
import { useEvents } from '../../application/ApiClient/events'
import { useIsSignIn } from '../../application/Auth/signIn'
import { EventListPage } from '../template/EventListPage'

const Events: NextPage = () => {
  const { data: events } = useEvents()
  const isLoggedIn = useIsSignIn()

  return <EventListPage events={events ?? []} isLoggedIn={isLoggedIn} />
}

export default Events
