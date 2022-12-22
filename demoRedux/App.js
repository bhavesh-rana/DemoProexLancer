import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import First from './screens/first';
import {Provider} from 'react-redux';
import {store} from './Redux/store/store';
const App = () => {
  return (
    <Provider store={store}>
      <First />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
});
