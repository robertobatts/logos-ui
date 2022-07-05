import React from 'react';
import { Image } from 'react-native';
import { DraxView } from 'react-native-drax';


export default function DragAndDropImagePiece({ item, index, onReceiveDragDrop, styles }) {
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
          return <></>;
        }}
        key={index}
        onReceiveDragDrop={(event) => onReceiveDragDrop(event, index)}
      />
    );
  }
