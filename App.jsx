import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import GameLevel from './components/game/GameLevel';

export default function App() {

  return (
    <View style={styles.screen}>
      <GameLevel />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
