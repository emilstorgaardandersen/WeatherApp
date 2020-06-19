import React, { Component } from 'react';
//import react 

import { StyleSheet, View, Button, Alert, Text, TextInput, Image } from 'react-native';
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
            location: '',
            description: '',
            icon: '',
            value: ''
        }
        this.handleChangeText = this.handleChangeText.bind(this)
    }

    handleChangeText(newText) {
        this.setState({
            value: newText
        })
    }

    getWeather = () => {
        if (this.state.value == 0) {
            alert('You have to enter a City or Country')
        } else {
            fetch('https://api.openweathermap.org/data/2.5/weather?q=' + this.state.value + '&APPID=6501c00ca1aab9e759f683ee66149937&units=metric')
                .then((response) => response.json())

                .then((responseJson) => {
                    this.setState({ 'temp': 'Temp: ' + responseJson.main.temp + ' °C' })
                    this.setState({ 'feels_like': 'Feels Like: ' + responseJson.main.feels_like + ' °C' })
                    this.setState({ 'temp_max': 'Max Temp: ' + responseJson.main.temp_max + ' °C' })
                    this.setState({ 'temp_min': 'Min Temp: ' + responseJson.main.temp_min + ' °C' })
                    this.setState({ 'humidity': 'Humidity: ' + responseJson.main.humidity + ' %' })
                    this.setState({ 'location': 'Location: ' + responseJson.sys.country + ', ' + responseJson.name })
                    this.setState({ 'description': responseJson.weather[0].description })
                    this.setState({ 'icon': responseJson.weather[0].icon })
                })
                .catch((error) => {
                    alert('City or Country does not exist');
                });
        }
    }

    render() {
        return (
            <View style={styles.screen}>
                <Text style={styles.headLine}>Weather App!</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        defaultValue={this.state.value}
                        onChangeText={this.handleChangeText}
                        placeholderTextColor="black"
                        placeholder={"City or Country"} />
                    <Weather style={styles.text1} onPress={this.getWeather} />
                </View>
                <Text style={styles.text}>{this.state.temp}</Text>
                <Text style={styles.text}>{this.state.feels_like}</Text>
                <Text style={styles.text}>{this.state.temp_max}</Text>
                <Text style={styles.text}>{this.state.temp_min}</Text>
                <Text style={styles.text}>{this.state.humidity}</Text>
                <Text style={styles.text}>{this.state.location}</Text>
                <Text style={styles.text}>{this.state.description}</Text>
                <View style={styles.image}>
                    <Image
                        style={styles.size}
                        source={{ uri: 'http://openweathermap.org/img/wn/' + this.state.icon + '@2x.png' }} />
                </View>
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
    headLine: {
        fontSize: 40,
        padding: 10,
        fontWeight: 'bold',
        padding: 10,
        marginVertical: 10,
    },
    text: {
        fontSize: 20,
        padding: 10,
        fontWeight: 'bold',
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    },
    input: {
        width: '70%',
        paddingVertical: 0,
        paddingHorizontal: 15,
        height: 40,
        margin: 10,
        fontSize: 18,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    size: {
        width: 150,
        height: 150,
        resizeMode: 'stretch',
    }
});