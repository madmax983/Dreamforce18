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
    View,
    Button,
    ListView, Alert
} from 'react-native';
import {
    SearchBar
} from 'react-native-elements';

import dismissKeyboard from 'dismissKeyboard';
import ContactCell from './ContactCell';
import storeMgr from './StoreMgr';
import {oauth} from "react-native-force";

const onAdd = navigation => {
    storeMgr.addContact(
        (contact) => navigation.push('Contact', {contact: contact})
    );
}

const onSync = () => {
    storeMgr.reSyncData();
}

const onLogout = () => {
    Alert.alert(
        'Logout',
        'Are you sure you want to logout',
        [
            {text: 'Cancel' },
            {text: 'OK', onPress: () => oauth.logout()},
        ],
        { cancelable: true }
    )
}

class SearchScreen extends React.Component {
    static navigationOptions = navigation => {
        return {
            headerRight: (
                <View style={{flex: 0.5, flexDirection: "row"}}>
                    <Button title={"Add"} onPress={(e) => {onAdd(navigation.navigation)}}/>
                    <Button title={"Sync"} onPress={onSync}/>
                    <Button title={"Logout"} onPress={onLogout}/>
                </View>
            )
        }
    }
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            isLoading: false,
            filter: '',
            dataSource: ds.cloneWithRows([]),
            queryNumber: 0
        }
    }

    componentDidMount() {
        storeMgr.addStoreChangeListener(() => { this.refresh(); });
        this.refresh();
    }

    refresh = () => {
        this.searchContacts(this.state.filter);
    }

    render() {
        return (
            <View style={this.props.style}>
                <SearchBar
                    lightTheme
                    autoCorrect={false}
                    onChangeText={this.onSearchChange}
                    showLoadingIcon={this.state.isLoading}
                    value={this.state.filter}
                    placeholder='Search a contact...'
                />
                <ListView
                    automaticallyAdjustContentInsets={false}
                    dataSource={this.state.dataSource}
                    enableEmptySections={true}
                    renderRow={this.renderRow} />
            </View>
        );
    }

    renderRow = row =>  {
        return (
            <ContactCell
                onSelect={() => this.selectContact(row)}
                contact={row}
            />
        );
    }

    selectContact = contact => {
        const { navigate } = this.props.navigation;
        dismissKeyboard();
        navigate('Contact',
            {contact: contact}
        );
    }

    onSearchChange = text => {
        var filter = text.toLowerCase();
        clearTimeout(this.timeoutID);
        this.timeoutID = setTimeout(() => this.searchContacts(filter), 10);
    }

    searchContacts = query => {
        this.setState({
            isLoading: true,
            filter: query
        });

        const that = this;
        storeMgr.searchContacts(
            query,
            (contacts, currentStoreQuery) => {
                that.setState({
                    isLoading: false,
                    filter: query,
                    dataSource: that.state.dataSource.cloneWithRows(contacts),
                    queryNumber: currentStoreQuery
                });
            },
            (error) => {
                that.setState({
                    isLoading: false
                });
            });
    }
}

export default SearchScreen;
