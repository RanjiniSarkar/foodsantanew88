import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import DonateScreen from '../screens/DonateScreen';
import FoodDonateScreen from '../screens/FoodDonateScreen';
import RecipeDonateScreen from '../screens/RecipeDonateScreen'
import{Image} from 'react-native';
import {AppStackNavigator} from './AppStackNavigator'
import {AppStackNavigator1} from './AppStackNavigator1'

import {createAppContainer,createSwitchNavigator} from 'react-navigation'



export const AppTabNavigator1 = createBottomTabNavigator({
    FoodDonate:{
        screen:AppStackNavigator,
        navigationOptions: {
            tabBarIcon: 
            <Image
            source = {require("../assets/food.png")}
            style = {{width:35,height:35}}
            />,
            tabBarLabel: " FOOD DONATE"
        },
        
    },
    RecipeDonate:{
        screen:AppStackNavigator1,
        navigationOptions: {
            tabBarIcon: 
            <Image
            source = {require("../assets/recipe.jpg")}
            style = {{width:35,height:35}}
            />,
            tabBarLabel: "RECIPE DONATE"
        }
    },
    
})
const switchContainer1 = createSwitchNavigator({
    Donate:{screen:DonateScreen},

  })
  const AppContainer1 = createAppContainer(switchContainer1)