import React, { Component } from 'react';
import {
    View,
    Button,
} from 'react-native'

const Weather = (props) => {
    return (
        <View>
            <Button
                color="black"
                title="VIEW LOCATION" // View Weather 
                onPress={() => props.onPress()}
            />
        </View>
    );

}

export default Weather;