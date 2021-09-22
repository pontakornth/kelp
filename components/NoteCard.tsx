import { tw } from 'twind'
import type Note from '../@types/note'

// TODO: Move into the appropriate directory

type NoteCardProps = {
	note: Note;
}

/** Card component for displaying note.
 * 
 * TODO: Make it can actually display something
 */
const NoteCard = ({ note }: NoteCardProps) => {
	return (
		<div className={tw`p-4 border border-black rounded`}>
			<h2 className={tw`font-bold text-lg`}>{note.title}</h2>
			<div>
				{note.content}
			</div>
		</div>
	)
}

export default NoteCard