import { tw } from 'twind'


/** The note editor. It pops up into a modal when clicked. 
 * 
 * TODO: Make it in a modal.
 */
const TheEditor = () => {
	return (
		<div className={tw`rounded p-2 text-gray-400 border border-gray-400`}>
			Enter something...
		</div>
	)
}

export default TheEditor;