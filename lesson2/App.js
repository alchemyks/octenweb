import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";

let StackNavigator = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <StackNavigator.Navigator initialRouteName={'Users'}>
          <StackNavigator.Screen name={'Users'} component={Users}/>
            <StackNavigator.Screen name={'Detail'} component={UserDetail}/>
        </StackNavigator.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
