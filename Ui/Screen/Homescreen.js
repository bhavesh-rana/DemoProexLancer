import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Button from '../Componats/Button';
import {ONEDIT, ONSUBMIT} from '../Redux/Action/Action';
import {useSelector, useDispatch} from 'react-redux';
// create a component
const Home = ({navigation, route}) => {
  const editData = route.params?.editProductData;
  const ID = route.params?.editProductData?.count;
  // console.log('id', ID);
  //console.log('edit data', editData);

  const [names, setnames] = useState();
  const [age, setage] = useState();
  const [city, setcity] = useState();
  const [count, setcount] = useState(1);
  const dispatch = useDispatch();

  const onSubmitPress = () => {
    let obj = {
      names: names,
      age: age,
      city: city,
      count: count,
    };
    dispatch(ONSUBMIT(obj));
    setnames('');
    setage('');
    setcity('');
    setcount(count + 1);
  };

  const onList = () => {
    navigation.navigate('ListsData');
  };

  const onUpadtePress = () => {
    // console.log('hellooooo');
    let obj1 = {
      names: names,
      age: age,
      city: city,
      count: ID,
    };
    dispatch(ONEDIT(obj1));
  };

  useEffect(() => {
    //console.log(' 1 useEffect');
    if (editData) {
      setnames(editData?.names);
      setage(editData?.age);
      setcity(editData?.city);
      //console.log('INDEX NO ', pasingData.indexOf(editData));
    }
  }, [editData]);

  return (
    <View style={styles.container}>
      <Button
        holderName="name"
        values={names}
        onChangeText={value => setnames(value)}
      />
      <Button
        holderName="age"
        values={age}
        onChangeText={value => setage(value)}
      />
      <Button
        holderName="city"
        values={city}
        onChangeText={value => setcity(value)}
      />
      <TouchableOpacity onPress={() => onSubmitPress()} style={styles.Button}>
        <Text>Subit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button} onPress={() => onList()}>
        <Text>List</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button} onPress={() => onUpadtePress()}>
        <Text>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DEF5E5',
  },
  Button: {
    backgroundColor: '#9ED5C5',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 10,
    margin: 5,
  },
});

//make this component available to the app
export default Home;
