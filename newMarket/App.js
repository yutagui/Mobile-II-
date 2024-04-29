import React from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import Routes from './src/routes/routes';
import styles from './src/styles/styles';

export default function App() {
  return (
    <View style={{flex:1}}>
      <Routes/>
      <StatusBar/>
      <SafeAreaView/>
    </View>
  );
}


