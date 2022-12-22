import {
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {hp, wp} from './Globelfunction';
import {Platform} from 'react-native';
export default function Signup({navigation}) {
  const onBack = () => {
    navigation.navigate('Signin');
  };
  const onSignin = () => {
    navigation.navigate('Signin');
  };
  return (
    <View style={styles.container}>
      <StatusBar
        // barStyle="dark-content"
        hidden={true}
        // backgroundColor="#00BCD4"
        // translucent={true}
      />
      <KeyboardAwareScrollView
        bounces={false}
        // extraScrollHeight={-200}
        style={styles.keyBoardScrool}>
        {/* first View */}
        <View>
          <ImageBackground
            style={styles.imagePurpal}
            source={require('../assets/images/ImageSecondScreen1.png')}></ImageBackground>

          <View style={styles.heder}>
            <Text style={styles.hederText}>Create</Text>
            <Text style={styles.hederText}>Account</Text>
          </View>
        </View>
        {/* second */}
        <View style={styles.textContainer}>
          <TextInput
            placeholder="Name"
            placeholderTextColor={'rgba(255, 255, 255,  1)'}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Your Email"
            placeholderTextColor={'rgba(255, 255, 255,  1)'}
            style={styles.textInput}
          />

          <TextInput
            placeholder="Your Password"
            placeholderTextColor={'rgba(255, 255, 255,  1)'}
            style={styles.textInput}
          />
        </View>
        {/* Third */}
        <View style={styles.bottomConatiner}>
          <Image
            style={styles.imageWhite}
            source={require('../assets/images/ImageSecondScreen2.png')}
          />
          <View style={{justifyContent: 'space-evenly'}}>
            <View style={styles.bottomSubcontainer}>
              <TouchableOpacity>
                <Text style={styles.textSignUp}>Sign up</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onSignin()} style={styles.icons}>
                <Image
                  style={{
                    height: 20,
                    width: 25,
                    height: 16,
                    marginTop: 25,

                    //marginLeft: 10,
                    //alignItems: 'center',
                    //alignSelf: 'center',
                  }}
                  source={require('../assets/images/right-arrow.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.signIn}>
              <TouchableOpacity onPress={() => onSignin()}>
                <View style={styles.borderSignin} />
                <Text style={styles.textSignin}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <TouchableOpacity onPress={() => onBack()} style={styles.onBack}>
        {/* <Text style={{fontSize: 40}}>{'<'}</Text> */}
        <Image
          style={{height: 20, width: 20, marginTop: 30, marginLeft: 10}}
          source={require('../assets/images/LeftArrow.png')}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //top: 20,
  },
  onBack: {
    margin: 10,
    position: 'absolute',
  },
  keyBoardScrool: {
    // position: 'absolute',
    //  alignSelf: 'center',
    //  top: '35%',
    flex: 1,
    backgroundColor: '#F9ABAE',
  },
  imagePurpal: {
    height: hp(42),
    width: wp(100),
    // alignSelf: 'center',
    //resizeMode: 'stretch',
  },
  heder: {
    position: 'absolute',
    marginTop: wp(35),
    marginLeft: wp(9.6),
  },
  hederText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 35,
  },
  textContainer: {
    alignSelf: 'center',
    marginTop: 30,
    // backgroundColor: '#808080',
    // flex: 1,
  },
  textInput: {
    height: hp(7.38),
    width: wp(80),
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 15,
    marginBottom: 20,
    padding: 15,
  },
  bottomConatiner: {
    marginTop: 23,
    // flex: 1,
    //backgroundColor: 'yellow',
  },
  imageWhite: {
    height: Platform.OS === 'ios' ? hp(28.94) : hp(27.94),
    width: Platform.OS === 'ios' ? wp(60) : wp(50),
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  bottomSubcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 36,
    alignItems: 'center',
  },
  textSignUp: {
    fontSize: 30,
    color: 'black',
    fontWeight: '800',
  },
  icons: {
    backgroundColor: '#8A4C7D',
    width: 64,
    height: 64,
    alignItems: 'center',
    //alignSelf: 'center',
    borderRadius: 50,
  },
  signIn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 36,
    height: 120,
  },
  borderSignin: {
    backgroundColor: '#E4DB7C',
    height: 7,
  },
  textSignin: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: -24,
    // borderBottomWidth: 5,
    //   borderBottomColor: '#E4DB7C',
  },
});
