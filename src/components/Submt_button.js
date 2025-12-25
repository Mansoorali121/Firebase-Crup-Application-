import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Submt_button = ({ onPress, color, btntext }) => {
  return (
    <Pressable onPress = {onPress}
      style={{
        backgroundColor:color?color:"blue",
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
      }}
    >
      <Text style={{ color: '#fff', fontWeight: '500' }}>{btntext}</Text>
    </Pressable>
  );
};

export default Submt_button;

const styles = StyleSheet.create({});
