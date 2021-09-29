import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import TheEditor from '../../components/TheEditor'

describe('TheEditor', () => {
	it('open modal editor when clicked', async () => {
		const { queryByLabelText, getByTestId, queryByRole } = render(<><TheEditor data-testid="editor"/></>)
		await waitFor(() => fireEvent.click(getByTestId('editor')))
		expect(queryByLabelText("Title")).not.toBeNull()
		expect(queryByLabelText("Content")).not.toBeNull()
		expect(queryByRole("button", {name: "Save"})).not.toBeNull()
	})

	// Saving will be in seperate test
	it('close after saving', async () => {
		const { getByLabelText, getByTestId, getByRole } = render(<TheEditor />)
		await waitFor(() => fireEvent.click(getByTestId('editor')))
		const titleInput = getByLabelText("Title")
		const contentInput = getByLabelText("Content")
		const saveButton = getByRole("button", { name: "Save"})
		await waitFor(() => fireEvent.change(titleInput, { target: {value: "Non empty title"}}))
		await waitFor(() => fireEvent.change(contentInput, { target: {value: "Non empty content"}}))
		await waitFor(() => fireEvent.click(saveButton))
		// Modal should be closed.
		expect(() => getByLabelText("Title")).toThrow()
	})

	it('close by clicking outside', async () => {
		const { getByTestId, queryByLabelText } = render(
			<>
				<TheEditor />
				<button data-testid="outside">Outside</button>
			</>
		)
		await waitFor(() => fireEvent.click(getByTestId("editor")))
		expect(queryByLabelText("Title")).not.toBeNull()
		expect(queryByLabelText("Content")).not.toBeNull()
		await waitFor(() => fireEvent.click(getByTestId("outside")))
		expect(queryByLabelText("Title")).toBeNull()
		expect(queryByLabelText("Content")).toBeNull()

	})
	it.skip('prevent save empty note', async () => {
		const { queryAllByText, getByTestId, getByRole } = render(<TheEditor />)
		await waitFor(() => fireEvent.click(getByTestId('editor')))
		const saveButton = getByRole("button", { name: "Save"})
		await waitFor(() => fireEvent.click(saveButton))
		const allErrorMessages = queryAllByText(/must not be empty/)
		expect(allErrorMessages.length).toEqual(2)
	})
})