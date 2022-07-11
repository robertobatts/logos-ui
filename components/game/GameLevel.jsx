import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DragAndDropImageGame from './DragAndDropImageGame';
import GameSettings from '../../constants/gameSettings';

export default function GameLevel() {
  const [level, setLevel] = useState(1);

  const goToNextLevel = () => {
    setLevel(level + 1);
  };

  return (
    <View style={styles.screen}>
      <DragAndDropImageGame 
        firstDragItemList={GameSettings[level - 1].firstDragItemList} 
        firstReceivingItemList={GameSettings[level - 1].firstReceivingItemList}
        level={level}
        onNext={level < GameSettings.length ? goToNextLevel : null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});