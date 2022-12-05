import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useEvents } from '../../../application/ApiClient/events'
import { useUsers } from '../../../application/ApiClient/users'
import {
  getPermissions,
  Permission,
} from '../../../application/Auth/permissions'
import { useIsSignedIn } from '../../../application/Auth/signedIn'
import { User } from '../../../domain/model/ApiClient/@types'
import { ManagePage } from '../../template/ManagePage'

const Manage: NextPage = () => {
  const [init, setInit] = useState(false)

  const router = useRouter()
  const { scope } = router.query
  const isLoggedIn = useIsSignedIn()
  const [permissions, setPermissions] = useState<Permission>({
    isAbleManaging: false,
    isAblePostingEvents: false,
    isAdmin: false,
  })
  const me: User = {
    id: 0,
    name: '',
    email: '',
    post_event_availabled: permissions.isAblePostingEvents,
    manage: permissions.isAbleManaging,
    admin: permissions.isAdmin,
  }

  useEffect(() => {
    if (init) {
      const newPermissions = getPermissions()
      if (!isLoggedIn || !newPermissions.isAbleManaging) {
        router.replace('/')
      }
      setPermissions(newPermissions)
      if (scope != 'user' && scope != 'event') {
        router.replace('/manage/user')
      }
    }
    setInit(true)
  }, [init, isLoggedIn, router, scope])

  const { data: eventsData } = useEvents()
  const { data: usersData } = useUsers()

  const events = eventsData?.status == 200 ? eventsData?.body : []
  const users = usersData?.status == 200 ? usersData?.body : []
  const loadingEvents = eventsData?.status == undefined
  const loadingUsers = usersData?.status == undefined

  return (
    <ManagePage
      scope={scope == 'user' || scope == 'event' ? scope : 'user'}
      users={users ?? []}
      events={events ?? []}
      me={me}
      loadingEvents={loadingEvents}
      loadingUsers={loadingUsers}
    />
  )
}

export default Manage
