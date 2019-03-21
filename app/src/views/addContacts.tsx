import * as React from 'react'
import { TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native'

import config from '../config'
import Svg from '../compoents/svg'
import Head from '../compoents/head'

interface Props {
  navigation?: any
}
export default class Profile extends React.Component<Props,any> {
  constructor(props:any) {
    super(props)
    this.state = {
      friendUsername: '',
      username: 'username'
    }
  }
  search():void {
    this.state.friendUsername
    fetch(`https://${config.root}/user/search/${this.state.friendUsername}`, {
      method: 'GET',
    }).then(res => res.json())
    .then(json => {
      console.log(json)
      if(json.success){
        this.props.navigation.navigate('Profile')
      }
    })
  }
  render():React.ReactNode {
    return (    
      <View style={styles.container}>
        <Head title={'Add Contacts'} backIcon={true} noIcon={true} morePadding={true}/>
        <View style={styles.inputBox}>
          <View style={styles.serchIcon}>
            <Svg icon={'search2'} size={21}/>
          </View>
          <TextInput
           style={styles.input}
           value={this.state.friendUsername}
           onChangeText={friendUsername => this.setState({friendUsername})}
           placeholder={'Username'}
           autoCapitalize={'none'}
           placeholderTextColor={'#BEBEBE'}
           underlineColorAndroid={'transparent'}
           onSubmitEditing={() => this.search()}
          />
        </View>
        <View style={styles.else}>
          <Text style={styles.username}>My Username: {this.state.username}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  serchIcon: {
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20
  },
  input: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 17,
    flex: 1,
    color: '#666'
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