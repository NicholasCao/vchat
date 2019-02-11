import * as React from "react"
import { TextInput, Button, StyleSheet, Text, View } from "react-native"

// type Props = {};
export default class Login extends React.Component {
  constructor(props:any) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  render():React.ReactNode {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>Vchat</Text>
        <Text style={styles.welcome}>Welcome back,</Text>
        <Text style={styles.continue}>sign in to continue to Vchat.</Text>
        <TextInput
        style={styles.username}
        onChangeText={(username) => this.setState({username})}
        placeholder={'Username'}
        autoCapitalize={'none'}
        placeholderTextColor={'#AAA'}
        />
        <TextInput
        style={styles.password}
        onChangeText={(username) => this.setState({username})}
        placeholder={'Password'}
        autoCapitalize={'none'}
        placeholderTextColor={'#AAA'}
        />
        <Text style={styles.login}>Login</Text>
        <View style={styles.signUpBox}>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <Text style={styles.signUp}> Sign up</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 70,
    backgroundColor: '#FFF',
    paddingBottom: 40
  },
  head: {
    fontSize: 28,
    marginTop: 10,
    marginBottom: 55,
    color: '#484850'
  },
  welcome: {
    fontSize: 30,
    color: '#555'
  },
  continue: {
    fontSize: 29,
    marginBottom: 75,
    color: '#AAA'
  },
  username: {
    height: 30,
    color: '#474B5A',
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 25,
  },
  password: {
    height: 30,
    color: '#474B5A',
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 70,
    // borderColor: '#000',
    // borderWidth: 1
  },
  login: {
    color: '#4BA0AA',
    fontSize: 23,
    marginBottom: 90,
  },
  signUpBox: {
    flex: 1,
    flexDirection: 'row',
  },
  signUpText: {
    color: '#AAA',
    fontSize: 15
  },
  signUp: {
    color: '#888',
    fontSize: 15
  }
})