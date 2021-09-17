import type { NextPage } from 'next'
import type { Note } from '../components/NoteCard'
import { tw } from 'twind'
import TheEditor from '../components/TheEditor'
import NoteCard from '../components/NoteCard'

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
      <div className={tw`py-8 gap-5 grid grid-cols(1 md:4)`}>
        {notes.map(note => (
          <NoteCard note={note} key={note.id} />
        ))}
      </div>
    </div>
  )
}

export default Home
