import { StatusBar } from 'expo-status-bar'
import React from 'react'
import AuthFlowNavigator from './navigation/AuthFlowNavigator'
import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <NavigationContainer colorScheme={colorScheme}>
        <AuthFlowNavigator />
        <StatusBar />
      </NavigationContainer>
    )
  }
}
