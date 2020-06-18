import React, { Component } from 'react';
//import react 

import { StyleSheet, View, Button, Alert } from 'react-native';
//import all the components

export default class App extends Component {

    getDataUsingGet() {
        //GET request 
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Viborg&APPID=6501c00ca1aab9e759f683ee66149937&units=metric')
            .then((response) => response.json())
            //If response is in json then in success
            .then((responseJson) => {
                //Success 
                alert(responseJson.main.temp + " °C");
            })
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                {/*Running GET Request*/}
                <Button title='Get Data Using GET' onPress={this.getDataUsingGet} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        margin: 10
    }
});