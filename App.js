import React from 'react';
import { StyleSheet, Text, View , Platform, Image, ImageBackground } from 'react-native';
import Landing from './src/Landing'
var myBackground =require('./assets/icons/landing.jpg');
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Landing/>
      </View>
    );
  }
}

const styles = {
  container: {
    flex:1,
    marginTop: Platform.OS === 'android' ? 24 : 0
  }
}
