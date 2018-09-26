import React from 'react';
import Field from '../Field.js';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<Field />).toJSON();
    expect(tree).toMatchSnapshot();
});