import * as React from "react"
import { TextInput, TouchableOpacity, StyleSheet, Text, View } from "react-native"
import SvgUri from 'react-native-svg-uri';
import Svg from './svg'
interface Props {
  title: string,
  avatar?: string,
  lastMessage: string,
  lastTime: string,
  isGroupChat?: boolean,
  navigation?: any
}
export default class ChatBox extends React.Component<Props,any> {
  constructor(props:any) {
    super(props);
    this.state = {
    };
  }
  render():React.ReactNode {
    return (
      <View>
        <Svg icon="avatar" size={48}/>
        <SvgUri
          width="48"
          height="48"
          source={require('../../static/svg/avatar.svg')}
        />
        <View style={styles.head}>
          <Text style={styles.title}>
            {this.props.title}
          </Text>
          <Text style={styles.lastTime}>
            {this.props.lastTime}
          </Text>
        </View>
        <View style={styles.lastMessageBox}>
          <Text style={styles.lastMessage}>
            {this.props.lastMessage}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    // flex: 1,
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    color: '#333'
  },
  lastTime: {
    marginLeft: 'auto',
    color: '#888'
  },
  lastMessageBox: {
    borderBottomWidth: 1,
    borderBottomColor: '#BBB'
  },
  lastMessage: {
    fontSize: 16
  }
})