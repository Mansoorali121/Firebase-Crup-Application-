import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignUp = () => {
  return (
    <View style={{flex:1}}>
      <View style={{alignItems:"center", top:20}}>
        <Text>SignuP Screen </Text>
        <View style={styles.formcontainer}>
        <Text>Login Form Will be here</Text>
      </View>
      </View>
      
    </View>
  )
}

export default SignUp;

const styles = StyleSheet.create({
    formcontainer:{
        width:"80%",
        height:300,
        borderWidth:1,
        alignItems:"center",
        top:10,
        borderRadius:20
    }
})