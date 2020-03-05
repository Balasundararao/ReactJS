import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../../../src/components/practicecomponents/react_regular/button/button';

// testing-library....
import {render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

//snapshot testing....
import renderer from "react-test-renderer";

afterEach(cleanup);
it('Renders with out crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render('<Button>', div);
})

it('Renders correctly', () => {
    const {getByTestId} = render(<Button label="click me please"></Button>)
    expect( getByTestId('button')).toHaveTextContent("click me please");
})

it('Renders correctly', () => {
    const {getByTestId} = render(<Button label="Save"></Button>)
    expect( getByTestId('button')).toHaveTextContent("Save");
})

it('Matches SnapShot ', () => {
    const tree = renderer.create(<Button label="Save"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})


