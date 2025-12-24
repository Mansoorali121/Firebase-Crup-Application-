import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import SignUp from './src/Screens/SignUp';
import MyStack from "./src/navigation/MyStack"

const App = () => {
  return (
    <NavigationContainer>
      <MyStack/>
      
      </NavigationContainer>
    
  );
}

export default App;

const styles = StyleSheet.create({})