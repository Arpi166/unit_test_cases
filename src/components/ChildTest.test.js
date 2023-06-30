import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ChildTest from './ChildTest';
import { render, fireEvent } from '@testing-library/react';

Enzyme.configure({adapter: new Adapter()})  

describe('Test cases',()=>{
    it('should render button', ()=>{
        const wrapper=shallow(<ChildTest></ChildTest>)
        const buttonElement=wrapper.find('#increment');
        expect(buttonElement).toHaveLength(1);
    });

    it('should call increment from props with item on click of increment button', () => {
        const wrapper=shallow(<ChildTest/>)
        let prevProps = {
            add: jest.fn()
        };
        let simulated_output = 1;

        wrapper.setProps(prevProps);
        wrapper.find('#increment').simulate('click');

        expect(prevProps.add).toHaveBeenCalledTimes(
            simulated_output
        );
    });

    it('checking state update',()=>{
        jest.spyOn(React, 'useState').mockImplementation((value)=>[value, jest.fn()]);

        const wrapper=shallow(<ChildTest></ChildTest>)
        const button=wrapper.find('#para2');

        expect(wrapper.find('#para1').text()).toEqual('Updated Value: true');
        button.simulate('click');
        expect(wrapper.find('#para1').text()).toEqual('Updated Value: false')
        React.useState.mockRestore()
    });

    it("includes two buttons", () => {
        const wrapper = shallow(<ChildTest></ChildTest> );
        expect(wrapper.find("button").length).toEqual(2);
    });

    it('state change in ChildTest component', () => {
        const addMock = jest.fn();
        const { getByText, getByTestId } = render(
          <ChildTest count={5} add={addMock}></ChildTest>
        );  
        const value = getByText('Updated Value: true');  
        const button = getByTestId('change-button');  
        fireEvent.click(button); 
        const updatedValue = getByText('Updated Value: false');
        const count = getByText('Count on Child: 5');
        const incrementButton = getByTestId('increment-button');
        fireEvent.click(incrementButton);
        
        expect(value).toBeInTheDocument();
        expect(updatedValue).toBeInTheDocument();
        expect(count).toBeInTheDocument();
        expect(addMock).toHaveBeenCalledTimes(1);
      });
});



