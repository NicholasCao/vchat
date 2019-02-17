import * as React from "react"
import { TextInput, TouchableOpacity, StyleSheet, Text, View } from "react-native"

import Svg from '../compoents/svg'

interface Props {
  navigation?: any
}
export default class Profile extends React.Component<Props,any> {
  constructor(props:any) {
    super(props);
    this.state = {
    };
  }
  render():React.ReactNode {
    return (
      <View>

        <Text>
          profile
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