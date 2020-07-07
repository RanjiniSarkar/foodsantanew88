import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import FoodDonateScreen from '../screens/FoodDonateScreen';
import RecieverDetailsScreen  from '../screens/RecieverDetailsScreen';
import RecieverDetailsScreen1 from '../screens/RecieverDetailsScreen1'




export const AppStackNavigator = createStackNavigator({
  FoodDonateList : {
    screen : FoodDonateScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  RecieverDetails : {
    screen : RecieverDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  RecieverDetails1 :{
    screen: RecieverDetailsScreen1,
    navigateOptions:{
    headerShown: false
    }
  }
},
  {
    initialRouteParams: 'BookDonateList'
  }
);
