import * as React from "react"
import { FlatList, TouchableOpacity, StyleSheet, Text, View } from "react-native"

import StatusBar from '../compoents/statusBar'
import Head from '../compoents/head'
import ChatBox from '../compoents/chatBox' 
import Svg from '../compoents/svg'

interface Props {
  navigation?: any
}
interface State {
  chats: object[],
  refreshing: boolean
}

export default class Chats extends React.Component<Props,State> {
  static navigationOptions = {
    tabBarIcon: (option: any) => {
      let iconName = 'chats' + (option.focused ? '' : '2')
      return (
        <Svg icon={iconName} size={28}/>
      )
    },
  }
  constructor(props:any) {
    super(props)
    this.state = {
      chats: [{name:'Nicholas',lastMessage:'hello',lastTime:'10:04PM'},{name:'wzq',lastMessage:'hello',lastTime:'22:04PM'}],
      refreshing: false
    }
  }

  // connect() {
    /* do sth */
  // }

  renderItem(data:any) {
    let item = data.item
    return (
      <ChatBox
        title={item.name}
        lastMessage={item.lastMessage}
        lastTime={item.lastTime}
        username={'username'}
      />
    )
  }

  render():React.ReactNode {
    return (
      <View>
        <StatusBar/>
        <Head title='Vchat'/>
        <FlatList
          // refreshing={this.state.refreshing}
          // onRefresh={() => this.connect()}
          data={this.state.chats}
          renderItem={this.renderItem}
          extraData={this.state}
          keyExtractor={(item:any, index:any) => index.toString()}
        />
        {/* <ChatBox
          title={'Nicholas'}
          lastMessage={'hello'}
          lastTime={'10:04PM'}
        />
        <ChatBox
          title={'wzq'}
          lastMessage={'hello'}
          lastTime={'22:04PM'}
        /> */}
      </View>
    )
  }
}

// const styles = StyleSheet.create({
//   hi: {
//     fontSize: 16
//   }
// })