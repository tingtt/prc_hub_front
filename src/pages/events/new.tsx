import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getPermissions } from '../../../application/Auth/permissions'
import { useIsSignedIn } from '../../../application/Auth/signedIn'
import { CreateEventPage } from '../../template/CreateEventPage'

const New: NextPage = () => {
  const [init, setInit] = useState(false)

  const router = useRouter()
  const isLoggedIn = useIsSignedIn()

  useEffect(() => {
    if (init) {
      if (!isLoggedIn || !getPermissions().isAblePostingEvents) {
        router.replace('/')
      }
    }
    setInit(true)
  }, [init, isLoggedIn, router])

  return <CreateEventPage />
}

export default New
