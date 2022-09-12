import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSignOut } from '../../application/Auth/signOut'

const Logout: NextPage = () => {
  const router = useRouter()
  const { signOut } = useSignOut()

  useEffect(() => {
    // トークンをリセットし、トップページへ遷移
    signOut(async () => {
      router.replace('/')
    })
  }, [router, signOut])

  return null
}

export default Logout
