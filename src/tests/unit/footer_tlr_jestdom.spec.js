import React from 'react';
import ReactDOM from 'react-dom';
import FooterComponent from '../../components/footer/footercomponent';

// testing library react....
import {render, cleanup} from '@testing-library/react';

//snapshot testing....
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Smoke Test , Renders with out crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render('<Button>', div);
})

it('Matches SnapShot ', () => {
    const tree = renderer.create(<FooterComponent/>).toJSON();
    expect(tree).toMatchSnapshot();
})
