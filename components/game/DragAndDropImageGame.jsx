import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DraxProvider, DraxList } from 'react-native-drax';
import DragAndDropImagePiece from './DragAndDropImagePiece';
import DraggableImagePiece from './DraggableImagePiece';
import GamePassedScreen from './GamePassedScreen';

const gestureRootViewStyle = { flex: 1 };

const draggableItemList = [
  {
    'image': require('../../assets/image-game/banana-3.jpeg'),
    'pos': 2
  },
  {
    'image': require('../../assets/image-game/banana-1.jpeg'),
    'pos': 0
  },
  {
    'image': require('../../assets/image-game/banana-2.jpeg'),
    'pos': 1
  }
];
const FirstReceivingItemList = [{},{},{}];

export default function DragAndDropImageGame() {

  const [receivingItemList, setReceivingItemList] = useState(FirstReceivingItemList);
  const [dragItemList, setDragItemList] = useState(draggableItemList);
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    let isPassed = receivingItemList.length === draggableItemList.length;
    receivingItemList.forEach((item, index) => isPassed = isPassed && index === item.pos);
    setPassed(isPassed);
  }, [receivingItemList]);
  

  const onReceiveDragDrop = (event, index) => {
    if (event.dragged.payload.type === 'RECEIVING_ZONE') {
      const newReceivingItemList = [...receivingItemList];
      newReceivingItemList[event.dragged.payload.index] = receivingItemList[index];
      newReceivingItemList[index] = receivingItemList[event.dragged.payload.index];
      setReceivingItemList(newReceivingItemList);
    } else {
      const selectedItem = dragItemList[event.dragged.payload.index];
      const oldItem = receivingItemList[index];

      const newReceivingItemList = [...receivingItemList];
      newReceivingItemList[index] = selectedItem;
      setReceivingItemList(newReceivingItemList);

      const newDragItemList = [...dragItemList];
      if (oldItem.image) {
        newDragItemList[event.dragged.payload.index] = oldItem;
      } else {
        newDragItemList.splice(event.dragged.payload.index, 1);
      }
      setDragItemList(newDragItemList);
    }
  };

  const DraxListItem = ({ item, index }) => {
    return (
      <DraggableImagePiece
        item={item}
        index={index}
        styles={{ ...commonSyles, ...draggableStyles }}
      />
    );
  }

  const FlatListItemSeparator = () => {
    return (<View style={styles.itemSeparator} />);
  }

  return (
    <GestureHandlerRootView
      style={gestureRootViewStyle}>
        <GamePassedScreen visible={passed}/>
      <View>
        <Text style={styles.headerStyle}>{'Drag drop and swap between lists'}</Text>
      </View>
      <DraxProvider>
        <View style={styles.container}>
          <View>
            {passed && <Text>{'Passed!'}</Text>}
          </View>
          <View style={styles.receivingContainer}>
            {receivingItemList.map((item, index) =>
              <DragAndDropImagePiece
                key={index}
                item={item}
                index={index}
                onReceiveDragDrop={onReceiveDragDrop}
                styles={{ ...commonSyles, ...receivingZoneStyles }}
              />)
            }
          </View>
          <View style={styles.draxListContainer}>
            <DraxList
              data={dragItemList}
              renderItemContent={DraxListItem}
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

const receivingZoneStyles = StyleSheet.create({
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
  receiving: {
    borderColor: 'red',
    borderWidth: 2,
  },
});

const commonSyles = StyleSheet.create({
  dragging: {
    opacity: 0.2,
  },
  hoverDragging: {
    borderColor: 'magenta',
    borderWidth: 2,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 5
  },
});

const draggableStyles = StyleSheet.create({
  draggableBox: {
    height: (Dimensions.get('window').width / 4) - 12,
    width: (Dimensions.get('window').width / 4) - 12,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    margin: 10
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 40,
    justifyContent: 'space-evenly',
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