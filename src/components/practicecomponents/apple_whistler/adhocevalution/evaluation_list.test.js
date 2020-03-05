import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
//import EvalutionListComponent from '../../../app/components/whistlercomponents/adhocevalution/evalution_list.jsx';
import EvalutionListComponent from './evalution_list.jsx';

describe("Evalution List Component - TestCases", () => {
    let wrapper;
    beforeEach( () => {
        wrapper = shallow(<EvalutionListComponent/>);
    })
    it('Top Heading validation..', () => {
        expect(wrapper.find('h5')).toHaveLength(1);
        expect(wrapper.find('h5').text()).toEqual('Evalution List ');
    })
    it('Table validation..', () => {
        expect(wrapper.find('table')).toHaveLength(1);
        expect(wrapper.find('table thead td')).toHaveLength(3);
    })
})