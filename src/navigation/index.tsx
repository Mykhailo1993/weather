import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WeatherScreen from '../screens/WeatherScrenn';
import WeatherForDayScreen from '../screens/WeatherForDayScreen';

export type AppNavigationParamList = {
  Weather: undefined;
  WeatherForDay: undefined;
};

const Stack = createNativeStackNavigator<AppNavigationParamList>();

const AppNavigation = () => (
  <Stack.Navigator
    initialRouteName="Weather"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen name="Weather" component={WeatherScreen} />
    <Stack.Screen name="WeatherForDay" component={WeatherForDayScreen} />
  </Stack.Navigator>
);

export default AppNavigation;
