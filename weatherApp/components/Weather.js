import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Button,
} from 'react-native'

const Weather = (props) => {
    return (
        <View style={styles.button}>
            <Button
                color="black"
                title="Search" // View Weather 
                onPress={() => props.onPress()}
            />
        </View>
    );

}

export default Weather;

const styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'gray',
    }
})