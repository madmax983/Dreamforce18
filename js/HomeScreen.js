import React from 'react'
import {View, Button} from 'react-native'

class HomeScreen extends React.Component {
    navigateToHelloWorld = () => {
        const { navigate } = this.props.navigation;
        navigate('HelloWorld');
    }

    navigateToCounter = () => {
        const { navigate } = this.props.navigation;
        navigate('Counter');
    }

    navigateToSmartSync = () => {
        const { navigate } = this.props.navigation;
        navigate('Search');
    }

    render() {
        return(
            <View>
                <Button title="Hello World"
                        accessbilityLabel="Hello World"
                        onPress={this.navigateToHelloWorld}
                />
                <Button title="Counter"
                        accessbilityLabel="Counter"
                        onPress={this.navigateToCounter}
                />
                <Button title="SmartSyncExplorer"
                        accessbilityLabel="SmartSyncExplorer"
                        onPress={this.navigateToSmartSync}
                />
            </View>
        );
    }
}

export default HomeScreen;