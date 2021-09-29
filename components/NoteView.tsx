import { tw } from 'twind'
import type Note from '../@types/note'
import NoteCard from './NoteCard'

type NoteViewProps = {
	notes: Note[]
}

const NoteView: React.FC<NoteViewProps> = ({ notes }) => {
	if (!notes.length) {
		return (
			<p className={tw`text-gray-500`}>There is no note.</p>
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