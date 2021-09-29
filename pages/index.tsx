import type { NextPage } from 'next'
import type Note from '../@types/note'
import { tw } from 'twind'
import TheEditor from '../components/TheEditor'
import NoteView from '../components/NoteView'
import useNotes from '../stores/useNotes'

const Home: NextPage = () => {
  const notes = useNotes(state => state.notes)
  return (
    <div className={tw`m-auto w(3/4 md:1/2) py-8`}>
      <TheEditor />
      <NoteView notes={notes} />
    </div>
  )
}

export default Home
