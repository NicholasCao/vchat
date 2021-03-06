import * as React from 'react'
import { FlatList, TextInput, TouchableHighlight, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import Svg from '../compoents/svg'
import StatusBar from '../compoents/statusBar'
import Message from '../compoents/message'
import im from '../utils/im'
import storage from '../utils/storage'
import conversation from '../utils/conversation'

interface MessageItem {
  message: string,
  isMine: boolean
}
interface Props {
  navigation: any
}
interface State {
  myUsername: string,
  messageList: Array<MessageItem>,
  message: string,
  username: string,
  name: string
}

export default class Chating extends React.Component<Props,State> {
  flatList: any
  constructor(props:any) {
    super(props)
    this.props.navigation.state.params
    this.state = {
      myUsername: '',
      messageList: conversation.conversations[this.props.navigation.state.params.username],
      message: '',
      username: this.props.navigation.state.params.username,
      name: this.props.navigation.state.params.name
    }
    this.props.navigation.addListener('didFocus', () => {
      conversation.onchange = () => {
        this.setState({
          messageList: conversation.conversations[this.state.username]
        }, this.flatList.scrollToEnd())
      }
    })
    this.props.navigation.addListener('willBlur', () => {
      conversation.onchange = null
    })
  }

  componentDidMount():void {
    storage.get('username', (err:any, value:string) => {
      this.setState({myUsername: value})
    })
  }

  send():void {
    console.log({
      type: 'text',
      content: this.state.message,
      from: this.state.myUsername,
      to: this.state.username
    })
    im.sendMsg({
      type: 'text',
      content: this.state.message,
      from: this.state.myUsername,
      to: this.state.username
    })
    this.setState({message: ''})
  }

  viewProfile():void {
    this.props.navigation.navigate('Profile', {
      username: this.state.username,
      name: this.state.name,
      isFriend: true
    })
  }

  renderAddOrSend():React.ReactNode {
    return this.state.message === '' ? (
      <TouchableOpacity activeOpacity={0.5} onPress={() => 1}>
        <Svg icon={'add'} size={28}></Svg>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity activeOpacity={0.6} onPress={() => this.send()}>
        <Svg icon={'send'} size={28}></Svg>
      </TouchableOpacity>
    )
  }
  render():React.ReactNode {
    return (
      <View style={styles.container}>
        <StatusBar/>
        <View style={styles.head}>
          <TouchableHighlight onPress={() => this.props.navigation.goBack()} underlayColor={'#E8E8E8'}>
            <View style={styles.back}>
              <Svg icon={'back'} size={22}/>
            </View>
          </TouchableHighlight>
          <View>
            <Text style={styles.alias}>{this.state.name}</Text>
          </View>
          <TouchableHighlight onPress={() => this.viewProfile()} underlayColor={'#E8E8E8'} style={styles.more}>
            <Svg icon={'more'} size={28}/>
          </TouchableHighlight>
        </View>
        <View style={styles.chat}>
          {/* {this.renderMessageList()} */}
          <FlatList
            ref={(FlatList) => { this.flatList = FlatList }}
            data={this.state.messageList}
            extraData={this.state}
            keyExtractor={(item:any, index:any) => index.toString()}
            renderItem={({item}) => (<Message message={item.message} isMine={item.isMine}/>)}
          />
        </View>
        <View style={styles.inputBox}>
          <Svg icon={'speech'} size={30}></Svg>
          <View style={styles.textEmoji}>
            <TextInput
              placeholder={'Type a message'}
              style={styles.input}
              onChangeText={message => this.setState({message})}
              value={this.state.message}
              multiline={true}
              autoCapitalize={'none'}
            />
            <TouchableHighlight onPress={() => 1} underlayColor={'#E8E8E8'} style={styles.emoji}>
              <Svg icon={'emoji'} size={25}></Svg>
            </TouchableHighlight>
          </View>
          {this.renderAddOrSend()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  head: {
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: '#EDEDED',
    borderBottomWidth: .3,
    borderBottomColor: '#CCC',
  },
  back: {
    padding: 12,
    marginTop: 2
  },
  alias: {
    fontSize: 20,
    color: '#222',
    padding: 12,
    paddingLeft: 0
  },
  more: {
    marginLeft: 'auto',
    padding: 12,
  },
  chat: {
    padding: 5,
    backgroundColor: '#FFF',
    flex: 1,
    // marginBottom: 1
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
    borderTopColor: '#EDEDED',
    borderTopWidth: 1,
    padding: 10,
    backgroundColor:'#FFF'
  },
  textEmoji: {
    borderRadius: 18,
    backgroundColor: '#F3F5F6',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center'
  },
  input: {
    paddingVertical: 0,
    height: 35,
    width: 'auto',
    flex: 1,
    fontSize: 15
    // textAlignVertical: 'top'
  },
  emoji: {
    padding: 5,

  }
})