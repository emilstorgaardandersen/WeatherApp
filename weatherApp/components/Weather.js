import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    ImagePropTypes
} from 'react-native'

const Weather = (props) => {

    return (
        <Button title="View Weather"
            color="black"
            onPress={() => props.onPress()}
        />
    );

}
export default Weather;