import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SecondPage extends React.Component {
    render() {
        return (
            <View style={styles.screen}>
                <Text style={styles.headLine}>Saved locations</Text>
                <Text style={styles.text} onPress={() => this.props.navigation.navigate('Weather')}>Viborg</Text>
                <Text style={styles.text} onPress={() => this.props.navigation.navigate('Weather')}>Danmark</Text>
                <Text style={styles.text} onPress={() => this.props.navigation.navigate('Weather')}>Silkeborg</Text>
                <Text style={styles.text} onPress={() => this.props.navigation.navigate('Weather')}>Californien</Text>
                <Text style={styles.text} onPress={() => this.props.navigation.navigate('Weather')}>Spanien</Text>
                <Text style={styles.text} onPress={() => this.props.navigation.navigate('Weather')}>København</Text>
                <Text style={styles.text} onPress={() => this.props.navigation.navigate('Weather')}>Sverige</Text>
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