import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import Submt_button from '../components/Submt_button';

const Home = () => {
  const [dish, setDish] = useState('');

  console.log('====================');
  console.log(JSON.stringify(dish, null, 3));
  console.log('====================');

  const fetchData = async () => {
    const foodscollection = await firestore().collection('foods').get();

    console.log(foodscollection.docs[0].data());
    setDish(foodscollection.docs[0].data());
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Delete data
  const deleteItem = () => {
    firestore()
      .collection('catogries')
      .doc('gB2VbmsvdBjqwJnCpRGm')
      .delete()
      .then(res => {
        Alert.alert('Item Deleted Successfully: ');
      })
      .catch(err => {
        console.log('Error', err);
        Alert.alert('Error Deleting data', err.message);
      });
  };

  /// Update Data ///
  const updateItem = () => {
    firestore()
      .collection('catogries')
      .doc('jOZvyhbqzAm3bcFCS51T')
      .update({
        title: 'New Fresh Title',
        imageURL: 'https://newimageurl.com/image.jpg',
      })
      .then(res => {
        Alert.alert('Item Updated Successfully');
      })
      .catch(err => {
        console.log('Error', err);
        Alert.alert('Error Updating Item', err.message);
      });
  };
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

      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}
      >
        <Text style={{ fontSize: 20, color: 'blue', marginTop: 20 }}>
          Picturte of Dish is:{' '}
        </Text>
        <Image
          style={{ height: 100, width: 100, top: 20, borderRadius: 20 }}
          source={{ uri: dish.image_url }}
        />
      </View>
      <View style={{ marginTop: 60, gap: 20 }}>
        <Submt_button
          btntext="Delete Item"
          color="green"
          onPress={deleteItem}
        />
        <Submt_button btntext="Update Item" color="blue" onPress={updateItem} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
