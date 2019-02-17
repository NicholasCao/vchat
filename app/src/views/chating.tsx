import * as React from "react"
import { TextInput, TouchableHighlight, StyleSheet, Text, View, Image } from "react-native"

import Svg from '../compoents/svg'
import Message from '../compoents/message'
interface Props {
  navigation: any
}
export default class Me extends React.Component<Props,any> {
  constructor(props:any) {
    super(props);
    this.state = {
    };
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
          {/* <View style={styles.messageBox}>
            <Image
              style={styles.avater}
              source={require('../../static/avatar.png')}
            />
            <View style={styles.message}>
              <Text>what's up</Text>
            </View>
          </View> */}
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
          <Message
            message={'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}
            isMine={true}
          />
        </View>
        <View style={styles.inputBox}>
          <Svg icon={'speech'} size={30}></Svg>
          <View style={styles.textEmoji}>
            <TextInput
              placeholder={'Type a message'}
              style={styles.input}
            />
            <TouchableHighlight onPress={() => 1} underlayColor={'#E8E8E8'} style={styles.emoji}>
              <Svg icon={'emoji'} size={25}></Svg>
            </TouchableHighlight>
          </View>
          <Svg icon={'add'} size={28}></Svg>
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
    flex: 1
  },
  emoji: {
    padding: 5,

  }
})