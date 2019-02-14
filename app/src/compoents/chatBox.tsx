import * as React from "react"
import { TextInput, TouchableHighlight, StyleSheet, Text, View } from "react-native"
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
      <TouchableHighlight onPress={this.chat} underlayColor={'#E8E8E8'}>
        <View style={styles.container}>
          <View style={styles.avater}>
            <Svg icon="avatar" size={48}/>
          </View>
          <View style={styles.detailBox}>
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
        </View>
      </TouchableHighlight>
    );
  }
  chat():void {

  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  avater: {
    paddingLeft: 15
  },
  detailBox: {
    padding: 15,
    paddingBottom: 0,
    flex: 1
  },
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
    borderBottomWidth: .3,
    borderBottomColor: '#BBB',
    paddingBottom: 10,
  },
  lastMessage: {
    fontSize: 16
  }
})