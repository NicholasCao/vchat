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
        <Text style={styles.title}>{this.props.title}</Text>
        <View style={styles.icons}>
        <TouchableHighlight style={styles.search}>
            <Svg icon={'search'} size={20}/>
        </TouchableHighlight>
          <TouchableHighlight>
            <Svg icon={'add'} size={22}/>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    backgroundColor: '#EDEDED'
  },
  title: {
    color: '#222',
    fontSize: 18
  },
  icons: {
    marginLeft: 'auto',
    marginRight: 20,
    flexDirection: 'row'
  },
  search: {
    marginRight: 35
  }
})
