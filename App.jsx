import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Header from './components/guess/Header';
import GameScreen from './components/game/GameScreen';
import DragAndDropGame from './components/game/DragAndDropGame';

export default function App() {

  return (
    <View style={styles.screen}>
      <DragAndDropGame />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
