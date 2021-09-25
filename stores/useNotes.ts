import type Note from "../@types/note"
import create from 'zustand'

type NoteStore = {
	notes: Note[], 
	currentNoteIndex: number | null,
	addNote: (note: Note) => void
	// TODO: Add delete and edit methods
}

const useNotes = create<NoteStore>((set, get) => ({
	notes: [] as Note[],
	currentNoteIndex: null,
	addNote: (note: Note) => set(state => ({notes: [...state.notes, note]}))
	// TODO: Add delete and edit methods

}))

export default useNotes