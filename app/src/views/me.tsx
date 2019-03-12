import * as React from "react"
import { TextInput, TouchableOpacity, StyleSheet, Text, View } from "react-native"

import Svg from '../compoents/svg'

interface Props {
  navigation?: any
}
export default class Me extends React.Component<Props,any> {
  static navigationOptions = {
    tabBarIcon: (option: any) => {
      let iconName = 'me' + (option.focused ? '' : '2')
      return (
        <Svg icon={iconName} size={23}/>
      )
    },
  }
  constructor(props:any) {
    super(props)
    this.state = {
    }
  }
  render():React.ReactNode {
    return (
      <View>
        <Text>
          Me
        </Text>
      </View>
    )
  }
}

// const styles = StyleSheet.create({
//   hi: {
//     fontSize: 16
//   }
// })