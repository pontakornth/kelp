import create from 'zustand'

type EditorStore = {
	isOpen: boolean,
	open: () => void,
	close: () => void,
	toggle: () => void,
}

const useEditor = create<EditorStore>((set, get) => ({
	isOpen: false,
	open: () => set(_ => ({isOpen: true})),
	close:  () => set(_ => ({isOpen: true})),
	toggle: () => set(state => ({isOpen: !state.isOpen}))
}))

export default useEditor;