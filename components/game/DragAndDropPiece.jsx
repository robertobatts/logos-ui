import React from 'react';
import { Image, Text } from 'react-native';
import { DraxView } from 'react-native-drax';


export default function DragAndDropPiece({ item, index, onReceiveDragDrop, styles }) {

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
      style={[styles.receivingZone, { backgroundColor: 'grey' }]}
      receivingStyle={styles.receiving}
      draggingStyle={styles.dragging}
      dragReleasedStyle={styles.dragging}
      hoverDraggingStyle={styles.hoverDragging}
      dragPayload={{ index: index, type: 'RECEIVING_ZONE' }}
      renderContent={({ viewState }) => {
        if (item.image) {
          return <Image style={styles.image} source={item.image} />
        }
        if (item.text) {
          return <Text>{item.text}</Text>
        }
        return <></>;
      }}
      key={index}
      onReceiveDragDrop={(event) => onReceiveDragDrop(event, index)}
    />
  );
}
