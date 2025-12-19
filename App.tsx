import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{flex:1, backgroundColor:"red"}}>
      <View>
        <Text style={{fontSize:30,fontWeight:"bold",marginLeft:10}}>Firebase Crud Application</Text>
      </View>
      <View>
        <Text>React Native Firebase Package Download</Text>
        <Text> Firebase Integration with Google services</Text>
      </View>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({})