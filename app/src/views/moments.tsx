import * as React from "react"
import { Dimensions, Image, TextInput, TouchableOpacity, StyleSheet, Text, View } from "react-native"

import Svg from '../compoents/svg'
import MomentsItem from '../compoents/momentsItem'

const { width, height } = Dimensions.get('window');

interface Props {
  navigation?: any
}
export default class Moments extends React.Component<Props,any> {
  constructor(props:any) {
    super(props);
    this.state = {
    };
  }
  render():React.ReactNode {
    return (
      <View>
        <View style={styles.cover}>
        </View>
        <View style={styles.user}>
          <Text style={styles.name}>Nicholas</Text>
          <Image style={styles.avatar} source={require('../../static/avatar.jpg')} />
        </View>
        <View style={styles.moments}>
          <MomentsItem/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cover: {
    backgroundColor: '#444',
    height: height * .4,
    width,
  },
  user: {
    flexDirection: 'row',
    position: 'relative',
    top: -45
  },
  name: {
    marginLeft: 'auto',
    fontSize: 18,
    color: '#fff',
    paddingTop: 15
  },
  avatar: {
    width: 80,
    height: 80,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 5
  },
  moments: {
    position: 'relative',
    top: -40
  }
})