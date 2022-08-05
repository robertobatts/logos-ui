import React, { useState, useEffect } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import DragAndDropImageGame from './DragAndDropImageGame';
import GameSettings from '../../constants/gameSettings';
import DragAndDropLetterGame from './DragAndDropLetterGame';

export default function GameLevel({ navigation, route }) {
  const [level, setLevel] = useState(0);
  const type = route.params.levelType;

  const handleOnNext = GameSettings[type] &&  level + 1 < GameSettings[type].length ? () => setLevel(level + 1) : null;

  const handleOnClose = () => {
    setLevel(level + 1);
    navigation.navigate('Main');
  }

  const getGame = () => {
    const setting = type ? GameSettings[type][level] : null;
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
            onClose={handleOnClose}
          />;
        break;
      case 'IMAGE':
        game =
          <DragAndDropImageGame
            firstDragItemList={setting.firstDragItemList}
            firstReceivingItemList={setting.firstReceivingItemList}
            level={level + 1}
            onNext={handleOnNext}
            onClose={handleOnClose}
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