import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainNavigation } from './src/navigators';



export default function App() {
  return (
    <MainNavigation />
    // <View style={styles.container}>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#480838',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
});
