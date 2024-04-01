import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wellcome to my first app</Text>
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
    fontWeight: '700',
    fontSize: 22,
    color: '#fff',
  },
});
