import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from './Counter';

Enzyme.configure({adapter: new Adapter()})

describe('Test cases',()=>{
    it('should render button', ()=>{
        const wrapper=shallow(<Counter></Counter>)
        const buttonElement=wrapper.find('#ClickMe');
        expect(buttonElement).toHaveLength(2);
    })  
    it('should update state on input change', () => {
        const wrapper=shallow(<Counter></Counter>)
        const newInputValue = 'arpi';
        wrapper.find('input').simulate('change', { target: { value: newInputValue } });
        expect(wrapper.find('h1').text()).toEqual(newInputValue);
    });
})