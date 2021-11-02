import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

const main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome here !</Text>
      <View>
      <Text style={styles.userIdText}>User Id</Text>
      <TextInput style={styles.userIdTextField} placeholder="Enter your user-id"></TextInput>
      <Text style={styles.passswordText}>Password</Text>
      <TextInput style={styles.passwordTextField} placeholder="Enter your password"></TextInput>
      </View>
      <Button color='red'  onPress={() => Alert.alert('Simple Button pressed')} title='Submit' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding:10,
    flex:1,
  },
  heading:{
    fontSize:30,
    fontWeight:'bold',
  },
  userIdText:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  userIdTextField:{
    borderColor:'black',
    borderRadius:10,
    borderWidth:1,
    padding:10
  },
  passswordText:{},
  passwordTextField:{
    borderColor:'black',
    borderRadius:10,
    borderWidth:1,
    padding:10,
  },
  button:{
    // padding:20
  },

});


export default main;