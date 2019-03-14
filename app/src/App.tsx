import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';
// import {StackNavigator,} from "react-navigation";

import Login from './views/login'
import Chats from './views/chats'
import Contacts from './views/contacts'
import Discover from './views/discover'
import Me from './views/me'
import Chating from './views/chating'
import Profile from './views/profile'
import Moments from './views/moments'
import config from './config'
type Props = {};

const TabNavigator = createBottomTabNavigator({
  Chats,
  Contacts,
  Discover,
  Me
},{
  initialRouteName: 'Chats',
  backBehavior: 'none',
  tabBarOptions: {
    showLabel: false
  }
});

const App = createStackNavigator({
  Login: {screen: Login},
  Home: {screen: TabNavigator},
  // Login: {screen: Login},
  Chating: {screen: Chating},
  Profile: {screen: Profile},
  Moments: {screen: Moments}
}, {
  headerMode: 'none', // 此参数设置不渲染顶部的导航条
})

export default {
  app: createAppContainer(App),
  ws: new WebSocket('ws://' + config.root + '/msg')
}
