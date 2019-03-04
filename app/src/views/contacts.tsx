import * as React from "react"
import { Image, TouchableHighlight, StyleSheet, Text, View } from "react-native"

import Svg from '../compoents/svg'
import Head from '../compoents/head'
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
        <Head title='Contacts'/>
        <TouchableHighlight onPress={() => 1} underlayColor={'#E8E8E8'}>
          <View style={styles.container}>
            <View>
              <Image
                style={styles.avater}
                source={require('../../static/avatar.jpg')}
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
    paddingLeft: 10,
    paddingBottom: 0
  },
  avater: {
    width: 36,
    height: 36,
    padding: 10,
    borderRadius: 4
  },
  name: {
    marginLeft: 10,
    fontSize: 18,
    color: '#333',
    borderBottomWidth: .3,
    borderBottomColor: '#CCC',
    paddingBottom: 12,
    paddingTop: 12,
    flex: 1
  }
})