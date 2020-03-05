import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

import AdHocEvaluationComponent from './index.jsx';
import EvalutionFormComponent from './evalution_form.jsx';
import EvalutionListComponent from './evalution_list.jsx';
import EvaluationChartComponent from './EvaluationChartComponent.jsx';
import EvaluationGuidelineComponent from './EvaluationGuidelineComponent.jsx'

describe("Evalution Component - TestCases", () => {
    let wrapper;
    
    const showFormFn = jest.fn(); // function 
    const showFormSpy = jest.spyOn(React, 'useState');
    showFormSpy.mockImplementation((init) => [init, showFormFn]);
    //const event = Object.assign(jest.fn(), {preventDefault: () => {}})

    beforeEach( () => {
        wrapper = shallow(<AdHocEvaluationComponent/>);
    })

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Top Heading and paragraph link..', () => {
        expect(wrapper.find('h1')).toHaveLength(1);
        expect(wrapper.find('p')).toHaveLength(1);

        expect(wrapper.find('h1').text()).toBe('Evaluation');
        expect(wrapper.find('p').text('')).toBe('Please Click on the link ( link ) to add a new evaluation..');
        
        //default  childs are empty...
        expect(wrapper.find('.container_form').children()).toHaveLength(0);
        expect(wrapper.find('.container_guideline').children()).toHaveLength(0);
    })

    describe('Click on the link to show the form....', () => {
        it('Click on the Link to show the form and guidelines....', () => {
         // const fakeEvent = { preventDefault: () => console.log('preventDefault') };
         // wrapper.find('#show_form').simulate('click', fakeEvent);
          //expect(wrapper.find('.container_form').children()).not.toHaveLength({});
          //expect(wrapper.find('.container_guideline').children()).not.toHaveLength(0);
        });
    });
})
