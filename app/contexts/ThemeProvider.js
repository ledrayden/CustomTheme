import React, {createContext, useContext, useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { defaultTheme } from '../helper/theme';

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(defaultTheme);
    return (
        // <ThemeContext.Provider value={{ theme: 'This is the theme!!!' }}>
        <ThemeContext.Provider value={{theme: theme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

const styles = StyleSheet.create({
    container: {},    
});

export default ThemeProvider;