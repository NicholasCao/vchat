import * as React from 'react'
import { Image, TextInput, TouchableHighlight, StyleSheet, Text, View } from 'react-native'
import { withNavigation } from 'react-navigation'

interface Props {
  title: string,
  username: string,
  avatar?: string,
  lastMessage: string,
  lastTime: string,
  isGroupChat?: boolean,
  navigation?: any
}
class ChatBox extends React.Component<any,any> {
  constructor(props:any) {
    super(props)
    this.state = {
    }
  }
  render():React.ReactNode {
    return (
      <TouchableHighlight onPress={() => this.chat()} underlayColor={'#E8E8E8'}>
        <View style={styles.container}>
          <Image style={styles.avater} source={require('../../static/avatar.jpg')} />
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
    )
  }
  chat():void {
    this.props.navigation.navigate('Chating', {
      username: this.props.username,
      name: this.props.title
    })
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  avater: {
    marginLeft: 15,
    marginRight: 15,
    width: 48,
    height: 48,
    borderRadius: 6
  },
  detailBox: {
    paddingBottom: 0,
    flex: 1
  },
  head: {
    paddingTop: 10,
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    color: '#333'
  },
  lastTime: {
    marginLeft: 'auto',
    color: '#999',
    marginRight: 15,
    fontSize: 13
  },
  lastMessageBox: {
    paddingRight: 15,
    borderBottomWidth: .3,
    borderBottomColor: '#CCC',
    paddingBottom: 10,
  },
  lastMessage: {
    fontSize: 16
  }
})

//声明高阶组件
export default withNavigation<Props>(ChatBox)