import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Login from './src/views/login'

type Props = {};
export default class App extends  React.Component<Props> {
  render():React.ReactNode {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Welcome!</Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      // </View>
      <Login/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
