import React from 'react';
import ContactScreen from '../ContactScreen.js';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const navigation = {
        getParam: function() {
            return( {
                FirstName: "Obi Wan",
                LastName: "Kenobi",
                Title: "Jedi Master",
                MobilePhone: "(999) 999-9999",
                Department: "The Force",
                Email: "obiwan@moseisley.net",
                HomePhone: "(111) 111-1111"
            });
        }
    };
    const tree = renderer.create(<ContactScreen navigation={navigation} />).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
});