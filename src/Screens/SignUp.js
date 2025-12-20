import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Submt_button from '../components/Submt_button';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', top: 20 }}>
        <Text style={{ fontSize: 30, marginBottom: 20 }}>Signup Screen </Text>
        <View style={styles.formcontainer}>
          <Text style={{ marginBottom: 30, top: 10 }}>
            Login Form Will be here
          </Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter  Email: "
              value={email}
              onChangeText={setEmail}
            />
            <TextInput style={styles.input} placeholder="Enter  Password: " 
            value={password} onChangeText={setPassword}
            />
            <Submt_button />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  formcontainer: {
    width: '80%',
    height: 300,
    borderWidth: 1,
    alignItems: 'center',
    top: 10,
    borderRadius: 20,
    backgroundColor: '#f2f2f2',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    width: 200,
    borderRadius: 12,
    paddingLeft: 10,
  },
});
