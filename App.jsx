import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Header from './components/guess/Header';
import DragAndDropImageGame from './components/game/DragAndDropImageGame';
import DragAndDropLetterGame from './components/game/DragAndDropLetterGame';

export default function App() {

  return (
    <View style={styles.screen}>
      <DragAndDropImageGame />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
