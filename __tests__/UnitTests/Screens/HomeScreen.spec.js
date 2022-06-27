import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import HomeScreen from '../../../app/Screens/HomeScreen';

describe('FilterRow component render', () =>{
    it('Snapshot test', () =>{
        const {toJSON} = render(<HomeScreen />);
        expect(toJSON()).toMatchSnapshot();
    });
    it('Root View has 4 children', () => {
        const {toJSON} = render(<HomeScreen />);
        expect(toJSON().children.length).toBe(4);
    });
    it('Greeting Label is rendered',()=>{
        const currentTime = new Date();
        let greeting;
        if(currentTime.getHours() < 12){
            greeting = 'Good Morning !!'    
        }
        else{
            greeting = 'Good Evening !!'
        }
        const {getAllByText} = render(<HomeScreen/>);
        expect(getAllByText(greeting).length).toBe(1);
    });
    it('Search bar is rendered',()=>{
        const {getAllByPlaceholderText} = render(<HomeScreen/>);
        expect(getAllByPlaceholderText('Artist, music ...').length).toBe(1);
    });
});

describe("Search functionality", () => {
    it('Search music albums by title', () =>{
        const {getByPlaceholderText, getByText} = render(<HomeScreen/>);
        const searchBar = getByPlaceholderText('Artist, music ...');
        fireEvent.changeText(searchBar, 'All In');
        expect(getByText('All In').length).toBe(1);
    })
})