import * as React from "react"
import { Image, TouchableOpacity, StyleSheet, Text, View } from "react-native"
import { withNavigation } from 'react-navigation';
interface Props {
  message: string,
  isMine: boolean,
  navigation?: any
}
class Message extends React.Component<any,any> {
  constructor(props:any) {
    super(props);
    this.state = {
    };
  }
  render():React.ReactNode {
    return (
      <View style={styles.messageBox}>
        <Image
          style={this.props.isMine?styles.myAvater:styles.avater}
          source={require('../../static/avatar.jpg')}
        />
        <View style={this.props.isMine?styles.myMessage:styles.message}>
          <Text>{this.props.message}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  messageBox: {
    flexDirection: 'row',
    margin: 10
  },
  myAvater: {
    display: 'none'
  },
  avater: {
    width: 40,
    height: 40,
    padding: 8,
    paddingLeft: 0,
    borderRadius: 5
  },
  myMessage: {
    marginLeft: 'auto',
    padding: 8,
    borderRadius: 10,
    borderTopRightRadius: 3,
    backgroundColor: '#90EE90',
    maxWidth: 250
  },
  message: {
    padding: 8,
    borderRadius: 10,
    borderTopLeftRadius: 3,
    backgroundColor: '#EEE',
    marginLeft: 10,
    maxWidth: 250
  },
})

export default withNavigation<Props>(Message)