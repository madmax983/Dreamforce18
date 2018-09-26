import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import HelloProps from './HelloProps'

class HelloWorld extends React.Component {
    render() {
        return (
            <View>
                <Text>
                    Hello World!
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: "blue",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default HelloWorld