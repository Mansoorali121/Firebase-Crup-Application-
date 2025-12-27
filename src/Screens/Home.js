import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

const Home = () => {
  const [dish, setDish] = useState('');

  const fetchData = async () => {
    const foodscollection = await firestore().collection('foods').get();

    console.log(foodscollection.docs[0].data());
    setDish(foodscollection.docs[0].data());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 40 }}>Home Screen</Text>
      <Text style={{ fontSize: 20, color: 'blue' }}>
        {' '}
        Price of Dish is: <Text style={{ color: 'red' }}>{dish.Price}$ </Text>
      </Text>
      <Text style={{ fontSize: 20, color: 'blue' }}>
        Title of Dish is: <Text style={{ color: 'red' }}>{dish.title} </Text>{' '}
      </Text>
      <Text style={{ fontSize: 20, color: 'blue' }}>
        Rating of Dish is: <Text style={{ color: 'red' }}>{dish.rating} </Text>{' '}
      </Text>
      
     <View style={{flexDirection:"row",alignItems:"center",marginTop:20}}>
     
            <Text style={{ fontSize: 20, color: 'blue',marginTop:20 }}>
        Picturte of Dish is: {' '}
      </Text>
       <Image
        style={{ height: 100, width: 100, top: 20, borderRadius: 20 }}
        source={{ uri: dish.image_url }}
      />
     </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
