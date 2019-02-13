import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';
// import {StackNavigator,} from "react-navigation";

import Login from './views/login'
import Chats from './views/chats'
import Contacts from './views/contacts'
import Discover from './views/discover'
import Me from './views/me'

type Props = {};

const TabNavigator = createBottomTabNavigator({
  Chats,
  Contacts,
  Discover,
  Me
});

const App = createStackNavigator({
  Login: {screen: Login},
  Home: {screen: TabNavigator}
}, {
  headerMode: 'none', // 此参数设置不渲染顶部的导航条
})

export default createAppContainer(App);
