import React from 'react';
import { render } from '@testing-library/react-native';
import RowItem from '../../../app/Components/RowItem';

const defaultProps = {
    image: "https://picsum.photos/id/237/200/300",
    name: "SRK",
    artist:'Sonu'
}

describe('RowItem component render', () =>{

    it('Snapshot test', () =>{
        const {toJSON} = render(<RowItem {...defaultProps}/>);
        expect(toJSON()).toMatchSnapshot();
    });
    it('Root View has 1 child', () => {
        const {toJSON} = render(<RowItem {...defaultProps}/>);
        expect(toJSON().children.length).toBe(1);
    });
    it('Component has 3 children', () => {
        const {toJSON} = render(<RowItem {...defaultProps}/>);
        expect(toJSON().children[0].children.length).toBe(3);
    });
    it('Artist Label is rendered',()=>{
        const {getAllByText} = render(<RowItem {...defaultProps}/>);
        expect(getAllByText(defaultProps.artist).length).toBe(1);
    });
    it('Music Label is rendered',()=>{
        const {getAllByText} = render(<RowItem {...defaultProps}/>);
        expect(getAllByText(defaultProps.name).length).toBe(1);
    });
});