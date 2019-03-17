import * as React from 'react'
import { Image, TouchableHighlight, StyleSheet, Text, View } from 'react-native'

import Svg from '../compoents/svg'

interface Props {
  navigation?: any
}
export default class Profile extends React.Component<Props,any> {
  constructor(props:any) {
    super(props)
    this.state = {
      name: 'nicholas',
      username: 'hhh',
    }
  }
  render():React.ReactNode {
    return (
      <View>
        <TouchableHighlight>
          <Svg icon={'back'} size={20} />
        </TouchableHighlight>
        <View style={styles.userInfo}>
          <Image
            source={require('../../static/avatar.jpg')}
          />
          <View style={styles.infoDetail}>
            <Text>Name: {this.state.name}</Text>
            <Text>Username: {this.state.username}</Text>
          </View>
        </View>
        <View></View>
        <TouchableHighlight style={styles.add}>
          <Text>Add</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  userInfo: {
    flexDirection: 'row',
  },
  infoDetail: {

  },
  add: {

  }
})