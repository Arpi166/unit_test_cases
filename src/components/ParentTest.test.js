    import React from 'react';
    import { render, fireEvent, renderHook} from '@testing-library/react';
    import { act } from 'react-dom/test-utils';
    import Enzyme, {shallow} from 'enzyme';
    import ParentTest from './ParentTest'; 
    import Adapter from 'enzyme-adapter-react-16';
    import { useState } from "react";
    import ChildTest from './ChildTest';

    Enzyme.configure({adapter: new Adapter()})  

    describe('Test cases',()=>{
        it('should render button', ()=>{
            const wrapper=shallow(<ParentTest></ParentTest>)
            expect(wrapper.find(ChildTest)).toHaveLength(1);
        }); 

        it('test',()=>{
            let wrapper = shallow(<ParentTest />);
            let simulateOutputAfterClick = 1;

            expect(wrapper.find('div.parent').simulate('click').length).toEqual(
                simulateOutputAfterClick
            );
        })

        it("should update state when calling the increment function", () => {
            const { result } = renderHook(() => {
            const [count, setCount] = useState(0);
        
            const increment = () => {
                setCount((prevCount) => prevCount + 1);
            };
        
            return { count, increment };
            }); 
            expect(result.current.count).toBe(0);
        
            act(() => {
            result.current.increment(); 
            });
        
            expect(result.current.count).toBe(1); 
        });

        it("should update state when calling the increment function", () => {
            const { getByText } = render(<ParentTest />);
            const countElement = getByText(/Count on Parent:/);
        
            expect(countElement.textContent).toContain("0"); 
        
            fireEvent.click(getByText("Increment"));
        
            expect(countElement.textContent).toContain("1"); 
        });

        it('should check the initial state and increment the count when the increment function is called', () => {
            const wrapper = shallow(<ParentTest />);
            const initialState = wrapper.find('h3').text();
            expect(initialState).toBe('Count on Parent: 0');

            const incrementButton = wrapper.find('ChildTest').prop('add');
        
            incrementButton();
        
            expect(wrapper.find('h3').text()).toBe('Count on Parent: 1');
        });
    });
