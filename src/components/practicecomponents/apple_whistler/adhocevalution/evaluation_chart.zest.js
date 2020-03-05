import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()});
import EvaluationChartComponent from './EvaluationChartComponent'

describe("Evalution Chart Component - TestCases", () => {
    let wrapper;
    beforeEach( () => {
        wrapper = shallow(<EvaluationChartComponent/>);
    })
    it('Number of Links validations....', () => {
        expect(wrapper.find('h5')).toHaveLength(1);
        expect(wrapper.find('p')).toHaveLength(1);

        expect(wrapper.find('h5').text()).toBe('How your data looks');
        expect(wrapper.find('p').text()).toBe('evaluation');

        

    })
})
