import React from 'react';
import { Image, Text } from 'react-native';
import { DraxView } from 'react-native-drax';


export default function DragAndDropPiece({ item, index, onReceiveDragDrop, styles, width, height }) {

  const getContent = () => {
    if (item.image) {
      return <Image
        style={{ height: '100%', width: '100%', borderRadius: styles.receivingZone ? styles.receivingZone.borderRadius : 0 }}
        source={item.image}
      />;
    }
    if (item.text) {
      return <Text style={{ fontSize: width / 2 }}>{item.text}</Text>;
    }
  }

  return (
    <DraxView
      style={[styles.receivingZone, { backgroundColor: 'grey', width: width, height: height }]}
      receivingStyle={styles.receiving}
      draggingStyle={styles.dragging}
      dragReleasedStyle={styles.dragging}
      hoverDraggingStyle={styles.hoverDragging}
      dragPayload={{ index: index, type: 'RECEIVING_ZONE' }}
      renderContent={({ viewState }) => getContent()}
      key={index}
      onReceiveDragDrop={(event) => onReceiveDragDrop(event, index)}
    />
  );
}