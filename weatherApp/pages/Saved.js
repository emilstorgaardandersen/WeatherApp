import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class SecondPage extends React.Component {
    render() {
        return (
            <View style={styles.screen}>
                <Text style={styles.headLine}>Saved locations</Text>
                <Text style={styles.text}></Text>
                <Text style={styles.text}></Text>
                <Text style={styles.text}></Text>
                <Text style={styles.text}></Text>
                <Text style={styles.text}></Text>
                <Text style={styles.text}></Text>
                <Text style={styles.text}></Text>
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
        padding: "2%",
        marginVertical: "3%",
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 2
    },
    headLine: {
        fontSize: 40,
        fontWeight: 'bold',
        //padding: "10%",
        //marginVertical: "5%",
    },
});