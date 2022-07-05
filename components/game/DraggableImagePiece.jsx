import React from 'react';
import { Image } from 'react-native';
import { DraxView } from 'react-native-drax';

export default function DraggableImagePiece({ item, index, styles }) {
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
        <Image style={styles.image} source={item.image} />
      </DraxView>
    );
  }