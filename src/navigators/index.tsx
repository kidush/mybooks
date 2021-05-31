import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import { LoginScreen } from '../screens/login'
import { BooksScreen } from '../screens/books'
import { SignupScreen } from '../screens/signUp'


const Stack = createStackNavigator()

export const MainNavigation = () => {
  const screenOptions = {
    animationEnabled: true,
    headerShown: false
  }

  const booksScreenNavigationOptions = {
    title: 'Meus livros',
    headerShown: true,
    headerTintColor: '#dbc9a7',
    headerStyle:  {
      backgroundColor: '#480838',
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignupScreen} />
        <Stack.Screen name="books" options={booksScreenNavigationOptions} component={BooksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

