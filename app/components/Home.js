import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTheme } from '../contexts/ThemeProvider';



const Home = () => {
    // const {theme} = useTheme();
    // console.log(theme);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Custom bottom tab navigation!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#76a6ef'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default Home;