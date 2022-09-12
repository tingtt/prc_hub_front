import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useEvents } from '../../../application/ApiClient/events'
import { getPermissions } from '../../../application/Auth/permissions'
import { useIsSignedIn } from '../../../application/Auth/signedIn'
import { EventListPage } from '../../template/EventListPage'

const Events: NextPage = () => {
  const { data: events } = useEvents()
  const isLoggedIn = useIsSignedIn()
  const [permissions, setPermissions] = useState<{
    isAblePostingEvents: boolean
    isAbleManaging: boolean
  }>({ isAbleManaging: false, isAblePostingEvents: false })

  useEffect(() => {
    if (isLoggedIn) {
      setPermissions(getPermissions())
    } else {
      setPermissions({ isAbleManaging: false, isAblePostingEvents: false })
    }
  }, [isLoggedIn])

  return (
    <EventListPage
      suppressHydrationWarning
      events={events ?? []}
      isLoggedIn={isLoggedIn}
      isAblePostingEvents={permissions.isAblePostingEvents}
      isAbleManaging={permissions.isAbleManaging}
    />
  )
}

export default Events
