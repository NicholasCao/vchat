import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation'

import Login from './views/login'
import Chats from './views/chats'
import Contacts from './views/contacts'
import Discover from './views/discover'
import Me from './views/me'
import Chating from './views/chating'
import Profile from './views/profile'
import Moments from './views/moments'
import AddContacts from './views/addContacts'
import NewFriend from './views/newFriend'
import GroupChats from './views/groupChat'

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
  // AddContacts: { screen:AddContacts },
  Login: { screen: Login },
  Home: { screen: TabNavigator },
  // Login: { screen: Login },
  Chating: { screen: Chating },
  AddContacts: { screen:AddContacts },
  Profile: { screen: Profile },
  Moments: { screen: Moments },
  NewFriend: { screen: NewFriend },
  GroupChats: { screen: GroupChats }
}, {
  headerMode: 'none', //不渲染顶部的导航条
})

export default createAppContainer(App)
