import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={{ flex: 1 }} 
          source={ require('./assets/cat.jpg') } 
        />
        <Text>
          Hello Cat! and Man!
        </Text>
        <Image style={{ flex: 1 }} source={ require('./assets/man.jpg') } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
