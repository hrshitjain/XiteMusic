import React from "react";
import { render } from '@testing-library/react-native';

import App from "../../App"

describe("<App />", () => {
    it('Root View has 1 child', () => {
        const {toJSON} = render(<App/>);
        expect(toJSON().children.length).toBe(1);
    });
});