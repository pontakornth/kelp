import { tw } from 'twind'

type Note = {
	title: string;
	content: string;
}

type NoteCardProps = {
	note: Note;
}

/** Card component for displaying note.
 * 
 * TODO: Make it can actually display something
 */
const NoteCard = ({ note }: NoteCardProps) => {
	return (
		<div className={tw`p-4 border-black rounded`}>
			<h2>{note.title}</h2>
			<div>
				{note.content}
			</div>
		</div>
	)
}