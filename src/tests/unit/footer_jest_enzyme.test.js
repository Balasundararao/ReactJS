import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
import FooterComponent from '../../components/footer/footercomponent';

describe("FooterComponent", () => {
    let wrapper;
    beforeEach( () => {
        wrapper = shallow(<FooterComponent/>);
    })
    it("Has a classname of footer...", () => {
        expect(wrapper.prop('className')).toBe('footer');
    });
    it("Has a footer tag on footer...", () => {
        expect(wrapper.find('footer')).toHaveLength(1);
    });
    it("Has a div tag on footer...", () => {
        expect(wrapper.find('div')).toHaveLength(1);
    });

    it("Has 2 a tags on footer and texts are ", () => {
        const expected = ['Support', 'File a Radar '];
        expect(wrapper.find('ul >  li  > a')).toHaveLength(2);
        expect(wrapper.find('ul').children().map(child => child.childAt(0).text())).toEqual(expect.arrayContaining(expected));
        expect(wrapper.find('ul').children().map(child => child.childAt(0).prop('href'))).toEqual(expect.arrayContaining(['/compute/support/',
    'rdar://new/problem/component=ireporter&version=Whistler']));
    });
});

