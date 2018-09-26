import React from 'react'
import {View, Text, Button} from 'react-native'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        });
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                <Text>{this.state.counter}</Text>
                <Button title="+" onPress={this.increment}/>
                <Button title="-" onPress={this.decrement}/>
            </View>
        );
    }
}

export default Counter;