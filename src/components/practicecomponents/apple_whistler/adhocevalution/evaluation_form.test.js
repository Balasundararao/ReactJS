import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import EvalutionFormComponent from './evalution_form.jsx';
import CSVReader from "react-csv-reader";


describe("Evalution Form Component - TestCases", () => {
    let wrapper;
    let wrapper_csv;
    beforeEach( () => {
        wrapper = shallow(<EvalutionFormComponent/>);
    })
    it('Top Heading validation..', () => {
        expect(wrapper.find('h5')).toHaveLength(1);
        expect(wrapper.find('h5').text()).toEqual('New Evaluation..');
    })

    it('Should have form in it ', () => {
        expect(wrapper.find('form')).toHaveLength(1);
        expect(wrapper.find('.form-group')).toHaveLength(5);
    })

    xit(' On Load all the fileds are disabled../Null Values', () => {
        const file = new Blob([fileContents], {type : 'text/csv'});

        const mockOnChange = jest.fn();
        wrapper_csv = shallow(<CSVReader  id="react-cvs-input" cssclassName="react-csv-input" label="Select Valid CSV File" 
         onFileLoaded={mockOnChange} />)

        //  spyOn(wrapper_csv, 'mockOnChange').and.callThrough();
        //  wrapper_csv.find('input').simulate('change', {target: {files: [file]}});

        expect(wrapper_csv.find("input").props().type).toBe('file');
        expect(wrapper_csv.find("input").props().className).toBe('csv-input');
        expect(wrapper_csv.find("input").props().accept).toBe('.csv, text/csv');
        expect(wrapper.find('select').at(0).props().children[0].props.value).toEqual("");
        expect(wrapper.find('select').at(0).props().children[0].props.children).toEqual("Select timestamp key");
        expect(wrapper.find('select').at(1).props().children[0].props.value).toEqual("");
        expect(wrapper.find('select').at(1).props().children[0].props.children).toEqual("Select data key");
        expect(wrapper.find('#evFld3').prop('disabled')).toBe(true);
        expect(wrapper.find('#ev_btn').prop('disabled')).toBe(true);
    })
   
    xit("1. Invalid 1 Column, Missing either TimeStamp/Data Key", () => {
        expect(wrapper.find('form')).toHaveLength(1);
    })

    xit("2. Invalid 2 Column Data Key, Missing TimeStamp", () => {
        expect(wrapper.find('form')).toHaveLength(1);
    })

    xit("3. Invalid 2 Column TimeStamp, Missing Data Key", () => {
        expect(wrapper.find('form')).toHaveLength(1);
    })

    xit("4. Invalid , More than 100 Observations....", () => {
        expect(wrapper.find('form')).toHaveLength(1);
    })

    xit("5. MultiColumn Valid/Invalid timestamp,... ", () => {
        expect(wrapper.find('form')).toHaveLength(1);
    })

    xit("6. Negative Data... ", () => {
        expect(wrapper.find('form')).toHaveLength(1);
    })

    xit("7. Validate Day Data...", () => {
        expect(wrapper.find('form')).toHaveLength(1);
    })

    xit("8. Validate Week Data ...", () => {
        expect(wrapper.find('form')).toHaveLength(1);
    })

    xit("9. Validate Month Data...", () => {
        expect(wrapper.find('form')).toHaveLength(1);
    })

    xit("10. Validate Hour Data ...", () => {
        expect(wrapper.find('form')).toHaveLength(1);
    })

})