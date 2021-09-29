import React, { MouseEventHandler, RefObject, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom'
import { tw, apply } from 'twind'
import useEditor from '../stores/useEditor';
import useNotes from '../stores/useNotes';
import ModalOverlay from './ModalOverlay';


const useClickOutside = (ref: RefObject<HTMLFormElement>, callback: (e: MouseEvent) => void ) => {
  const handleClick =  (e: MouseEvent) => {
	// It is currently a work around. I don't know if it can be solved using proper TypeScript practice.
    if (ref.current && !ref.current.contains(e.target as unknown as Node)) {
      callback(e);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClick as any);
    return () => {
      document.removeEventListener('click', handleClick as any);
    };
  });
};
/** 
 * The note editor. It pops up into a modal when clicked. 
 * TODO: Make it in a modal.
 */
const TheEditor: React.FC = () => {
	const open = useEditor(state => state.open)
	const isOpen = useEditor(state => state.isOpen)
	return (
		<>
		<div 
		    data-testid="editor"
			onClick={open} 
			className={tw`rounded p-2 text-gray-400 border border-gray-400 cursor-text`}>
			Enter something...
		</div>
		{isOpen && <TheModalEditor />}
		</>
	)
}



// Styling for form component
const labelStyle = apply`font-bold text-md`

const inputStyle = apply`border rounded p-2`


/**
 * The actual editor which is a modal.
 * 
 * TODO: Make it can actually edit note.
 */
const TheModalEditor = () => {
	const isOpen = useEditor(state => state.isOpen)
	const close = useEditor(state => state.close)
	const [{titleError, contentError}, setError] = useState({titleError: '', contentError: ''})
	const [title, setTitle] = useState("")
	const [content, setContent] = useState("")
	const addNote = useNotes(state => state.addNote)
	const clickRef = useRef<HTMLFormElement>(null);
	useClickOutside(clickRef, () => { close() })

	const handleSave = (e: React.MouseEvent) => {
		// TODO: Add and verification saving logic
		e.preventDefault()
		
		// if (!title.length) setError(state => ({...state, titleError: "Title must not be empty."}))
		// if (!content.length) setError(state => ({...state, contentError: "Content must not be empty."}))
		if (!(titleError.length & contentError.length)) {
			addNote({ title, content })
			close()
		}
	}

	// Note: I don't know if it reduces performance or not.
	// It may cause re-render. I don't know.
	const handleEdit = (field: 'title' | 'content') => {
		return function(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
			const value = e.target.value
			switch (field) {
				case 'title':
					setTitle(_ => value)
					break;
				case 'content':
					setContent(_ => value)
					break;
			}
		}
	}

	// Render only when using browser
	if (isOpen && typeof window === 'object') {
		return ReactDOM.createPortal(
			<ModalOverlay>
				<form 
				    ref={clickRef} 
					className={tw`bg-white p-4 rounded mt-8 mb-auto w(3/4 md:1/2) mx-auto flex flex-col gap-y-2`}>
					<label className={tw(labelStyle)} htmlFor="title">Title</label>
					<input onChange={handleEdit('title')} value={title} className={tw([[inputStyle], 'text-lg'])} type="text" id="title" placeholder="Title" />
					<label className={tw(labelStyle)} htmlFor="content">Content</label>
					<textarea onChange={handleEdit('content')} value={content} className={tw(inputStyle)} id="content" placeholder="Content..." />
					<button className={tw`bg-green(500 hover:green-400) text-white p-2 mt-4 rounded`} onClick={handleSave} name="save">Save</button>
				</form>	
			</ModalOverlay>
		, document.getElementById('modal-root')!)
	}
	return <></>
}

export default TheEditor;