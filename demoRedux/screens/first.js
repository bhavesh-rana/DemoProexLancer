import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../Redux/Action/Actiontype';
const First = () => {
  //   const [first, setfirst] = useState(0);
  const dispatch = useDispatch();
  const onIncrement = () => {
    //     setfirst(first + 1);
    dispatch(increment());
    console.log(dispatch);
  };
  const onDecrement = () => {
    //     setfirst(first - 1);
    dispatch(decrement());
    console.log(dispatch);
  };

  const data = useSelector(state => state);
  console.log(data);
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        width: '70%',

        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <TouchableOpacity onPress={onIncrement}>
        <Text style={{fontSize: 30}}>+</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 30}}>{data.count}</Text>
      <TouchableOpacity onPress={onDecrement}>
        <Text style={{fontSize: 30}}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

export default First;

const styles = StyleSheet.create({});
