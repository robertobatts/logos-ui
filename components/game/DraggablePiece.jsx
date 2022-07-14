import React from 'react';
import { Dimensions, Image, StyleSheet, Text } from 'react-native';
import { DraxView } from 'react-native-drax';

export default function DraggablePiece({ item, index, styles, width, height }) {

  const getContent = () => {
    if (item.image) {
      return <Image
        style={{ height: '100%', width: '100%', borderRadius: styles.draggableBox ? styles.draggableBox.borderRadius : 0 }}
        source={item.image}
      />;
    }
    if (item.text) {
      return <Text style={{ fontSize: width / 2 }}>{item.text}</Text>;
    }
  }

  return (
    <DraxView
      style={[styles.draggableBox, { width: width, height: height }]}
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