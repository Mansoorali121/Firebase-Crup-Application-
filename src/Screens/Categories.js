import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

const Categories = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [food,setFood] = useState([]);

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
   
 </View>
  
  );
};

export default Categories;

const styles = StyleSheet.create({});
