import React from 'react';
import { Image, Text } from 'react-native';
import { DraxView } from 'react-native-drax';

export default function DraggablePiece({ item, index, styles }) {

  const getContent = () => {
    if (item.image) {
      return <Image style={styles.image} source={item.image} />;
    }
    if (item.text) {
      return <Text>{item.text}</Text>;
    }
  }

  return (
    <DraxView
      style={styles.draggableBox}
      draggingStyle={styles.dragging}
      dragReleasedStyle={styles.dragging}
      hoverDraggingStyle={styles.hoverDragging}
      dragPayload={{ index: index }}
      longPressDelay={150}
      key={index}
    >
      {getContent()}
    </DraxView>
  );
}