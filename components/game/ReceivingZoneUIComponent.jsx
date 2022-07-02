import React from 'react';
import { DraxView } from 'react-native-drax';
import { Text, View } from 'react-native';


const ReceivingZoneUIComponent = ({ item, index, styles }) => {
    return (
      <DraxView
        style={[styles.centeredContent, styles.receivingZone, { backgroundColor: item.background_color }]}
        receivingStyle={styles.receiving}
        renderContent={({ viewState }) => {
          const receivingDrag = viewState && viewState.receivingDrag;
          const payload = receivingDrag && receivingDrag.payload;
          return (
            <View>
              <Text style={styles.textStyle}>{item.name}</Text>
            </View>
          );
        }}
        key={index}
        onReceiveDragDrop={(event) => {
          let selected_item = dragItemMiddleList[event.dragged.payload];
          console.log('onReceiveDragDrop::index', selected_item, index);
          console.log('onReceiveDragDrop :: payload', event.dragged.payload);
          let newReceivingItemList = [...receivingItemList];
          console.log('onReceiveDragDrop :: newReceivingItemList', newReceivingItemList);
          newReceivingItemList[index] = selected_item;
          setReceivedItemList(newReceivingItemList);

          let newDragItemMiddleList = [...dragItemMiddleList];
          console.log('onReceiveDragDrop :: newDragItemMiddleList 1', newDragItemMiddleList);
          newDragItemMiddleList[event.dragged.payload] = receivingItemList[index];
          console.log('onReceiveDragDrop :: newDragItemMiddleList 2', newDragItemMiddleList);
          setDragItemListMiddle(newDragItemMiddleList);
        }}
      />
    );
  }

  export default ReceivingZoneUIComponent;