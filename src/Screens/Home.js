import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';

const Home = () => {
  const [dish,setDish] = useState();

  const fetchData = async () => {
    const foodscollection = await firestore()
      .collection('foods')
      .get();

    
    console.log(foodscollection.docs[0].data());
    setDish(foodscollection.docs[0].data());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text>Home</Text>
      <Text>{dish.Price}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
