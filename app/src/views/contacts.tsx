import * as React from 'react'
import { Image, TouchableHighlight, StyleSheet, Text, View, FlatList } from 'react-native'

import Svg from '../compoents/svg'
import Head from '../compoents/head'
import storage from '../utils/storage'

interface Props {
  navigation?: any
}
interface State {
  contacts: Object[]
}

export default class Contacts extends React.Component<Props,State> {
  static navigationOptions = {
    tabBarIcon: (option: any) => {
      let iconName = 'contacts' + (option.focused ? '' : '2')
      return (
        <Svg icon={iconName} size={35}/>
      )
    },
  }
  constructor(props:any) {
    super(props)
    this.state = {
      contacts: [],
    }
  }

  componentDidMount() {
    storage.get('contacts', (err:any, data: Object[]) =>{
      this.setState({contacts: data})
    })
  }
  // 使用箭头函数使this指向 Contacts
  renderItem = (data:any) => {
    return (
      <TouchableHighlight onPress={() => this.viewProfile(data.item.username, data.item.name)} underlayColor={'#E8E8E8'}>
        <View style={styles.container}>
          <Image
            style={styles.avater}
            source={require('../../static/avatar.jpg')}
          />
          <Text style={styles.name}>
            {data.item.name}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
  

  render():React.ReactNode {
    return (
      <View>
        <Head title='Contacts'/>
        <TouchableHighlight onPress={() => 1} underlayColor={'#E8E8E8'}>
          <View style={styles.container}>
            <View style={styles.svgIcon}>
              <Svg icon={'newFriends'} size={36}/>
            </View>
            <Text style={styles.name}>
              New Friends
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => 1} underlayColor={'#E8E8E8'}>
          <View style={styles.container}>
            <View style={styles.svgIcon}>
              <Svg icon={'groupChats'} size={36}/>
            </View>
            <Text style={styles.name}>
              Group Chats
            </Text>
          </View>
        </TouchableHighlight>
        <View style={styles.else}></View>
        <FlatList
          data={this.state.contacts}
          renderItem={this.renderItem}
          extraData={this.state}
          keyExtractor={(item:any, index:any) => index.toString()}
        />
      </View>
    )
  }

  viewProfile(username:any, name:any):void {
    this.props.navigation.navigate('Profile', {
      username,
      name,
      isFriend: true
    })
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingBottom: 0
  },
  svgIcon: {
    borderRadius: 4 // don't work
  },
  avater: {
    width: 36,
    height: 36,
    padding: 10,
    borderRadius: 4
  },
  name: {
    marginLeft: 10,
    fontSize: 18,
    color: '#333',
    borderBottomWidth: .3,
    borderBottomColor: '#CCC',
    paddingBottom: 12,
    paddingTop: 12,
    flex: 1
  },
  else: {
    backgroundColor: '#E8E8E8',
    height: 20
  }
})