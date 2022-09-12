import type { NextPage } from 'next'
import { useIsSignedIn } from '../../application/Auth/signIn'
import { TopPage } from '../template/TopPage'

const Home: NextPage = () => {
  const isLoggedIn = useIsSignedIn()

  return <TopPage comment='アプリを作りたいです。' isLoggedIn={isLoggedIn} />
}

export default Home
