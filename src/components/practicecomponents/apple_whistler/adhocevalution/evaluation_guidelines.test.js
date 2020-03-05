import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()});
import EvaluationGuidelineComponent from './EvaluationGuidelineComponent'

describe("Top Nav Component - TestCases", () => {
    let wrapper;
    beforeEach( () => {
        wrapper = shallow(<EvaluationGuidelineComponent/>);
    })
    it('Number of Links validations....', () => {
        const expected = /Hello world!/;
        const str = "1. Has no more than 100 observations2. Minimum number of observation depends on the frequency of dataset[H] Hourly = No less than 48 observations[D] Daily = No less than 14 observations[W] Weekly = No less than 8 observations[M] Monthly = No less than 24 observations3. Should have atleast 2 columns.4. Should have atleast 1 date column with format YYYY-MM-DD [HH:MI:SS]5. Should have atleast 1 data column with numeric data only, no special characters or strings.";
        expect(wrapper.find('h5')).toHaveLength(1);
        expect(wrapper.find('p')).toHaveLength(1);

        expect(wrapper.find('h5').text()).toBe('Please make sure your file:');
        expect(wrapper.find('p i').text()).toEqual(str);
    })
})
