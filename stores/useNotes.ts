import type Note from "../@types/note"
import create from 'zustand'
import { nanoid } from 'nanoid'

type NoteStore = {
	notes: Note[], 
	currentNoteIndex: number | null,
	addNote: (note: Omit<Note, 'id'>) => void
	// TODO: Add delete and edit methods
}

const useNotes = create<NoteStore>((set, get) => ({
	notes: [] as Note[],
	currentNoteIndex: null,
	addNote: (note: Omit<Note, 'id'>) => set(state => ({notes: [...state.notes, {...note, id: nanoid()}]}))
	// TODO: Add delete and edit methods

}))

export default useNotes