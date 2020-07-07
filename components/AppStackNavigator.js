import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import FoodDonateScreen from '../screens/FoodDonateScreen';
import RecieverDetailsScreen  from '../screens/RecieverDetailsScreen';
import RecieverDetailsScreen1 from '../screens/RecieverDetailsScreen1';
import NotificationScreen from '../screens/NotificationScreen'




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
  
  Notification : {
    screen : NotificationScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},


  {
    initialRouteParams: 'FoodDonateList'
  }
);
