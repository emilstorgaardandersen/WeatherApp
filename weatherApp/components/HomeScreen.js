import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class SecondPage extends React.Component {
    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.button}>
                    <Text style={styles.text} onPress={() => this.props.navigation.navigate('FirstPage')}>Welcome to Weather APP</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        padding: "10%",
        height: "100%",
        width: "100%",
        backgroundColor: '#00ECFF',
    },
    button: {
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,

    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 10,
    }
});