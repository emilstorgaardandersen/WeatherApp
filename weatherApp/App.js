import React, { Component } from "react";
//import react 

import {
    StyleSheet,
    View,
    Button,
    Alert,
    Text,
    TextInput,
    Image,
    Linking,
    Platform,
    TouchableOpacity
} from 'react-native';
//import all the components

import Weather from './components/Weather';

//const width = Dimensions.get.width;
//const height = Dimensions.get.height;

export default class App extends Component {
    findCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const gps = position;

                this.setState({ 'gps': gps.coords.latitude + ',+' + gps.coords.longitude });
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
            value: '',
            gps: ''
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
                        defaultValue={this.state.value}
                        onChangeText={this.handleChangeText}
                        placeholderTextColor="black"
                        placeholder={"City or Country..."} />
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

                <View style={styles.button}>
                    <Button
                        color="Black"
                        title="SEE LOCATION"
                        onPress={() => Linking.openURL('https://www.google.com/maps/search/' + this.state.lat + ',+' + this.state.lon + '?sa=X&ved=2ahUKEwiGzYjf4ZTqAhUEyaQKHZAiBF4Q8gEwAHoECAYQAQ')}>
                    </Button>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={this.findCoordinates}>
                        <Text>Location:</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <Button
                        color="Black"
                        title="SEE LOCATION"
                        onPress={() => Linking.openURL('https://www.google.com/maps/search/' + this.state.gps + '?sa=X&ved=2ahUKEwiGzYjf4ZTqAhUEyaQKHZAiBF4Q8gEwAHoECAYQAQ')}>
                    </Button>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        padding: "10%",
        height: "100%",
        backgroundColor: '#00ECFF',
    },
    headLine: {
        fontSize: 40,
        fontWeight: 'bold',
        padding: "5%",
        marginVertical: "5%",
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
    size: {
        width: 150,
        height: 150,
        resizeMode: 'stretch',
    },
    button: {
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    }
});