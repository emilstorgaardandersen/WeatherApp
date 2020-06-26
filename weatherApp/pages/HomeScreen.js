import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class SecondPage extends React.Component {
    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.image}>
                    <Image style={styles.iconSize} source={{ uri: 'http://openweathermap.org/img/wn/01d@2x.png' }} />
                    <Image style={styles.iconSize} source={{ uri: 'http://openweathermap.org/img/wn/02d@2x.png' }} />
                    <Image style={styles.iconSize} source={{ uri: 'http://openweathermap.org/img/wn/03d@2x.png' }} />
                </View>
                <View style={styles.image}>
                    <Image style={styles.iconSize} source={{ uri: 'http://openweathermap.org/img/wn/04d@2x.png' }} />
                    <Image style={styles.iconSize} source={{ uri: 'http://openweathermap.org/img/wn/09d@2x.png' }} />
                    <Image style={styles.iconSize} source={{ uri: 'http://openweathermap.org/img/wn/10d@2x.png' }} />
                </View>

                <View style={styles.button}>
                    <Text style={styles.text} onPress={() => this.props.navigation.navigate('Weather')}>Welcome to Weather APP</Text>
                </View>

                <View style={styles.image}>
                    <Image style={styles.iconSize} source={{ uri: 'http://openweathermap.org/img/wn/11d@2x.png' }} />
                    <Image style={styles.iconSize} source={{ uri: 'http://openweathermap.org/img/wn/13d@2x.png' }} />
                    <Image style={styles.iconSize} source={{ uri: 'http://openweathermap.org/img/wn/01n@2x.png' }} />
                </View>
                <View style={styles.image}>
                    <Image style={styles.iconSize} source={{ uri: 'http://openweathermap.org/img/wn/02n@2x.png' }} />
                    <Image style={styles.iconSize} source={{ uri: 'http://openweathermap.org/img/wn/10n@2x.png' }} />
                    <Image style={styles.iconSize} source={{ uri: 'http://openweathermap.org/img/wn/50n@2x.png' }} />
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

    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
    },
    image: {
        flex: 1,
        flexDirection: 'row'

    },
    iconSize: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
    },
});