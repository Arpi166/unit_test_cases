    import React from 'react';
    import {render, screen, fireEvent} from '@testing-library/react';
    import Enzyme, {shallow} from 'enzyme';
    import ParentTest, {fun} from './ParentTest'; 
    import Adapter from 'enzyme-adapter-react-16';
    import ChildTest from './ChildTest';
    
    Enzyme.configure({adapter: new Adapter()})  

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <ParentTest></ParentTest>
        );
    });

    describe('Test cases',()=>{
        it('should render button', ()=>{
            expect(wrapper.find(ChildTest)).toHaveLength(1);
        }); 

        it('test',()=>{
            let simulateOutputAfterClick = 1;
            expect(wrapper.find('div.parent').simulate('click').length).toEqual(
                simulateOutputAfterClick
            );
        })

        test('increment function in ParentTest component', () => {
            const heading = wrapper.find('[data-testid="count"]');
            expect(heading.exists()).toBe(true);
          });

          it('should render a button with the correct data-testid using React Testing Library', () => {
            render(<ParentTest />);
            const heading = screen.getByTestId('count');
            expect(heading).toBeInTheDocument();
          });

        it('should check the initial state and increment the count when the increment function is called', () => {
            const initialState = wrapper.find('h3').at(0).text();
            expect(initialState).toBe('Count on Parent: 0');

            const incrementButton = wrapper.find('ChildTest').prop('add');
        
            incrementButton();
        
            expect(wrapper.find('h3').at(0).text()).toBe('Count on Parent: 1');
        });

        it("should render the initial count correctly", () => {
            const { getByTestId } = render(<ParentTest></ParentTest>);
            const countElement = getByTestId("count");
            expect(countElement.textContent).toBe("Count on Parent: 0");
          });

        it('shows initial state',()=>{
            expect(wrapper.find('h3').text()).toEqual('Count on Parent: 0')
        })

        it('state update with value of input box upon change',()=>{
            const { getByTestId } = render(<ParentTest></ParentTest>);
            const inputBox = getByTestId('input-box');
            fireEvent.change(inputBox, { target: { value: 'Hello' } });
            expect(inputBox.value).toBe('Hello');
        });

        it('should call setTimeout when focusOnMenu is called', () => {
            let simulatedOutput = 1;
    
            let spy = jest.spyOn(window, 'setTimeout');
            fun();
    
            expect(spy).toHaveBeenCalledTimes(simulatedOutput);
        });
});
