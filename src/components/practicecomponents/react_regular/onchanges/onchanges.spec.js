import React from 'react'
import ReactDOM from 'react-dom';
import ChangesComponent from './onchanges';

import {render, screen, cleanup, fireEvent} from '@testing-library/react';

it("Smoke Test, its not breaking anything.....", () => {
    render(<ChangesComponent />)
    const upperInput = screen.getByLabelText(/upper/i)
    const upper = 'stuff'
    fireEvent.change(upperInput, {target: {value: upper}})
    expect(upperInput.value).toEqual(upper.toUpperCase())

})
test('checkboxes (and radios) must use click', () => {
    const handleChange = jest.fn()
    const {container} = render(<input type="checkbox" onChange={handleChange} />)
    const checkbox = container.firstChild
    // for checkboxes, the event that's fired is the click event,
    // and that causes the change event handler to be called.
    // learn more: https://github.com/testing-library/react-testing-library/issues/156
    fireEvent.click(checkbox)
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(checkbox.checked).toBe(true)
  })
  