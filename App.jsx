import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import GameLevel from './components/game/GameLevel';
import MainScreen from './components/game/MainScreen';

export default function App() {
  const [levelType, setLevelType] = useState('');
  return (
    <View style={styles.screen}>
      <MainScreen  onChoseLevelType={setLevelType}/>
      <GameLevel type={levelType} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
