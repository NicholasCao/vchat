import * as React from "react"
import { TouchableHighlight, StyleSheet, Text, View } from "react-native"

import Svg from '../compoents/svg'
import Head from '../compoents/head'
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
      <View style={styles.container}>
        <Head title='Discover'/>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Moments')} underlayColor={'#DDD'}>
          <View style={styles.momentsBox}>
            <Svg icon={'moments'} size={22}/>
            <Text style={styles.momentsText}>
              Moments
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
    flex: 1
  },
  momentsBox: {
    backgroundColor: '#FFF',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#CCC',
    borderWidth: 0.3
  },
  momentsText: {
    color: '#333',
    marginLeft: 12,
    fontSize: 20
  }
})