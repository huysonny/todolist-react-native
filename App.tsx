/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import {fontFamilies} from './src/constants/fontFamiles';

const App = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: '#fafafa',
          fontSize: 18,
          fontFamily: fontFamilies.regular,
        }}>
        Wellcome to my first app
      </Text>
      <Text style={styles.title}>Todo List</Text>
      <Button title="Helllo" onPress={() => {}} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: '#fff',
  },
});
