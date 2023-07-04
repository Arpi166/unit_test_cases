    import React from 'react';
    import {render, screen, fireEvent, act} from '@testing-library/react';
    import Enzyme, {shallow} from 'enzyme';
    import ParentTest from './ParentTest'; 
    import Adapter from 'enzyme-adapter-react-16';
    import ChildTest from './ChildTest';
    import { renderHook } from '@testing-library/react';

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

        test('increment function in ParentTest component', () => {
            const wrapper= shallow(<ParentTest/>);   
            const heading = wrapper.find('[data-testid="count"]');
            expect(heading.exists()).toBe(true);
          });

          it('should render a button with the correct data-testid using React Testing Library', () => {
            render(<ParentTest />);
            const heading = screen.getByTestId('count');
            expect(heading).toBeInTheDocument();
          });

        it('should check the initial state and increment the count when the increment function is called', () => {
            const wrapper = shallow(<ParentTest />);
            const initialState = wrapper.find('h3').at(0).text();
            expect(initialState).toBe('Count on Parent: 0');

            const incrementButton = wrapper.find('ChildTest').prop('add');
        
            incrementButton();
        
            expect(wrapper.find('h3').at(0).text()).toBe('Count on Parent: 1');
        });

        it("should render the initial count correctly", () => {
            const { getByTestId } = render(<ParentTest />);
            const countElement = getByTestId("count");
            expect(countElement.textContent).toBe("Count on Parent: 0");
          });

        it('shows initial state',()=>{
            const wrapper = shallow(<ParentTest/>)
            expect(wrapper.find('h3').text()).toEqual('Count on Parent: 0')
        })
    });
