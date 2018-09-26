import React from 'react';
import HelloWorld from '../HelloWorld.js';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<HelloWorld />).toJSON();
    expect(tree).toMatchSnapshot();
});