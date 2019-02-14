import * as React from "react"
import { TextInput, TouchableOpacity, StyleSheet, Text, View } from "react-native"

import ChatBox from '../compoents/chatBox' 

interface Props {
  navigation: any
}
export default class Chats extends React.Component<Props,any> {
  constructor(props:any) {
    super(props);
    this.state = {
    };
  }
  render():React.ReactNode {
    return (
      <ChatBox
        title='nicholas'
        lastMessage='hello'
        lastTime='10:04PM'
      />
    );
  }
}

// const styles = StyleSheet.create({
//   hi: {
//     fontSize: 16
//   }
// })