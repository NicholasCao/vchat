import * as React from 'react'
import { TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native'

import config from '../config'
import Svg from '../compoents/svg'
import Head from '../compoents/head'
import storage from '../utils/storage'
import Contacts from './contacts';

interface Props {
  navigation?: any
}
interface State{
  friendUsername: string,
  username: string,
  contacts: any[],
  result: ''
}
export default class Profile extends React.Component<Props,State> {
  constructor(props:any) {
    super(props)
    this.state = {
      friendUsername: '',
      username: 'username',
      contacts: [],
      result: ''
    }
  }
  componentDidMount() {
    storage.get('contacts', (err:any, data: any[]) =>{
      let contacts = []
      for(let contact of data){
        contacts.push(contact.username)
      }
      this.setState({ contacts })
    })
  }
  search():void {
    this.state.friendUsername
    fetch(`https://${config.root}/user/search/${this.state.friendUsername}`, {
      method: 'GET',
    })
    .then(res => res.json())
    .then(json => {
      console.log(json)
      if(json.success){
        this.props.navigation.navigate('Profile', {
          username: json.user.username,
          name: json.user.name,
          isFriend: this.state.contacts.indexOf(this.state.username) !== -1
        })
      } else {
        this.setState({ result: 'User not found' })
      }
    })
    .catch(e => console.log(e))
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
            onChangeText={friendUsername => this.setState({friendUsername, result: ''})}
            placeholder={'Username'}
            autoCapitalize={'none'}
            placeholderTextColor={'#BEBEBE'}
            underlineColorAndroid={'transparent'}
            onSubmitEditing={() => this.search()}
          />
        </View>
        <View style={styles.else}>
          <Text style={styles.username}>My Username: {this.state.username}</Text>
          <Text style={styles.result}>{this.state.result}</Text>
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
    backgroundColor: '#EDEDED',
    alignItems: 'center'
  },
  username: {
    fontSize: 17,
    paddingTop: 20,
    color: '#777'
  },
  result: {
    fontSize: 20,
    paddingTop: 40
  }
})