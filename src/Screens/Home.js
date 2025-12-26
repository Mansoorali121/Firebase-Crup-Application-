import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import firestore from "@react-native-firebase/firestore"

const Home = () => {
  /// Function to fetch Firebase Firestore Data
  const fetchData = async () => {
    const foodCollection = await firestore().collection("foods").get();
    console.log(foodCollection);
    
  }

  /// UseEffect Hook to fetch data on component mount
  useEffect(()=>{
    fetchData();

  },[])

  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({})