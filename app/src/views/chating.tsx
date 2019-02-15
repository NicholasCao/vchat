import * as React from "react"
import { TextInput, TouchableHighlight, StyleSheet, Text, View } from "react-native"

import Svg from '../compoents/svg'

interface Props {
  navigation: any
}
export default class Me extends React.Component<Props,any> {
  constructor(props:any) {
    super(props);
    this.state = {
    };
  }
  render():React.ReactNode {
    return (
      <View>
        <View style={styles.head}>
        <TouchableHighlight onPress={() => this.props.navigation.goBack()} underlayColor={'#E8E8E8'}>
          <View style={styles.back}>
            <Svg icon={'back'} size={22}/>
          </View>
        </TouchableHighlight>
          <View>
            <Text style={styles.alias}>Nicholas</Text>
          </View>
          <View style={styles.more}>
            <Svg icon={'more'} size={25}/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  back: {
    padding: 12,
    marginTop: 2
  },
  alias: {
    fontSize: 20,
    color: '#222',
    padding: 12,
    paddingLeft: 0
  },
  more: {
    marginLeft: 'auto',
    padding: 12,
  }
})