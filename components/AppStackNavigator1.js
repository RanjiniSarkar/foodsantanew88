import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import RecipeDonateScreen from '../screens/RecipeDonateScreen';
import RecipeRecieverDetailsScreen  from '../screens/RecieverDetailsScreenR';
import NotificationScreen from '../screens/NotificationScreen'




export const AppStackNavigator1 = createStackNavigator({
  RecipeDonateList : {
    screen : RecipeDonateScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  RecieverDetailsRecipe : {
    screen : RecipeRecieverDetailsScreen,
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
    initialRouteParams: 'RecipeDonateList'
  }
);
