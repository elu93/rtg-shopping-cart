import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Cart from '../src/pages/cart';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

describe("Cart Component", () => {
    test("renders", () => {
        const wrapper = shallow(<Cart />);

        expect(wrapper.exists()).toBe(true);
    });
});