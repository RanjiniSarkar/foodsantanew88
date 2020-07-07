import React from 'react';
import {View,Text} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {AppTabNavigator} from './components/AppTabNavigator';

import {createDrawerNavigator} from 'react-navigation-drawer';
import SettingScreen from './screens/SettingScreen'
import CustomSideBarMenu from './components/CustomSideBarMenu';
import MyFoodDonationScreen from './screens/MyFoodDonationScreen';
import MyRecipeDonationScreen from './screens/MyRecipeDonationScreen'
import NotificationScreen from './screens/NotificationScreen';




export default function App (){

    return(

      <AppContainer/>
      
     
      
    )
    
  }
  export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
    Settings:{
      screen:SettingScreen
    },
    MyFoodDonations:{
      screen:MyFoodDonationScreen
    },
    MyRecipeDonations:{
      screen: MyRecipeDonationScreen
    },
    Notifications:{
      screen:NotificationScreen
    }
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:'Home'
})

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
AppDrawerNavigator:AppDrawerNavigator
  
})


const AppContainer = createAppContainer(switchNavigator)