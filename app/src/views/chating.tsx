import * as React from "react"
import { TextInput, TouchableHighlight, StyleSheet, Text, View, TouchableOpacity } from "react-native"

import Svg from '../compoents/svg'
import Message from '../compoents/message'
interface Props {
  navigation: any
}
export default class Me extends React.Component<Props,any> {
  constructor(props:any) {
    super(props);
    this.state = {
      messageList: [],
      message: ''
    };
  }
  send():void {
    this.setState((previousState:any) => { 
      var messageList = previousState.messageList
      messageList.push(this.state.message)
      return { messageList }
    })
    this.setState({message: ''})
  }
  renderMessageList():React.ReactNode {
    var messages:any[] = []
    this.state.messageList.forEach((message:string, index:number) => {
      messages.push(<Message key={index} message={message} isMine={true}/>)
    })
    return messages
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
        <View style={styles.head}>
          <TouchableHighlight onPress={() => this.props.navigation.goBack()} underlayColor={'#E8E8E8'}>
            <View style={styles.back}>
              <Svg icon={'back'} size={22}/>
            </View>
          </TouchableHighlight>
          <View>
            <Text style={styles.alias}>Nicholas</Text>
          </View>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Profile')} underlayColor={'#E8E8E8'} style={styles.more}>
            <Svg icon={'more'} size={28}/>
          </TouchableHighlight>
        </View>
        <View style={styles.chat}>
          <Message
            message={'hello'}
            isMine={false}
          />
          <Message
            message={'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}
            isMine={false}
          />
          <Message
            message={'hello'}
            isMine={true}
          />
          {this.renderMessageList()}
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
            />
            <TouchableHighlight onPress={() => 1} underlayColor={'#E8E8E8'} style={styles.emoji}>
              <Svg icon={'emoji'} size={25}></Svg>
            </TouchableHighlight>
          </View>
          {this.renderAddOrSend()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  head: {
    flexDirection: 'row',
    alignContent: 'center',
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
    padding: 5
  },
  messageBox: {
    flexDirection: 'row'
  },
  avater: {
    width: 40,
    height: 40,
    padding: 8
  },
  message: {
    padding: 8,
    borderRadius: 10,
    borderTopLeftRadius: 3,
    backgroundColor: '#eee'
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
    borderTopColor: '#f5f5f5',
    borderTopWidth: 2,
    padding: 10,
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