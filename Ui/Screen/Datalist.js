//import liraries
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {DELETE, ONEDIT} from '../Redux/Action/Action';
const ListsData = ({route, navigation}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state?.user?.userData);
  console.log('data++++++', data);

  const onDelet = item => {
    console.log('itemitemitem', item);
    dispatch(DELETE(item));
  };
  console.log('onDelet', onDelet);
  const onEditPress = item => {
    dispatch(ONEDIT(item));

    navigation.navigate('Home', {
      editProductData: item,
    });
  };
  // useEffect(() => {
  //console.log(' 1 useEffect');
  //if (data) {
  //setnames(editData?.names);
  // setage(editData?.age);
  // setcity(editData?.city);
  // const data = useSelector(state => state?.user?.userData);
  //console.log('INDEX NO ', pasingData.indexOf(editData));
  // }
  // }, [data]);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={{fontSize: 35, padding: 10}}>{'<'}</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={({item}) => {
          console.log('itemitem', item);
          return (
            <View style={styles.subcontainer}>
              <View>
                <Text> NAME:-{item.names}</Text>
                <Text> AGE:-{item.age}</Text>
                <Text> CITY:-{item.city}</Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => onEditPress(item)}>
                  <Text style={styles.buttonEdi}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDelet(item)}>
                  <Text style={styles.buttonEdi}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9AF7E',
    // alignItems: 'center',
  },
  subcontainer: {
    backgroundColor: '#FFEFD6',
    borderRadius: 15,
    margin: 5,
    padding: 5,
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonEdi: {
    backgroundColor: '#7D8F69',
    borderRadius: 50,

    padding: 5,
  },
  Button: {
    backgroundColor: '#9ED5C5',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 10,
    margin: 5,
  },
});
export default ListsData;
