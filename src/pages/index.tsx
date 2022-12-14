import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { getPermissions } from '../../application/Auth/permissions'
import { useIsSignedIn } from '../../application/Auth/signedIn'
import { TopPage } from '../template/TopPage'

const Home: NextPage = () => {
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
    <TopPage
      suppressHydrationWarning
      comment='アプリを作りたいです。'
      isLoggedIn={isLoggedIn}
      isAbleManaging={permissions.isAbleManaging}
    />
  )
}

export default Home
