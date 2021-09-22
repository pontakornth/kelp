import ReactDOM from 'react-dom'
import { tw } from 'twind'
import useEditor from '../stores/useEditor';
import ModalOverlay from './ModalOverlay';


/** 
 * The note editor. It pops up into a modal when clicked. 
 * TODO: Make it in a modal.
 */
const TheEditor: React.FC = () => {
	const open = useEditor(state => state.open)
	return (
		<>
		<div onClick={open} className={tw`rounded p-2 text-gray-400 border border-gray-400 cursor-text`}>
			Enter something...
		</div>
		<TheModalEditor />
		</>
	)
}
/**
 * The actual editor which is a modal.
 */
const TheModalEditor = () => {
	const isOpen = useEditor(state => state.isOpen)
	const close = useEditor(state => state.close)

	// Render only when using browser
	if (isOpen && typeof window === 'object') {
		return ReactDOM.createPortal(
			<ModalOverlay>
				<div className={tw`bg-white p-4 rounded`}>
					st
				</div>	
			</ModalOverlay>
		, document.getElementById('modal-root')!)
	}
	return <></>
}

export default TheEditor;