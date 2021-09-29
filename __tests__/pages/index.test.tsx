import Index from '../../pages/index'
import { render, fireEvent, waitFor } from '@testing-library/react'


describe('Index', () => {
	it('can add note using editor', async () => {
		const { getByLabelText, getByRole, getByTestId, queryByText } = render(
			<>
			   <div id="modal-root"/>
			   <Index />
			</>
		)
		// Open the editor
		await waitFor(() => fireEvent.click(getByTestId('editor')))
		const titleInput = getByLabelText('Title')
		const contentInput = getByLabelText('Content')
		const saveButton = getByRole('button', {name: "Save"})

		// Fill the form 
		await waitFor(() => fireEvent.change(titleInput, { target: {value: "Note Title"}}))
		await waitFor(() => fireEvent.change(contentInput, { target: {value: "Note Content"}}))
		await waitFor(() => fireEvent.click(saveButton))

		expect(queryByText('Note Title')).not.toBeNull()
		expect(queryByText('Note Content')).not.toBeNull()

	})
})