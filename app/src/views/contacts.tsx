import * as React from "react"
import { Image, TouchableHighlight, StyleSheet, Text, View } from "react-native"

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
        <TouchableHighlight onPress={() => 1} underlayColor={'#E8E8E8'}>
          <View style={styles.container}>
            <View>
              <Image
                style={styles.avater}
                source={require('../../static/avatar.png')}
              />
            </View>
            <Text style={styles.name}>
              Nicholas
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingBottom: 0
  },
  avater: {
    width: 35,
    height: 35,
    padding: 8,
  },
  name: {
    marginLeft: 10,
    fontSize: 20,
    color: '#333',
    borderBottomWidth: .3,
    borderBottomColor: '#BBB',
    paddingBottom: 10,
    paddingTop: 10,
    flex: 1
  }
})