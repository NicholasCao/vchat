import * as React from "react"
import { Image, TouchableHighlight, StyleSheet, Text, View } from "react-native"
// import { withNavigation } from 'react-navigation';

import Svg from './svg'

interface Props {
  title: string
}
export default class ChatBox extends React.Component<Props,any> {
  constructor(props:any) {
    super(props);
    this.state = {
    };
  }
  render():React.ReactNode {
    return (
      <View style={styles.container}>
        <Image
          style={styles.avater}
          source={require('../../static/avatar.jpg')}
        />
        <Text style={styles.title}>{this.props.title}</Text>
        <View style={styles.icons}>
          <TouchableHighlight style={styles.camera}>
            <Svg icon={'camera'} size={22}/>
          </TouchableHighlight>
          <Svg icon={'edit'} size={20}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20
  },
  avater: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginRight: 10
  },
  title: {
    color: '#222',
    fontSize: 30
  },
  icons: {
    marginLeft: 'auto',
    marginRight: 25,
    flexDirection: 'row'
  },
  camera: {
    marginRight: 30
  }
})
