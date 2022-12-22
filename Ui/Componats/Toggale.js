import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../helper/colorConst';
import {wp, hp} from '../Screen/Globelfunction';

export default function Toggle(props) {
  return (
    <TouchableOpacity
      onPress={props.onManage}
      style={[styles.container, {backgroundColor: props.bgColor}]}>
      <Text
        style={{
          color: props.textColor,
        }}>
        {props.buttonName}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D8D9CF',
    overflow: 'hidden',

    paddingHorizontal: wp(6),
    paddingVertical: hp(1.6),
    borderRadius: 15,
    borderColor: '#87A2FB',
    borderWidth: 2,
    // justifyContent: 'flex-start',
    backgroundColor: 'red',
    alignSelf: 'flex-start',
    //marginHorizontal: 5,

    color: '#000',
    marginHorizontal: wp(0.4),
  },
});
