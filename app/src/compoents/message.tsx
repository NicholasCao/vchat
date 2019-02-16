import * as React from "react"
import { Image, TouchableOpacity, StyleSheet, Text, View } from "react-native"

// interface Props {
//   navigation?: any
// }
export default class Message extends React.Component<any,any> {
  constructor(props:any) {
    super(props);
    this.state = {
    };
  }
  render():React.ReactNode {
    return (
      <View style={styles.messageBox}>
      <Image
        style={styles.avater}
        source={require('../../static/avatar.png')}
      />
      <View style={styles.message}>
        <Text>{this.props.message}</Text>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
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
})