import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

class HelloProps extends React.Component {
    render() {
        return (
            <View>
                <Text >
                    Hello {this.props.name}
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

export default HelloProps