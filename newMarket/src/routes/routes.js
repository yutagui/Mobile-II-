import React from "react";

import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//import Market from '../screens/market';
import Cart from '../screens/cart';
//import Check from '../screens/check';
import Home from "./home";
import Login from "../screens/login";
import Register from "../screens/register";

const Tab = createBottomTabNavigator()

export default function Routes(){
    return<NavigationContainer>
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor :"#ff8c00",
            tabBarInactiveBackgroundColor :"white",
            headerTransparent: true,
            headerShown: false,

            tabBarLabelStyle:{
                width: '100%',
                flex: 1,
                fontWeight: 'bold',
                fontSize: 16,
                lineHeight: 21,
                paddingTop: 21,
                backgroundColor: '#8B0000'
            },

            tabBarStyle:{
                width: '100%',
                height: 60,
                lineHeight: 21
            },

            tabBarIconStyle:{
                display: 'none'
            }
        }}>
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Cart' component={Cart}/>
            <Tab.Screen name='Login' component={Login}/>
        </Tab.Navigator>
    </NavigationContainer>
}