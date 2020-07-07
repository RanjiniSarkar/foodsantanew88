import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import DonateScreen from '../screens/DonateScreen';
import RequestScreen from '../screens/RequestScreen';
import WelcomeScreen from '../screens/WelcomeScreen'
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {Image} from 'react-native'




export const AppTabNavigator = createBottomTabNavigator({
    Donate:{
        screen:DonateScreen,
        navigationOptions: {
            tabBarIcon: 
            <Image
            source = {require("../assets/donate.png")}
            style = {{width:35,height:35}}
            />,
            tabBarLabel: "DONATE"
        },
    
    },
    Request:{
        screen:RequestScreen,
        navigationOptions: {
            tabBarIcon: 
            <Image
            source = {require("../assets/request.png")}
            style = {{width:35,height:35}}
            />,
            tabBarLabel: "REQUEST"
        }
    },
    
})
const switchContainer = createSwitchNavigator({
    WelcomeScreen:{screen:WelcomeScreen},

  })
  const AppContainer = createAppContainer(switchContainer)