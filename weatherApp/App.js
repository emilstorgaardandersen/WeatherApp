import React from "react";
import { StyleSheet, Text, View } from "react-native";

import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FirstPage />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});