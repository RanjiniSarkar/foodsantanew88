import React from 'react';
import {View,TouchableOpacity, Text,StyleSheet,Image} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import{AppTabNavigator2} from '../components/AppTabNavigator2';
import {createBottomTabNavigator} from 'react-navigation-tabs';


export default function RequestScreen () {
    
        return(
            
                <AppContainer2/>
            

        )
    }
    const switchNavigator2 = createSwitchNavigator({
        BottomTab:{screen:AppTabNavigator2},
        
      })
      
      
      const AppContainer2 = createAppContainer(switchNavigator2)
            