import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../components/Profile';
import Test from '../components/Test';


const Stack = createStackNavigator();

const ProfileNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerTransparent: true, title: '' }}>
            <Stack.Screen name='Profile1' component={Profile} />
            <Stack.Screen name='Test' component={Test} />
        </Stack.Navigator>
    )
}

export default ProfileNavigator;