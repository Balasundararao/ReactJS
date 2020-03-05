import React from 'react';
import HeaderComponent from '../../../src/components/header/headercomponent';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe("HeaderComponent", () => {
    let wrapper;
    beforeEach( () => {
        wrapper = shallow(<HeaderComponent className="header" />)
    })
    it('Home link  text/points to.. View Anamoly Groups ', () => {
        expect(wrapper.find('ul >  li')).toHaveLength(7);
       //expect(wrapper.find('.navbar-brand').text()).toEqual(' Whistler');
       //expect(wrapper.find('.navbar-brand').prop('href')).toEqual('/view-anomaly-groups');
    })
    xit('File a Radar text and Link validations ', () => {
        expect(wrapper.find('.header_radar').text()).toEqual('File a Radar');
        expect(wrapper.find('.header_radar').prop('href')).toEqual('rdar://new/problem/component=ireporter&version=Whistler');
     })
});