import * as React from "react"
import { FlatList, TouchableOpacity, StyleSheet, Text, View } from "react-native"

import StatusBar from '../compoents/statusBar'
import Head from '../compoents/head'
import ChatBox from '../compoents/chatBox' 
import Svg from '../compoents/svg'

import conversation from '../utils/conversation'

interface Props {
  navigation?: any
}
interface State {
  chats: object[]
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
    this.state = {
      chats: [],
    }
    this.props.navigation.addListener('didFocus', () => {
      conversation.onchange = () => {
        let chats:object[] = []
        Object.keys(conversation.conversations).forEach((key) => {
          let chat = conversation.conversations[key]
          chats.push({
            name: 'littleV', //暂时写死
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
      chats.push({
        name: 'littleV', //暂时写死
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