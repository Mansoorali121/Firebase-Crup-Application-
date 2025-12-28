import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import Submt_button from '../components/Submt_button';
import { Alert } from 'react-native/types_generated/index';

const Categories = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [food,setFood] = useState([]);


  /// Function to add Data//
  const addcategory = () => {
    firestore().collection("catogries").add({
      title:"Big Meals",
      imageURL:"https://media.istockphoto.com/id/475499733/photo/nachos.jpg?s=612x612&w=0&k=20&c=32sM2sMi8Clk8C99JdTXilaUv9wv9UnNF4jslj7JQxs="
    })
    Alert.alert("Category Added Successfully: ")
  }
  useEffect(() => {
    const subcscriber = firestore()
      .collection('catogries')
      .onSnapshot(querySnapshot => {
        const categories = [];
        querySnapshot.forEach(documentSnapshot => {
          categories.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setCategories(categories);
        setLoading(false);
      });
    return () => subcscriber();
  }, []);

  if (loading) {
    <ActivityIndicator />;
  }
useEffect(()=>{
  const subsciber = firestore().collection("foods").onSnapshot(res =>{
    const foods = [];
    res.forEach(documentSnapshot => {
      foods.push({
        ...documentSnapshot.data(),
        key: documentSnapshot.id,
      });
    });
    setFood(foods);
  });
  return () =>subsciber();

}, [])
  return (
 <View>
     <FlatList
      data={categories}
      renderItem={({ item }) => (
        <View>
          <Text>{item.title}</Text>
          <Text>Mansoor</Text>

         
        </View>
      )}
    />
      <FlatList
      data={food}
      renderItem={({ item }) => (
        <View>
          <Text style={{fontSize:20,color:"red", textAlign:"center"}}>{item.title}</Text>
         
         
        </View>
      )}
    />
    
          <Submt_button onPress={addcategory} color="green" btntext="Add Category" />
   
 </View>
  
  );
};

export default Categories;

const styles = StyleSheet.create({});
