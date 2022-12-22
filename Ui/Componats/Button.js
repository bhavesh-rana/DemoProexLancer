//import liraries
import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

// create a component
const Button = ({holderName, values, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={holderName}
        value={values}
        onChangeText={onChangeText}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  textInput: {
    // width: 250,
    backgroundColor: '#BCEAD5',
    borderRadius: 10,
    fontSize: 20,
    height: 50,
    width: 240,
    paddingHorizontal: 15,
    //color: 'black',
  },
});

//make this component available to the app
export default Button;
