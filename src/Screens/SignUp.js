import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Submt_button from '../components/Submt_button';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Sign Up Logic
  const navigation = useNavigation();

  const signUpTest = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert(
          'User Accound registered with these credentials.! ' + email,
          password,
        );
        setEmail('');
        setPassword('');
        navigation.navigate("Login");
      })
      .catch(error => {
        console.log('Error', error.nativeErrorMessage);
        Alert.alert('Error', error.message);
      });
  };
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
            <TextInput
              style={styles.input}
              placeholder="Enter  Password: "
              value={password}
              onChangeText={setPassword}
            />
            <Submt_button onPress={signUpTest} />
          </View>
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
            }}
          >
            Already Have an Account.?{' '}
            <Text
              onPress={() => navigation.navigate('Login')}
              style={{ color: 'red' }}
            >
              {' '}
              Login
            </Text>{' '}
          </Text>
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
