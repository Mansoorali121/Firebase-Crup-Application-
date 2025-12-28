import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Submt_button from '../components/Submt_button';
import firestore, { collection } from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';


const FoodorCategory = () => {
  const [foodtitle, setfoodtitle] = useState('');
  const [imgurl, setimgurl] = useState('');
   // Navigation Setup
    const navigation = useNavigation();

  // adding category
  const addcategory = () => {
    firestore()
      .collection('catogries')
      .add({
        title: foodtitle,
        imageURL: imgurl,
      
      })
      .then(res => {
        Alert.alert('Food Category added successfully: ');
       navigation.goBack();
     
      })
      .catch(err => {
        console.log('Error', err);
        Alert.alert('Error occured', err.message);
      });
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput placeholder="Enter food title" style={styles.input} />
      <TextInput placeholder="Enter Image Url" style={styles.input} />
      <Submt_button
        btntext="Add Category"
        onPress={addcategory}
        color="green"
      />
    </View>
  );
};

export default FoodorCategory;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    width: 200,
    borderRadius: 12,
    paddingLeft: 10,
  },
});
