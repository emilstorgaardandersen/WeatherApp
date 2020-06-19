import React, { Component } from 'react';
//import react 

import { StyleSheet, View, Button, Alert, Text, TextInput } from 'react-native';
//import all the components

import Weather from './components/Weather'

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            temp: '',
            feels_like: '',
            temp_max: '',
            temp_min: '',
            humidity: '',
            location: ''
        }
    }

    getWeather = () => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + 'Viborg' + '&APPID=6501c00ca1aab9e759f683ee66149937&units=metric')
            .then((response) => response.json())

            .then((responseJson) => {
                this.setState({ 'temp': 'Temp: ' + responseJson.main.temp + ' °C' })
                this.setState({ 'feels_like': 'Feels Like: ' + responseJson.main.feels_like + ' °C' })
                this.setState({ 'temp_max': 'Max Temp: ' + responseJson.main.temp_max + ' °C' })
                this.setState({ 'temp_min': 'Min Temp: ' + responseJson.main.temp_min + ' °C' })
                this.setState({ 'humidity': 'Humidity: ' + responseJson.main.humidity + ' %' })
                this.setState({ 'location': 'Location: ' + responseJson.sys.country + ', ' + responseJson.name })
            })
    }

    render() {
        return (
            <View style={styles.screen}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="black"
                    placeholder={"City or Country"} />
                <Weather onPress={this.getWeather} />
                <Text style={styles.text}>{this.state.temp}</Text>
                <Text style={styles.text}>{this.state.feels_like}</Text>
                <Text style={styles.text}>{this.state.temp_max}</Text>
                <Text style={styles.text}>{this.state.temp_min}</Text>
                <Text style={styles.text}>{this.state.humidity}</Text>
                <Text style={styles.text}>{this.state.location}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        padding: 50,
        height: '100%',
        backgroundColor: '#00ECFF',
    },
    text: {
        fontSize: 26,
        padding: 10,
        fontWeight: 'bold'
    },
    input: {
        width: '100%',
        paddingVertical: 0,
        paddingHorizontal: 15,
        height: 40,
        margin: 0,
        fontSize: 18,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white'
    },
});