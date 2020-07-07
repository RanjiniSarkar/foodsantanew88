import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import RequestScreen from '../screens/RequestScreen';
import FoodRequestScreen from '../screens/FoodRequestScreen';
import RecipeRequestScreen from '../screens/RecipeRequestScreen'
import{Image} from 'react-native'

import {createAppContainer,createSwitchNavigator} from 'react-navigation'



export const AppTabNavigator2 = createBottomTabNavigator({
    FoodRequest:{
        screen:FoodRequestScreen,
        navigationOptions: {
            tabBarIcon: 
            <Image
            source = {require("../assets/food.png")}
            style = {{width:35,height:35}}
            />,
            tabBarLabel: " FOOD REQUEST"
        },
        
    },
    RecipeRequest:{
        screen:RecipeRequestScreen,
        navigationOptions: {
            tabBarIcon: 
            <Image
            source = {require("../assets/recipe.jpg")}
            style = {{width:35,height:35}}
            />,
            tabBarLabel: "RECIPE REQUEST"
        }
    },
    
})
const switchContainer2 = createSwitchNavigator({
    Request:{screen:RequestScreen},

  })
  const AppContainer2 = createAppContainer(switchContainer2)