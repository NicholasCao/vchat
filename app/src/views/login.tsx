import * as React from "react"
import { TextInput, TouchableOpacity, StyleSheet, Text, View, KeyboardAvoidingView } from "react-native"
// import { NavigationActions } from 'react-navigation';

import config from '../config'
import storage from '../utils/storage'

// type Props = {};
interface Props {
  navigation?: any
}
export default class Login extends React.Component<Props,any> {
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
        <KeyboardAvoidingView behavior="padding">
          <TextInput
            style={styles.username}
            value={this.state.username}
            onChangeText={username => this.setState({username})}
            placeholder={'Username'}
            autoCapitalize={'none'}
            placeholderTextColor={'#AAA'}
            underlineColorAndroid={'transparent'}
          />
        </KeyboardAvoidingView>
        <KeyboardAvoidingView behavior="padding">
          <TextInput
            style={styles.password}
            value={this.state.password}
            onChangeText={password => this.setState({password})}
            placeholder={'Password'}
            autoCapitalize={'none'}
            placeholderTextColor={'#AAA'}
            secureTextEntry={true}
            underlineColorAndroid={'transparent'}
            keyboardType={'numeric'}
          />
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.loginBox} activeOpacity={0.7} onPress={() => this.login()}>
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signUpBox}>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <TouchableOpacity activeOpacity={0.7} onPress={() => this.signUp()}>
            <Text style={styles.signUp}> Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  login():void {
    let { username, password } = this.state
    let headers =  {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
    fetch(config.root + '/user/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers
    }).then(res => res.json())
    .then(json => {
      console.log(json)
      if(json.success){
        this.props.navigation.navigate('Home')
        storage.set('token', json.token)
        storage.set('username', json.user.username)
        storage.set('password', json.user.password)
        storage.set('id', json.user._id)
        storage.set('contacts', json.contacts)
      }
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  signUp():void {
    console.log(1)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  login: {
    color: '#4BA0AA',
    fontSize: 23,
  },
  loginBox: {
    marginBottom: 90,
    width: 65
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