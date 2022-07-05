import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DraxProvider, DraxView, DraxList } from 'react-native-drax';

const gestureRootViewStyle = { flex: 1 };

const draggableItemList = [
  {
    'image': require('../../assets/image-game/banana-3.jpeg')
  },
  {
    'image': require('../../assets/image-game/banana-1.jpeg')
  },
  {
    'image': require('../../assets/image-game/banana-2.jpeg')
  }
];
const FirstReceivingItemList = [
  {
  },
  {
  },
  {
  }
];

export default function DragAndDropImageGame() {

  const [receivingItemList, setReceivingItemList] = useState(FirstReceivingItemList);
  const [dragItemList, setDragItemList] = useState(draggableItemList);

  const DragUIComponent = ({ item, index }) => {
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

  const ReceivingZoneUIComponent = ({ item, index }) => {
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
        onReceiveDragDrop={(event) => {
          if (event.dragged.payload.type === 'RECEIVING_ZONE') {
            const newReceivingItemList = [...receivingItemList];
            newReceivingItemList[event.dragged.payload.index] = receivingItemList[index];
            newReceivingItemList[index] = receivingItemList[event.dragged.payload.index];
            setReceivingItemList(newReceivingItemList);
          } else {
            let selectedItem = dragItemList[event.dragged.payload.index];

            const newReceivingItemList = [...receivingItemList];
            newReceivingItemList[index].image = selectedItem.image;
            setReceivingItemList(newReceivingItemList);

            const newDragItemList = [...dragItemList];
            newDragItemList.splice(event.dragged.payload.index, 1);
            setDragItemList(newDragItemList);
          }
        }}
      />
    );
  }

  const FlatListItemSeparator = () => {
    return (<View style={styles.itemSeparator} />);
  }

  return (
    <GestureHandlerRootView
      style={gestureRootViewStyle}>
      <View>
        <Text style={styles.headerStyle}>{'Drag drop and swap between lists'}</Text>
      </View>
      <DraxProvider>
        <View style={styles.container}>
          <View style={styles.receivingContainer}>
            {receivingItemList.map((item, index) => ReceivingZoneUIComponent({ item, index }))}
          </View>
          <View style={styles.draxListContainer}>
            <DraxList
              data={dragItemList}
              renderItemContent={DragUIComponent}
              keyExtractor={(item, index) => index.toString()}
              numColumns={4}
              ItemSeparatorComponent={FlatListItemSeparator}
              scrollEnabled={false}
            />
          </View>
        </View>
      </DraxProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 40,
    justifyContent: 'space-evenly',
  },
  receivingZone: {
    height: (Dimensions.get('window').width / 4) - 12,
    width: (Dimensions.get('window').width / 4) - 12,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    margin: 2
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 5
  },
  receiving: {
    borderColor: 'red',
    borderWidth: 2,
  },
  draggableBox: {
    height: (Dimensions.get('window').width / 4) - 12,
    width: (Dimensions.get('window').width / 4) - 12,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    margin: 10
  },
  dragging: {
    opacity: 0.2,
  },
  hoverDragging: {
    borderColor: 'magenta',
    borderWidth: 2,
  },
  receivingContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  itemSeparator: {
    height: 15
  },
  draxListContainer: {
    padding: 5,
    height: 200,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  receivingZoneContainer: {
    padding: 5,
    height: 100
  },
  textStyle: {
    fontSize: 18
  },
  headerStyle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20
  }
});