import React from 'react';
import {View,TouchableOpacity, Text,StyleSheet,Image} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import{AppTabNavigator1} from '../components/AppTabNavigator1'


export default function DonateScreen () {
    
        return(
            
                <AppContainer1/>
            

        )
    }
    const switchNavigator1 = createSwitchNavigator({
        BottomTab:{screen:AppTabNavigator1},
        
      })
      
      
      const AppContainer1 = createAppContainer(switchNavigator1)