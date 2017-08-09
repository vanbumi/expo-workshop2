import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={{ flex: 1, width: 400 }} 
          source={ require('./assets/cat.jpg') } 
        />
        <Text>
          Hello Cat! and Man!
        </Text>
        <Image 
          style={{ flex: 1, width: 200 }} 
          source={{ uri: 'https://www.watertankfactory.com.au/wp-content/uploads/2015/08/Smiling-young-casual-man-2.png' }} 
        />
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
