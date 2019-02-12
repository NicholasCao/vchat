import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';
// import {StackNavigator,} from "react-navigation";

import Login from './views/login'
import Chats from './views/chats'

type Props = {};

const App = createStackNavigator({
  'Login': {screen: Login},
  'Chats': {screen: Chats}
}, {
  headerMode: 'none', // 此参数设置不渲染顶部的导航条
})

export default createAppContainer(App);
