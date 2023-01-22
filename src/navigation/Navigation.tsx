import React from 'react'
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from '../screens/Home'
import Liked from '../screens/Liked'
import Cart from '../screens/Cart'
import DetailProduct from '../screens/DetailProduct'
import { COLORS } from '../constants/theme'
import Icon from '../components/ui/Icon'


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.lightgray
  }
}

const Tab = createBottomTabNavigator()

export const RootNavigation = () => {
  return (
    <NavigationContainer theme={theme}>
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: COLORS.primary,
          tabBarStyle: {height: 70}
        }}>
            <Tab.Screen 
              name='HomeScreen' 
              component={HomeNavigation}
              options={{
                tabBarIcon: ({color, focused}) => (
                  <Icon name={focused ? 'home' : 'home-outline'} color={color} size={28} />
                )
              }} />
            <Tab.Screen 
              name='LikedScreen' 
              component={LikedNavigation}
              options={{
                tabBarIcon: ({color, focused}) => (
                  <Icon name={focused ? 'heart' : 'heart-outline'} color={color} size={28} />
                )
              }} />
            <Tab.Screen 
              name='Cart' 
              component={Cart}
              options={{
                tabBarIcon: ({color, focused}) => (
                  <Icon name={focused ? 'cart' : 'cart-outline'} color={color} size={28} />
                )
              }} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}


const HomeStack = createNativeStackNavigator()

export const HomeNavigation = () => {
  return (
    <HomeStack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
      <HomeStack.Screen name='Home' component={React.memo(Home)} />
      <HomeStack.Screen name='DetailProduct' component={DetailProduct} />
    </HomeStack.Navigator>
  )
}

const LikedStack = createNativeStackNavigator()

export const LikedNavigation = () => {
  return (
    <LikedStack.Navigator initialRouteName='Liked' screenOptions={{headerShown: false}}>
      <LikedStack.Screen name='Liked' component={Liked} />
      <LikedStack.Screen name='DetailProduct' component={DetailProduct} />
    </LikedStack.Navigator>
  )
}