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
  console.log(categories);
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <View>
          <Text>{item.title}</Text>
          <Text>Mansoor</Text>
        </View>
      )}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({});
