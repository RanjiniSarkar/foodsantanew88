import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import RecipeDonateScreen from '../screens/RecipeDonateScreen'
import RecieverDetailsScreen1 from '../screens/RecieverDetailsScreen1';





export const AppStackNavigator1 = createStackNavigator({
  RecipeDonateList : {
    screen : RecipeDonateScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  RecieverDetails1 :{
    screen: RecieverDetailsScreen1,
    navigateOptions:{
    headerShown: false
    }
  },
},


  {
    initialRouteParams: 'RecipeDonateList'
  }
);
