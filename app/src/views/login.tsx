import * as React from "react"
import { TextInput, TouchableOpacity, StyleSheet, Text, View } from "react-native"
import { NavigationActions } from 'react-navigation';
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
        <TextInput
          style={styles.username}
          onChangeText={username => this.setState({username})}
          placeholder={'Username'}
          autoCapitalize={'none'}
          placeholderTextColor={'#AAA'}
          underlineColorAndroid={'transparent'}
        />
        <TextInput
          style={styles.password}
          onChangeText={password => this.setState({password})}
          placeholder={'Password'}
          autoCapitalize={'none'}
          placeholderTextColor={'#AAA'}
          secureTextEntry={true}
          underlineColorAndroid={'transparent'}
          keyboardType={'numeric'}
        />
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
    console.log(1)
    this.props.navigation.navigate('Home')
  }
  signUp():void {
    console.log(1)
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
    // marginBottom: 90,
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