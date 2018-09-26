/*
 * Copyright (c) 2015-present, salesforce.com, inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided
 * that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of conditions and the
 * following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and
 * the following disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or
 * promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

import React from 'react';
import {
    Alert,
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import {
    Icon
} from 'react-native-elements';

import {
    createStackNavigator,
} from 'react-navigation';
import {oauth} from 'react-native-force';
import storeMgr from './StoreMgr';
import HomeScreen from './HomeScreen';
import HelloWorld from './HelloWorld';
import Counter from './Counter'
import SearchScreen from './SearchScreen';
import ContactScreen from './ContactScreen';

const AppNavigator = createStackNavigator({
    Home: { screen: HomeScreen},
    HelloWorld: { screen: HelloWorld},
    Counter: {screen: Counter},
    Search: {screen: SearchScreen},
    Contact: {screen: ContactScreen}
});

// App component
class App extends React.Component {
    componentDidMount() {
        storeMgr.syncData();
    }

    render() {
        return (
                <AppNavigator/>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    navBar: {
        backgroundColor: 'red',
        height: Platform.OS === 'ios' ? 56 : 38,
    },
    navBarButton: {
        paddingLeft: 6,
    },
    navButtonsGroup: {
        flexDirection: 'row',
    },
    navBarTitleText: {
        paddingTop: Platform.OS === 'ios' ? 0 : 18,
        fontSize: 26,
        color: 'white',
        fontWeight: 'bold',
    },
    scene: {
        paddingTop: Platform.OS === 'ios' ? 56 : 38,
        backgroundColor: 'white',
        flex: 1,
    },
});

export default App;

