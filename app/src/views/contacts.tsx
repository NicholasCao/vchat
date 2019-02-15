import * as React from "react"
import { TextInput, TouchableOpacity, StyleSheet, Text, View } from "react-native"

import Svg from '../compoents/svg'

interface Props {
  navigation?: any
}
export default class Contacts extends React.Component<Props,any> {
  static navigationOptions = {
    tabBarIcon: (option: any) => {
      let iconName = 'contacts' + (option.focused ? '' : '2')
      return (
        <Svg icon={iconName} size={35}/>
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
          Contacts
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