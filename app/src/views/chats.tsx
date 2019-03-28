import * as React from 'react'
import { FlatList, TouchableOpacity, StyleSheet, Text, View } from 'react-native'

import StatusBar from '../compoents/statusBar'
import Head from '../compoents/head'
import ChatBox from '../compoents/chatBox' 
import Svg from '../compoents/svg'

import conversation from '../utils/conversation'
import contacts from '../utils/contacts'
import storage from '../utils/storage'

interface Props {
  navigation?: any
}
interface State {
  chats: object[],
  contacts: any
}

export default class Chats extends React.Component<Props,State> {
  static navigationOptions = {
    tabBarIcon: (option: any) => {
      let iconName = 'chats' + (option.focused ? '' : '2')
      return (
        <Svg icon={iconName} size={28}/>
      )
    },
  }
  constructor(props:any) {
    super(props)
    // contacts数组转为对象
    let contactsArray = this.props.navigation.state.params.contacts,
    contacts:any = {}
    for ( let v of contactsArray){
      contacts[v.username] = v
    }
    this.state = {
      chats: [],
      contacts: contacts
    }
    // 路由生命周期
    this.props.navigation.addListener('didFocus', () => {
      conversation.onchange = () => {
        let chats:object[] = []
        Object.keys(conversation.conversations).forEach((key) => {
          let chat = conversation.conversations[key]
          chats.push({
            name: '1',
            username: key,
            lastMessage: chat[chat.length - 1].message,
            lastTime: '10:00PM' //写死
          })
        })
        this.setState({ chats })
      }
    })
    this.props.navigation.addListener('willBlur', () => {
      conversation.onchange = null
    })
  }
  // 先获取一次数据
  componentDidMount():void {
    let chats:object[] = []
    Object.keys(conversation.conversations).forEach((key) => {
      let chat = conversation.conversations[key]
      console.log(key)
      chats.push({
        name: this.state.contacts[key].name,
        username: key,
        lastMessage: chat[chat.length - 1].message,
        lastTime: '10:00PM' //写死
      })
    })
    this.setState({ chats })
  }

  renderItem(data:any) {
    let item = data.item
    return (
      <ChatBox
        title={item.name}
        lastMessage={item.lastMessage}
        lastTime={item.lastTime}
        username={item.username}
      />
    )
  }

  render():React.ReactNode {
    return (
      <View>
        <StatusBar/>
        <Head title={'Vchat'}/>
        <FlatList
          data={this.state.chats}
          renderItem={this.renderItem}
          extraData={this.state}
          keyExtractor={(item:any, index:any) => index.toString()}
        />
      </View>
    )
  }
}