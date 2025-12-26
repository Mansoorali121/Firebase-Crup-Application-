import { PermissionsAndroid,StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import SignUp from './src/Screens/SignUp';
import MyStack from "./src/navigation/MyStack"

import messaging from '@react-native-firebase/messaging';



const App = () => {
  
//
 const requestPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
    if (granted == PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Permission granted ');
    } else {
      console.log('Permission Denied');
    }
  };
  // const getToken = async () => {
  //   try {
  //     const token = await messaging().getToken();
  //     console.log('Token', token);
  //   } catch (error) {
  //     console.log('Error getting Token');
  //   }
  // };
  const getToken = async () => {
  try {
    const token = await messaging().getToken();
    console.log('Token is fetched:', token);
  } catch (error) {
    console.log('Error  TokeGetting ', error);
  }
};

  useEffect(() => {
    requestPermission();
    getToken();
  }, []);

//


  return (
    <NavigationContainer>
      <MyStack/>
      
      </NavigationContainer>
    
  );
}

export default App;

const styles = StyleSheet.create({})