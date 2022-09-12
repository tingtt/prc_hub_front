import type { NextPage } from 'next'
import { useIsSignIn } from '../../application/Auth/signIn'
import { TopPage } from '../template/TopPage'

const Home: NextPage = () => {
  const isLoggedIn = useIsSignIn()

  return <TopPage comment='アプリを作りたいです。' isLoggedIn={isLoggedIn} />
}

export default Home
