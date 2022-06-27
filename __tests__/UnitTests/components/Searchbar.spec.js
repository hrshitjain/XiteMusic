import React from 'react';
import { render } from '@testing-library/react-native';
import SearchBar from '../../../app/Components/Searchbar';

const defaultProps = {
    setSearchPhrase: jest.fn(),
}

describe('Searchbar component render', () =>{

    it('Snapshot test', () =>{
        const {toJSON} = render(<SearchBar {...defaultProps}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('Root View has 1 child', () => {
        const {toJSON} = render(<SearchBar {...defaultProps}/>);
        expect(toJSON().children.length).toBe(1);
    });
    it('Component has 2 children', () => {
        const {toJSON} = render(<SearchBar {...defaultProps}/>);
        expect(toJSON().children[0].children.length).toBe(2);
    });
    it('Text Input is rendered',()=>{
        const {getAllByPlaceholderText} = render(<SearchBar {...defaultProps}/>);
        expect(getAllByPlaceholderText('Artist, music ...').length).toBe(1);
    });
});