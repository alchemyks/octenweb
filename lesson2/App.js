import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

let StackNavigator = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <StackNavigator.Navigator initialRouteName={'Home'}>
          <StackNavigator.Screen name={'Home'} component={Home}/>
        </StackNavigator.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
