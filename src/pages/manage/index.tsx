import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getPermissions } from '../../../application/Auth/permissions'
import { useIsSignedIn } from '../../../application/Auth/signedIn'

const Manage: NextPage = () => {
  const [init, setInit] = useState(false)

  const router = useRouter()
  const isLoggedIn = useIsSignedIn()

  useEffect(() => {
    if (init) {
      if (router.pathname == '/manage') {
        router.push('/manage/user')
      }
      if (!isLoggedIn || !getPermissions().isAbleManaging) {
        router.replace('/')
      }
    }
    setInit(true)
  }, [init, isLoggedIn, router])

  return null
}

export default Manage
