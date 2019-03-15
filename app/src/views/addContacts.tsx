import * as React from "react"
import { TextInput, TouchableOpacity, StyleSheet, Text, View } from "react-native"

import Svg from '../compoents/svg'
import Head from '../compoents/head'

interface Props {
  navigation?: any
}
export default class Profile extends React.Component<Props,any> {
  constructor(props:any) {
    super(props)
    this.state = {
      username: 'username'
    }
  }
  render():React.ReactNode {
    return (    
      <View style={styles.container}>
        <Head title={'Add Contacts'} noIcon={true}/>
        <View style={styles.inputBox}>
          <TextInput></TextInput>
        </View>
        <View style={styles.else}><Text style={styles.username}>My Username: {this.state.username}</Text></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputBox: {
    // flex: 1,
    backgroundColor: '#FFF',
  },
  else: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EDEDED',
    justifyContent: 'center'
  },
  username: {
    fontSize: 17,
    paddingTop: 20,
    color: '#777'
  }
})