import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DragAndDropImageGame from './DragAndDropImageGame';
import GameSettings from '../../constants/gameSettings';
import DragAndDropLetterGame from './DragAndDropLetterGame';

export default function GameLevel() {
  const [level, setLevel] = useState(0);

  const handleOnNext = level + 1 < GameSettings.length ? () => setLevel(level + 1) : null;

  const getGame = () => {
    const setting = GameSettings[level];
    const type = setting ? setting.type : null;
    let game = null;
    switch (type) {
      case 'WORD':
        game =
          <DragAndDropLetterGame
            solution={setting.solution}
            firstDragItemList={setting.firstDragItemList}
            firstReceivingItemList={setting.firstReceivingItemList}
            level={level + 1}
            onNext={handleOnNext}
          />;
          break;
      case 'IMAGE':
        game =
          <DragAndDropImageGame
            firstDragItemList={setting.firstDragItemList}
            firstReceivingItemList={setting.firstReceivingItemList}
            level={level + 1}
            onNext={handleOnNext}
          />;
          break;
    }
    return game;
  }

  return (
    <View style={styles.screen}>
      {getGame()}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});