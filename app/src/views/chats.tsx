import * as React from "react"
import { TextInput, TouchableOpacity, StyleSheet, Text, View } from "react-native"

import StatusBar from '../compoents/statusBar'
import ChatBox from '../compoents/chatBox' 
import Svg from '../compoents/svg'

interface Props {
  navigation?: any
}

export default class Chats extends React.Component<Props,any> {
  static navigationOptions = {
    tabBarIcon: (option: any) => {
      let iconName = 'chats' + (option.focused ? '' : '2')
      return (
        <Svg icon={iconName} size={28}/>
      );
    },
  };
  constructor(props:any) {
    super(props);
    this.state = {
    };
  }
  render():React.ReactNode {
    // StatusBar.setBackgroundColor('#fff')
    return (
      <View>
        <StatusBar/>
        <ChatBox
          title={'Nicholas'}
          lastMessage={'hello'}
          lastTime={'10:04PM'}
        />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   hi: {
//     fontSize: 16
//   }
// })