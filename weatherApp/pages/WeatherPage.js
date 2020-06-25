import React, { Component } from "react";
//import react 

import {
    StyleSheet,
    View,
    Button,
    Text,
    TextInput,
    Image,
    Linking,
    TouchableOpacity,
} from 'react-native';
//import all the components

import Weather from '../components/Weather';

export default class FirstPage extends Component {
    findCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const gps = position;

                this.setState({ 'gps': 'lat=' + gps.coords.latitude + '&lon=' + gps.coords.longitude });

                fetch('http://api.openweathermap.org/data/2.5/weather?' + this.state.gps + '&appid=6501c00ca1aab9e759f683ee66149937&units=metric')
                    .then((response) => response.json())

                    .then((responseJson) => {
                        this.setState({ 'temp': 'Temp: ' + responseJson.main.temp + ' °C' })
                        this.setState({ 'feels_like': 'Feels Like: ' + responseJson.main.feels_like + ' °C' })
                        this.setState({ 'temp_max': 'Max Temp: ' + responseJson.main.temp_max + ' °C' })
                        this.setState({ 'temp_min': 'Min Temp: ' + responseJson.main.temp_min + ' °C' })
                        this.setState({ 'humidity': 'Humidity: ' + responseJson.main.humidity + ' %' })
                        this.setState({ 'location': 'Location: ' + responseJson.sys.country + ', ' + responseJson.name })
                        this.setState({ 'lon': responseJson.coord.lon })
                        this.setState({ 'lat': responseJson.coord.lat })
                        this.setState({ 'description': responseJson.weather[0].description })
                        this.setState({ 'icon': responseJson.weather[0].icon })
                        this.setState({ 'place': responseJson.sys.country + ', ' + responseJson.name })
                    })
                    .catch((error) => {
                        alert('City or Country does not exist');
                    });

            },
        );
    };

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
            lon: '',
            lat: '',
            icon: '',
            inputText: '',
            gps: '',
            place: ''
        }
        this.handleChangeText = this.handleChangeText.bind(this)
    }

    handleChangeText(newText) {
        this.setState({
            inputText: newText
        })
    }

    getWeather = () => {
        if (this.state.inputText == 0) {
            alert('You have to enter a City or Country')
        } else {
            fetch('https://api.openweathermap.org/data/2.5/weather?q=' + this.state.inputText + '&APPID=6501c00ca1aab9e759f683ee66149937&units=metric')
                .then((response) => response.json())

                .then((responseJson) => {
                    this.setState({ 'temp': 'Temp: ' + responseJson.main.temp + ' °C' })
                    this.setState({ 'feels_like': 'Feels Like: ' + responseJson.main.feels_like + ' °C' })
                    this.setState({ 'temp_max': 'Max Temp: ' + responseJson.main.temp_max + ' °C' })
                    this.setState({ 'temp_min': 'Min Temp: ' + responseJson.main.temp_min + ' °C' })
                    this.setState({ 'humidity': 'Humidity: ' + responseJson.main.humidity + ' %' })
                    this.setState({ 'location': 'Location: ' + responseJson.sys.country + ', ' + responseJson.name })
                    this.setState({ 'lon': responseJson.coord.lon })
                    this.setState({ 'lat': responseJson.coord.lat })
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
                        defaultValue={this.state.inputText}
                        onChangeText={this.handleChangeText}
                        placeholderTextColor="black"
                        placeholder={"City or Country..."} />
                    <Weather style={styles.text} onPress={this.getWeather} />
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
                        style={styles.iconSize}
                        source={{ uri: 'http://openweathermap.org/img/wn/' + this.state.icon + '@2x.png' }} />
                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={this.findCoordinates}>
                        <Text style={{ fontSize: 18 }}>CURRENT WEATHER:</Text>
                        <Text style={{ fontSize: 18 }}>{this.state.place}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.button}>
                    <Text
                        onPress={() => Linking.openURL('https://www.google.com/maps/search/' + this.state.lat + ',+' + this.state.lon + '?sa=X&ved=2ahUKEwiGzYjf4ZTqAhUEyaQKHZAiBF4Q8gEwAHoECAYQAQ')}
                        style={{ fontSize: 18, padding: 5 }}>
                        VIEW LOCATION
                    </Text>
                </View>
                <Text style={{ textAlign: 'right', fontSize: 20, fontWeight: 'bold' }} onPress={() => this.props.navigation.navigate('Saved')}>Saved</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        padding: "10%",
        height: "100%",
        width: "100%",
        backgroundColor: '#00ECFF',
    },
    headLine: {
        fontSize: 40,
        fontWeight: 'bold',
        //padding: "10%",
        //marginVertical: "5%",
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: "2%",
        marginVertical: "3%",
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 2
    },
    input: {
        width: "70%",
        paddingVertical: "0%",
        paddingHorizontal: "2%",
        height: "93%",
        margin: "2%",
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
    iconSize: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
    },
    button: {
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,

    },
});