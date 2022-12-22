import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {hp, wp} from '../Globelfunction';
import Modal from 'react-native-modal';
import Toggle from '../../Componats/Toggale';
import {isEmpty} from 'lodash';

const Apicalling = () => {
  const [data, setdata] = useState([]);
  const [visible, setvisible] = useState(false);
  const [newdata, setnewdata] = useState();
  const [first, setfirst] = useState('');
  const [filterModal, setfilterModal] = useState(false);
  const [Texts, setTexts] = useState();
  const [subText, setsubText] = useState('');
  const [bloodgrup, setbloodgrup] = useState('');
  const [storeAge, setstoreAge] = useState('');
  const [filterText, setfilterText] = useState([]);
  const [selectedItemFilter, setSelectedItemFilter] = useState([]);
  const age = [
    {start: 10, end: 20},
    {start: 21, end: 30},
    {start: 31, end: 40},
    {start: 41, end: 51},
  ];

  const gender = ['male', 'female'];
  const bloodGroup = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB-'];

  const userData = async () => {
    try {
      const respons = await fetch('https://dummyjson.com/users');
      const apidata = await respons.json();
      setdata(apidata?.users);
    } catch (error) {
      console.log('errorrrrr', error);
    }
  };

  useEffect(() => {
    userData();
  }, []);

  const onTextChange = text => {
    setTexts(text);
  };

  const onVisible = item => {
    setvisible(!visible);
    setnewdata(item);
  };

  const onFilter = () => {
    setfilterModal(!filterModal);
    setSelectedItemFilter('');
    setsubText('');
    setbloodgrup('');
    setstoreAge('');
  };

  const onAge = value => {
    setsubText(value);
  };

  const onBludGrup = value => {
    setbloodgrup(value);
  };

  const onageStore = value => {
    setstoreAge(value);
  };

  useEffect(() => {
    if (first != '') {
      const result = data?.filter(user => {
        return (
          user.firstName.includes(first) ||
          user.maidenName.includes(first) ||
          user.lastName.includes(first)
        );
      });
      setfilterText(result);
    }
  }, [first]);

  const onFilterApplyPress = () => {
    const newData = data?.filter(user => {
      return user.gender.startsWith(subText);
    });
    const dataBlodGRup = newData?.filter(user =>
      user.bloodGroup.startsWith(bloodgrup),
    );
    const dataAge = dataBlodGRup?.filter(user => {
      return isEmpty(storeAge)
        ? dataBlodGRup
        : storeAge?.start < user.age && user.age < storeAge?.end;
    });
    setSelectedItemFilter(dataAge);
    setfilterModal(!filterModal);
  };
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TextInput
          value={first}
          onChangeText={value => setfirst(value)}
          style={{
            flex: 1,
            fontSize: 16,
          }}
        />
        <TouchableOpacity onPress={onFilter}>
          <Image
            source={require('../../assets/images/icons8.png')}
            style={{height: hp(2.7), width: wp(7)}}
          />
        </TouchableOpacity>

        {/* Filter image modal =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      </View>

      {/* FIlter data =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      <FlatList
        data={
          first == ''
            ? selectedItemFilter.length != 0
              ? selectedItemFilter
              : data
            : filterText
        }
        renderItem={({item}) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => onVisible(item)} // onitemPress
                style={styles.flexContainer}>
                <Image
                  source={{uri: item?.image}}
                  style={styles.profileImage}
                />
                <View
                  style={{
                    justifyContent: 'space-around',
                  }}>
                  <Text style={styles.textColorModel}>
                    Name:-{item?.firstName} {item?.maidenName} {item?.lastName}
                  </Text>
                  <Text style={styles.textColorModel}>
                    Age:-{item?.age} <Text> Birth Date:-{item?.birthDate}</Text>
                  </Text>
                  <Text style={styles.textColorModel}>
                    Gender:-{item.gender}
                  </Text>
                  <Text style={styles.textColorModel}>NO:-{item?.phone}</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />

      {/* MODAL ONCLICK =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>. */}
      <Modal isVisible={visible}>
        <View style={styles.modalContainer}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image source={{uri: newdata?.image}} style={styles.modalImage} />
            <View
              style={{
                justifyContent: 'space-evenly',
              }}>
              <Text style={styles.textColorModel}>
                Name:- {newdata?.firstName} {newdata?.maidenName}{' '}
                {newdata?.lastName}
              </Text>
              <Text style={styles.textColorModel}>Age:- {newdata?.age}</Text>
              <Text style={styles.textColorModel}>
                Birth Date:- {newdata?.birthDate}
              </Text>
              <Text style={styles.textColorModel}>
                Gender:- {newdata?.gender}
              </Text>
              <Text style={styles.textColorModel}>NO:- {newdata?.phone}</Text>
            </View>
          </View>
          <View style={styles.modalBottom}>
            <Text style={styles.textColorModel}>Email:- {newdata?.email}</Text>
            <Text style={styles.textColorModel}>
              Blood Group:- {newdata?.bloodGroup}
            </Text>
            <Text style={styles.textColorModel}>
              Hight:- {newdata?.height}
              {'      '}
              <Text style={styles.textColorModel}>
                Wight:- {newdata?.weight}
              </Text>
            </Text>
            <Text style={styles.textColorModel}>
              address:- {newdata?.address.address}, {newdata?.address.city},{' '}
              {newdata?.address.state}, {newdata?.address.postalCode}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setvisible(!visible)}
          style={styles.okBotton}>
          <Text>OK</Text>
        </TouchableOpacity>
      </Modal>
      <Modal isVisible={filterModal}>
        <TouchableOpacity
          onPress={onFilter}
          activeOpacity={1}
          style={{flex: 1}}></TouchableOpacity>
        <View
          style={{
            backgroundColor: '#fff',
            paddingTop: hp(3),
            paddingHorizontal: wp(4),
            paddingBottom: hp(2),
            borderRadius: 20,
          }}>
          {/* Filter image container =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.  */}
          <Text style={{color: '#000', marginBottom: hp(2)}}>SHORT BY</Text>

          <View
            style={{
              width: '100%',
              // flex: 1,
              flexDirection: 'row',
            }}>
            <FlatList
              horizontal
              style={{flex: 1}}
              data={['age', 'gender', 'bloodGroup']}
              renderItem={({item, index}) => {
                return (
                  <Toggle
                    buttonName={item}
                    onManage={() => onTextChange(item)}
                    bgColor={Texts === item ? '#BCCEF8' : '#fff'}
                  />
                );
              }}
            />
          </View>

          {/* Filter iMage Sub Container =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.>. */}

          <View
            style={{
              backgroundColor: 'rgba(12,25,255,0.1)',
              flexWrap: 'wrap',
              flexDirection: 'row',
              marginTop: hp(3),
              borderRadius: 10,
              padding: hp(1),
            }}>
            {Texts === 'gender' ? (
              <FlatList
                data={gender}
                columnWrapperStyle={{flexWrap: 'wrap'}}
                numColumns={3}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      onPress={value => {
                        onAge(item);
                      }}>
                      <Text
                        style={[
                          styles.clikabalBotton,
                          {
                            backgroundColor:
                              subText == item ? '#FFEDED' : 'transparent',
                          },
                        ]}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            ) : Texts === 'bloodGroup' ? (
              <FlatList
                data={bloodGroup}
                columnWrapperStyle={{flexWrap: 'wrap'}}
                numColumns={3}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      onPress={value => {
                        onBludGrup(item);
                      }}>
                      <Text
                        style={[
                          styles.clikabalBotton,
                          {
                            backgroundColor:
                              bloodgrup == item ? '#FFEDED' : 'transparent',
                          },
                        ]}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            ) : (
              <FlatList
                data={age}
                columnWrapperStyle={{flexWrap: 'wrap'}}
                numColumns={3}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      onPress={value => {
                        onageStore(item);
                      }}>
                      <Text
                        style={[
                          styles.clikabalBotton,
                          {
                            backgroundColor:
                              storeAge.start == item.start
                                ? '#FFEDED'
                                : 'transparent',
                          },
                        ]}>
                        {item.start}-{item.end}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            )}
          </View>

          <TouchableOpacity
            onPress={onFilterApplyPress}
            style={styles.filterStyle}>
            <Text style={{color: '#000'}}>Filter</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={onFilter}
          style={{flex: 1}}></TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Apicalling;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AEBDCA',
    paddingTop: hp(5),
  },
  textColorModel: {
    color: '#000',
    fontSize: 15,
  },
  profileImage: {
    height: hp(12),
    width: wp(18),
    marginRight: wp(1),
  },
  flexContainer: {
    flex: 1,
    margin: hp(1),
    alignSelf: 'center',
    width: '85%',
    backgroundColor: '#F5EFE6',
    borderRadius: 15,
    flexDirection: 'row',
  },
  subContainer: {
    height: hp(7),
    backgroundColor: '#DEF5E5',
    marginHorizontal: wp(8),
    paddingHorizontal: wp(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#FFE6F7',
    height: hp(30),
    borderRadius: 20,
  },
  modalImage: {
    height: hp(15),
    width: wp(25),
    backgroundColor: '#FFABE1',
    borderRadius: 20,
    marginRight: wp(2),
  },
  okBotton: {
    backgroundColor: '#937DC2',
    alignSelf: 'center',
    padding: wp(2.66),
  },
  modalBottom: {
    padding: wp(2.13),
    flex: 1,
    justifyContent: 'space-around',
  },
  filterHeder: {
    backgroundColor: '#D8D9CF',
    overflow: 'hidden',
    paddingHorizontal: wp(6),
    paddingVertical: hp(1.6),
    borderRadius: 15,
    borderColor: '#87A2FB',
    borderWidth: 2,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    color: '#000',
  },
  clikabalBotton: {
    paddingHorizontal: wp(5.33),
    paddingVertical: hp(1.4),
    borderRadius: 10,
    margin: hp(0.7),
    color: '#000',
    borderColor: '#87A2FB',
    borderWidth: 1,
    overflow: 'hidden',
  },
  filterStyle: {
    height: hp(4),
    borderColor: 'green',
    borderWidth: 1,
    alignSelf: 'center',
    width: wp(15),
    marginTop: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});
