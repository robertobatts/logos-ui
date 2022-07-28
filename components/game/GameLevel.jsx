import React, { useState, useEffect } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import DragAndDropImageGame from './DragAndDropImageGame';
import GameSettings from '../../constants/gameSettings';
import DragAndDropLetterGame from './DragAndDropLetterGame';

export default function GameLevel({ type }) {
  const [level, setLevel] = useState(0);
  const [visible, setVisible] = useState(false);
  
  const handleOnNext = GameSettings[type] &&  level + 1 < GameSettings[type].length ? () => setLevel(level + 1) : null;

  useEffect(() => {
    if (type) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [type]);

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
    <Modal visible={visible} animationType='slide'>
      <View style={styles.screen}>
        {getGame()}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});