import React from 'react';
import { render } from '@testing-library/react-native';
import FilterRow from '../../../app/Components/FilterRow';

const defaultProps = {
    item: {
        name:"Pop",
        id:1
    },
    onValueChange: jest.fn(),
    selectedValues:[]
}

describe('FilterRow component render', () =>{

    it('Snapshot test', () =>{
        const {toJSON} = render(<FilterRow {...defaultProps}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('Root View has 2 children', () => {
        const {toJSON} = render(<FilterRow {...defaultProps}/>);
        expect(toJSON().children.length).toBe(2);
    });
    it('Genre Label is rendered',()=>{
        const {getAllByText} = render(<FilterRow {...defaultProps}/>);
        expect(getAllByText(defaultProps.item.name).length).toBe(1);
    });
    it('Genre Checkbox is rendered',()=>{
        const {getByTestId} = render(<FilterRow {...defaultProps}/>);
        expect(getByTestId("Filter.Check").length).toBe(1);
    });
});