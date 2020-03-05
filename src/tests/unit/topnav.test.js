import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { NavLink } from 'react-router-dom';

configure({adapter: new Adapter()});
//import TopNavComponent from '../../../src/components/';

xdescribe("Top Nav Component - TestCases", () => {
    let wrapper;
    beforeEach( () => {
        wrapper = shallow(<TopNavComponent/>);
    })
    xit('Number of Links validations....', () => {
        expect(wrapper.find('ul')).toHaveLength(1);
        expect(wrapper.find('ul').prop('className')).toBe('topnav');
        expect(wrapper.find('ul li')).toHaveLength(4);
        expect(wrapper.find(NavLink)).toHaveLength(4);
    })

    xit('Link Text/to validations....', () => {
        // texts
        expect( wrapper.find(NavLink).at(0).children().text()).toEqual('Datasets');
        expect( wrapper.find(NavLink).at(1).children().text()).toEqual('On-boarding');
        expect( wrapper.find(NavLink).at(2).children().text()).toEqual('Workspace');
        expect( wrapper.find(NavLink).at(3).children().text()).toEqual('Support');

        // links
        expect(wrapper.find(NavLink).at(0).prop('to')).toEqual('/view-anomaly-groups');
        expect(wrapper.find(NavLink).at(1).prop('to')).toEqual('/evaluation/:id');
        expect(wrapper.find(NavLink).at(2).prop('to')).toEqual('/workspace/850406203');
        expect(wrapper.find(NavLink).at(3).prop('to')).toEqual('/compute/support');
    })
})
