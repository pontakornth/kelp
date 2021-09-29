import { tw } from 'twind'
import type Note from '../@types/note'
import NoteCard from './NoteCard'

type NoteViewProps = {
	notes: Note[]
}

/** NoteView to render all notes card */
const NoteView: React.FC<NoteViewProps> = ({ notes }) => {
	if (!notes.length) {
		return (
				<p className={tw`text-center text-gray-400 text-lg mt-8 m-auto`}>There is no note.</p>
		)
	}
	return (
		<div className={tw`py-8 gap-5 grid grid-cols(1 md:4)`}>
			{notes.map(note => (
				<NoteCard note={note}  key={note.id}/>
			))}
		</div>
	)
}

export default NoteView