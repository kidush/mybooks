import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import { LoginScreen } from '../screens/login'
import { BooksScreen } from '../screens/books'


const Stack = createStackNavigator()

export const MainNavigation = () => {
  const screenOptions = {
    animationEnabled: true,
    headerShown: false
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="books" component={BooksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

