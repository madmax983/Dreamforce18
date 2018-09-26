import React from 'react';
import ContactBadge from '../ContactBadge.js';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const contact = {
        FirstName: "Obi Wan",
        LastName: "Kenobi",
        Title: "Jedi Master",
        MobilePhone: "(999) 999-9999",
        Department: "The Force",
        Email: "obiwan@moseisley.net",
        HomePhone: "(111) 111-1111"
    };
    const tree = renderer.create(<ContactBadge contact={contact} />).toJSON();
    expect(tree).toMatchSnapshot();
});