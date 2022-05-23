import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Header from './components/guess/Header';
import StartGameScreen from './components/guess/StartGameScreen';

export default function App() {

  return (
    <View style={styles.screen}>
      <Header title='Guess a Number'/>
      <StartGameScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
