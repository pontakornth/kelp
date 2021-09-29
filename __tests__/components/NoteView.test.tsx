import NoteView from '../../components/NoteView'
import { render } from '@testing-library/react'
import type Note from '../../@types/note'

describe('NoteView', () => {
	it('can render notes from prop', () => {
		const notes: Note[] = [
			{
				id: '1234',
				title: 'Title',
				content: 'Content'
			},
			{
				id: '1222',
				title: 'Title x',
				content: 'Another content'
			}
		]
		const { queryByText } = render(<NoteView notes={notes} />)
		notes.forEach(note => {
			const noteCard = queryByText(note.title)
			expect(noteCard).not.toBeNull()
		});
	})
	it('has a message when there is no note', () => {
		const { queryByText } = render(<div><NoteView notes={[]} /></div>) 
		expect(queryByText('There is no note.')).not.toBeNull()
	})
})