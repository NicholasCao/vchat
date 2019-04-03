import * as React from 'react'
import { Image, TouchableHighlight, StyleSheet, Text, View } from 'react-native'

import Svg from '../compoents/svg'
import StatusBar from '../compoents/statusBar'

interface Props {
  navigation?: any,
}
interface State {
  name: string,
  username: string,
  isFriend: boolean
}
export default class Profile extends React.Component<Props,State> {
  constructor(props:any) {
    super(props)
    this.state = {
      name: this.props.navigation.state.params.name,
      username: this.props.navigation.state.params.username,
      isFriend: this.props.navigation.state.params.isFriend
    }
  }

  render():React.ReactNode {
    return (
      <View style={styles.container}>
        <StatusBar color={'#FFF'}/>
        <View style={styles.header}>
          <TouchableHighlight onPress={() => this.props.navigation.goBack()} style={styles.back} underlayColor={'#DDD'}>
            <Svg icon={'back'} size={23} />
          </TouchableHighlight>
        </View>
        <View style={styles.userInfo}>
          <Image
            style={styles.avater}
            source={require('../../static/avatar.jpg')}
          />
          <View style={styles.infoDetail}>
            <Text style={styles.name}>{this.state.name}</Text>
            <Text style={styles.username}>Username:  {this.state.username}</Text>
          </View>
        </View>
        <TouchableHighlight onPress={() => 1} style={styles.editContainer} underlayColor={'#DDD'}>
          <View style={styles.edit}>
            <Text style={styles.editText}>Edit Contact</Text>
            <View style={styles.go}>
              <Svg icon={'go'} size={20}/>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => 1}  style={styles.momentContainer} underlayColor={'#DDD'}>
          <View style={styles.moment}>
            <Text style={styles.momentText}>Moments</Text>
            <View style={styles.go}>
              <Svg icon={'go'} size={20}/>
            </View>
          </View>
        </TouchableHighlight>
        {
          this.state.isFriend ? (
          <TouchableHighlight onPress={() => this.chat()} style={styles.button} underlayColor={'#DDD'}>
            <Text style={styles.buttonText}>Send Message</Text>
          </TouchableHighlight>
          ) : (
          <TouchableHighlight onPress={() => 1} style={styles.button} underlayColor={'#DDD'}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableHighlight>
          )
        }
      </View>
    )
  }
  chat():void {
    this.props.navigation.navigate('Chating', {
      username: this.state.username,
      name: this.state.name
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDED'
  },
  header: {
    backgroundColor: '#FFF',
  },
  back: {
    padding: 15,
    width: 53
  },
  userInfo: {
    flexDirection: 'row',
    backgroundColor: '#FFF'
  },
  avater: {
    width: 65,
    height: 65,
    margin: 15,
    borderRadius: 5
  },
  infoDetail: {
    margin: 20,
    marginLeft: 10,
    paddingBottom: 20
  },
  name: {
    fontSize: 32,
    color: '#111',
  },
  username: {
    fontSize: 16,
    color: '#888'
  },
  editContainer: {
    backgroundColor: '#FFF',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#BBB',
  },
  edit: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  editText: {
    fontSize: 18,
    color: '#333'
  },
  go: {
    marginLeft: 'auto'
  },
  momentContainer: {
    marginTop: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#BBB',
    backgroundColor: '#FFF'
  },
  moment: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  momentText: {
    fontSize: 18,
    color: '#333'
  },
  button: {
    backgroundColor: '#FFF',
    marginTop: 10,
    alignItems: 'center',
    padding: 13
  },
  buttonText: {
    fontSize: 20,
    color: '#556482'
  }
})