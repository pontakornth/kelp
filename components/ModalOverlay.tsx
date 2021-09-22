import { tw } from "twind"
import useEditor from "../stores/useEditor"

const ModalOverlay: React.FC = () => {
	const isOpen = useEditor(state => state.isOpen)
	return (
		<>
		{isOpen && 
			<div className={tw`z-40 absolute top-0 bottom-0 left-0 right-0 bg-gray-400 bg-opacity-50`}>
			</div>
		}
		</>
	)
}

export default ModalOverlay