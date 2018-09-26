import React from 'react';
import ContactScreen from '../ContactCell.js';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const contact = {
        FirstName: "Obi Wan",
        LastName: "Kenobi",
        Title: "Jedi Master",
        MobilePhone: "(999) 999-9999",
        Department: "The Force",
        Email: "obiwan@moseisley.net",
        HomePhone: "(111) 111-1111",
        __local__: false
    };
    const tree = renderer.create(<ContactScreen contact={contact}  />).toJSON();
    expect(tree).toMatchSnapshot();
});