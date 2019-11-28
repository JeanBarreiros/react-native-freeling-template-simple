import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/pages/Login';
import Home from './src/pages/Home';

const stackHOME = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: 'Home',
      // headerLeft: <MenuDrawerHeaderButtonLeft navigationProps={navigation} />,
      // headerRight: <MenuDrawerHeaderButtonRight navigationProps={navigation} />,
      headerStyle: {
          backgroundColor: '#333333',
      },
      headerTintColor: '#f1f1f1',
    }),
  }
})

const stackLOGIN = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: () => ({
      header: null
    }),
  },
})

const drawerMenuDoctor = createDrawerNavigator({
  Login: {
    screen: stackLOGIN,
    navigationOptions: {
      drawerLabel: '',
    },
  },
  Home: {
    screen: stackHOME,
    navigationOptions: {
      drawerLabel: '',
    },
  },
})

const Routes = createAppContainer(drawerMenuDoctor);

export default Routes;
