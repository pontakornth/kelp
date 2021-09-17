import type { NextPage } from 'next'
import { tw } from 'twind'
import TheEditor from '../components/TheEditor'

const Home: NextPage = () => {
  return (
    <div className={tw`m-auto w(3/4 md:1/2) py-8`}>
      <TheEditor />
    </div>
  )
}

export default Home
