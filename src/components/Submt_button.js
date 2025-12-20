import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Submt_button = ({ onPress }) => {
  return (
    <Pressable onPress = {onPress}
      style={{
        backgroundColor: 'salmon',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
      }}
    >
      <Text style={{ color: '#fff', fontWeight: '500' }}>Signup</Text>
    </Pressable>
  );
};

export default Submt_button;

const styles = StyleSheet.create({});
