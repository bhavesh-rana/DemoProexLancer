//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screen/Homescreen';
import ListsData from '../Screen/Datalist';
import Signin from '../Screen/Signin';
import Signup from '../Screen/Signup';
// create a component
const Stack = createNativeStackNavigator();
const Stackscreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} /> */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ListsData" component={ListsData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#808080',
  },
});

//make this component available to the app
export default Stackscreen;
