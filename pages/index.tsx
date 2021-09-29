import type { NextPage } from 'next'
import type Note from '../@types/note'
import { tw } from 'twind'
import TheEditor from '../components/TheEditor'
import NoteCard from '../components/NoteCard'
import NoteView from '../components/NoteView'

const Home: NextPage = () => {
  const notes: Note[] = [
    {
      id: '2345',
      title: 'Hello, world',
      content: 'Hello, world.',
    },
    {
      id: '2306j36',
      title: 'hello, world',
      content: 'HEllo',
    }
  ]
  return (
    <div className={tw`m-auto w(3/4 md:1/2) py-8`}>
      <TheEditor />
      <NoteView notes={notes} />
    </div>
  )
}

export default Home
