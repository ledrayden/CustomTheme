import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTheme } from '../contexts/ThemeProvider';



const Test = () => {
    const {theme} = useTheme();
    return (
        <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
            <Text style={[styles.text, {color: theme.textColor}]}>Test</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',        
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',        
    }
})

export default Test;