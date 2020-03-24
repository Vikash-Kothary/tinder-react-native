import React from 'react'
import { Platform, Text } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Icon from '../components/Icon'
import TabBarIcon from '../components/TabBarIcon'
import ExploreScreen from '../screens/ExploreScreen'
import ProfileScreen from '../screens/ProfileScreen'
import MessagesScreen from '../screens/MessagesScreen'
import MatchesScreen from '../screens/MatchesScreen'
import SettingsScreen from '../screens/SettingsScreen'
import styles from '../assets/styles'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {}
})

const ExploreStack = createStackNavigator(
  {
    Home: ExploreScreen
  },
  config
)

ExploreStack.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarIcon: ({ focused }) => (
    <Text style={[styles.iconMenu, { color: focused ? '#7444C0' : '#363636' }]}>
      <Icon name="explore" />
    </Text>
  )
}

ExploreStack.path = ''

const ProfileStack = createStackNavigator(
  {
    Links: ProfileScreen
  },
  config
)

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <Text style={[styles.iconMenu, { color: focused ? '#7444C0' : '#363636' }]}>
      <Icon name="user" />
    </Text>
  )
}

ProfileStack.path = ''

const MessagesStack = createStackNavigator(
  {
    Links: MessagesScreen
  },
  config
)

MessagesStack.navigationOptions = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({ focused }) => (
    <Text style={[styles.iconMenu, { color: focused ? '#7444C0' : '#363636' }]}>
      <Icon name="chat" />
    </Text>
  )
}

MessagesStack.path = ''

const MatchesStack = createStackNavigator(
  {
    Links: MatchesScreen
  },
  config
)

MatchesStack.navigationOptions = {
  tabBarLabel: 'Matches',
  tabBarIcon: ({ focused }) => (
    <Text style={[styles.iconMenu, { color: focused ? '#7444C0' : '#363636' }]}>
      <Icon name="heart" />
    </Text>
  )
}

MatchesStack.path = ''

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
)

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  )
}

SettingsStack.path = ''

const tabNavigator = createBottomTabNavigator({
  ExploreStack,
  MatchesStack,
  MessagesStack,
  ProfileStack
},
{
    tabBarOptions: {
      activeTintColor: "#7444C0",
      inactiveTintColor: "#363636",
      labelStyle: {
        fontSize: 14,
        textTransform: "uppercase",
        paddingTop: 10
      },
      style: {
        backgroundColor: "#FFF",
        borderTopWidth: 0,
        paddingVertical: 30,
        height: 60,
        marginBottom: 0,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowColor: "#000",
        shadowOffset: { height: 0, width: 0 }
      }
    }
  })

tabNavigator.path = ''

export default tabNavigator
