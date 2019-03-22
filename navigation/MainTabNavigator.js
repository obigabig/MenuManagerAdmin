import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import { Icon } from 'expo';
import Colors from '../constants/Colors';

import TabBarIcon from '../components/TabBarIcon';
//Screen
import HomeScreen from '../screens/HomeScreen';
import MenuStatusScreen from '../screens/MenuStatusScreen';
import ManageMenuListScreen from '../screens/ManageMenuListScreen';
import ProfileScreen from '../screens/user/ProfileScreen';


const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  title: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  )
};

const MenuStatusStack = createStackNavigator({
  MenuStatus: MenuStatusScreen
});

MenuStatusStack.navigationOptions = {
  title: 'Menu Status',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-list-box' : 'md-list-box'}
    />
  )
};

const ManageMenuListStack = createStackNavigator({
  ManageMenuList: ManageMenuListScreen
});

ManageMenuListStack.navigationOptions = {
  title: 'Manage Menu',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-add-circle' : 'md-add-circle'}
    />
  )
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
});

ProfileStack.navigationOptions = {
  title: 'User',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  )
};

export default createBottomTabNavigator(
  {
    HomeStack,
    MenuStatusStack,
    ManageMenuListStack,
    ProfileStack
  }
);


