import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Platform,
  StatusBar,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {hp, wp} from './Globelfunction';

export default function Signin({navigation}) {
  const [datas, setData] = useState([]);

  const data = [
    {
      item: 'abc',
    },
    {
      item: 'abc',
    },
    {
      item: 'abc',
    },
    {
      item: 'abc',
    },
    {
      item: 'abc',
    },
    {
      item: 'abc',
    },
    {
      item: 'abc',
    },
    {
      item: 'abc',
    },
    {
      item: 'abc',
    },
  ];

  const onSignup = () => {
    navigation.navigate('Signup');
  };
  const onBack = () => {
    navigation.navigate('Signup');
  };
  return (
    <View style={styles.container}>
      <StatusBar
        // barStyle="dark-content"
        hidden={true}
        // backgroundColor="#00BCD4"
        // translucent={true}
      />
      <KeyboardAwareScrollView bounces={false} style={styles.keybordScroll}>
        <View style={{flex: 1}}>
          <Image
            style={styles.imageYellow}
            source={require('../assets/images/Image3.png')}
          />
          <Image
            style={styles.imagePurpul}
            source={require('../assets/images/Image1.png')}
          />
          <ImageBackground
            style={styles.imageTan}
            source={require('../assets/images/Image2.png')}></ImageBackground>
          <View style={styles.heder}>
            <Text
              style={
                styles.hederText
                // {color: Platform.OS === 'ios' ? 'red' : 'blue'},
              }>
              {`Welcome\nBack`}
            </Text>
          </View>
        </View>
        <View style={styles.subContainer}>
          <TextInput
            placeholder="Your Email"
            placeholderTextColor={'rgba(0,0,0,0.8)'}
            style={styles.textInput}
            value={'name'}
            onChangeText={() => {}}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={'rgba(0,0,0,0.8)'}
            style={styles.textInput}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomCommen}>
            <TouchableOpacity>
              <Text style={styles.textSignin}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onSignup()}
              style={styles.iconBackground}>
              <Image
                style={{
                  height: 20,
                  width: 25,
                  height: 16,
                  marginTop: 20,
                }}
                source={require('../assets/images/right-arrow.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.bottomCommen}>
            <TouchableOpacity onPress={() => onSignup()}>
              <View style={styles.borderSignup} />
              <Text style={styles.signUp}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.borderForgotPassword} />
              <Text style={styles.forgotPassword}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>

      {/* <TouchableOpacity onPress={() => onBack()} style={styles.onBackArrow}>
        <Image
          style={{height: 20, width: 20, marginTop: 20, marginLeft: 10}}
          source={require('../assets/images/LeftArrow.png')}
        />
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={() => setData([...datas, 0])}
        style={{
          height: 50,
          width: 200,
          borderRadius: 10,
          backgroundColor: 'lightblue',
          marginTop: 50,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Add</Text>
      </TouchableOpacity> */}
      {/* <FlatList
        data={data}
        // data={[]}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                height: 50,
                width: '100%',
                backgroundColor: 'red',
                marginTop: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>{item?.item}</Text>
            </View>
          );
        }}
        ListEmptyComponent={() => {
          return (
            <View
              style={{
                height: 100,
                width: 300,
                borderRadius: 16,
                backgroundColor: 'grey',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 100,
                alignSelf: 'center',
              }}> */}
      {/* <Text style={{fontSize: 30}}>No Item</Text>
            </View>
          );
        }}
      /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  onBackArrow: {
    // backgroundColor: 'red',
    //  marginBottom: 10,
    margin: 10,
    position: 'absolute',
  },
  keybordScroll: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageYellow: {
    height: hp(44.33),
    width: wp(34.66),
    alignSelf: 'flex-end',
    position: 'absolute',
  },
  imagePurpul: {
    height: hp(30.78),
    width: wp(100),
    alignSelf: 'center',
    resizeMode: 'stretch',
  },
  imageTan: {
    height: hp(12.31),
    width: wp(46.66),
    position: 'absolute',
  },
  heder: {
    position: 'absolute',
    marginTop: wp(31.8),
    marginLeft: wp(12.26),
    //height: 210,
    //width: 210,
    // backgroundColor: 'black',
  },
  hederText: {
    color: '#fff',
    fontWeight: '600',

    fontSize: 29,
  },
  subContainer: {
    alignSelf: 'center',
    top: hp(14),
    marginBottom: 10,
    // backgroundColor: 'red',
  },
  textInput: {
    height: hp(7.38),
    width: wp(80.8),
    backgroundColor: '#E6E6E6',
    borderRadius: 15,
    marginBottom: 20,
    padding: 15,
  },
  bottomContainer: {
    // backgroundColor: '#808080',
    marginTop: 10,
    //top: 70,
    top: hp(4),
    height: hp(42),
    //  flex: 1,
    justifyContent: 'space-around',
  },
  bottomCommen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(9.86),
  },
  textSignin: {
    fontSize: 30,
    color: 'black',
    fontWeight: '800',
  },
  iconBackground: {
    backgroundColor: '#8A4C7D',
    width: 55,
    height: 55,
    alignItems: 'center',
    borderRadius: 50,
  },
  icon: {
    fontSize: 40,
    color: '#fff',
  },
  signUp: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: -25,
    // borderBottomWidth: 5,
    //   borderBottomColor: '#E4DB7C',
  },
  borderSignup: {
    backgroundColor: '#E4DB7C',
    height: 7,
  },
  forgotPassword: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: -25,
    // borderBottomWidth: 5,
    //   borderBottomColor: '#E4DB7C',s
  },
  borderForgotPassword: {
    backgroundColor: '#F8969C',
    height: 7,
  },
});
