import * as React from "react"
import { TextInput, TouchableOpacity, StyleSheet, Text, View } from "react-native"

import Svg from '../compoents/svg'

interface Props {
  navigation?: any
}
export default class Discover extends React.Component<Props,any> {
  static navigationOptions = {
    tabBarIcon: (option: any) => {
      let iconName = 'discover' + (option.focused ? '' : '2')
      return (
        <Svg icon={iconName} size={25}/>
      );
    },
  };
  constructor(props:any) {
    super(props);
    this.state = {
    };
  }
  render():React.ReactNode {
    return (
      <View>
        <Text>
          Discover
        </Text>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   hi: {
//     fontSize: 16
//   }
// })