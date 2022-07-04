import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DraxProvider, DraxView, DraxList } from 'react-native-drax';

const gestureRootViewStyle = { flex: 1 };

export default function DragAndDropImageGame() {
  const draggableItemList = [
    {
      "id": 1,
			"image": 'https://learnenglishkids.britishcouncil.org/sites/kids/files/RS1874_Banana%20col-web.jpg'
    },
    {
      "id": 2,
			"image": 'https://learnenglishkids.britishcouncil.org/sites/kids/files/image/RS1882_Pineapple%20col-low.jpg'
    },
    {
      "id": 3,
			"image": 'https://play-lh.googleusercontent.com/DagqZEN3rFnFrBCHnPXkd1XAGCKSRLZe0_fHOzkbYypqMqLP-o3VQu9Ld0vKqsb9cA'

    },
    {
      "id": 4,
			"image": 'https://image.shutterstock.com/z/stock-vector-cartoon-kiwi-flashcard-worksheet-for-children-education-game-for-kids-the-word-fruit-kiwi-1071484733.jpg'
    }
  ];
  const FirstReceivingItemList = [
    {
      "id": 5
    },
    {
      "id": 6
    },
    {
      "id": 7
    },
    {
      "id": 8
    }
  ];

  const [receivingItemList, setReceivingItemList] = useState(FirstReceivingItemList);
  const [dragItemList, setDragItemList] = useState(draggableItemList);

  const DragUIComponent = ({ item, index }) => {
    return (
      <DraxView
        style={[styles.centeredContent, styles.draggableBox]}
        draggingStyle={styles.dragging}
        dragReleasedStyle={styles.dragging}
        hoverDraggingStyle={styles.hoverDragging}
        dragPayload={{index: index}}
        longPressDelay={150}
        key={index}
      >
				<Image style={styles.draggableBox} source={{ uri: item.image }} />
      </DraxView>
    );
  }

  const ReceivingZoneUIComponent = ({ item, index }) => {
    return (
      <DraxView
        style={[styles.centeredContent, styles.receivingZone, { backgroundColor: 'grey' }]}
        receivingStyle={styles.receiving}
        draggingStyle={styles.dragging}
        dragReleasedStyle={styles.dragging}
        hoverDraggingStyle={styles.hoverDragging}
        dragPayload={{index: index, type: 'RECEIVING_ZONE'}}
        renderContent={({ viewState }) => {
          return (
						<Image style={styles.receivingZone} source={{ uri: item.image }} />
          );
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
              scrollEnabled={true}
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
  centeredContent: {
    borderRadius: 10,
  },
  receivingZone: {
    height: (Dimensions.get('window').width / 4) - 12,
    borderRadius: 10,
    width: (Dimensions.get('window').width / 4) - 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
  },
  receiving: {
    borderColor: 'red',
    borderWidth: 2,
  },
  draggableBox: {
    width: (Dimensions.get('window').width / 4) - 12,
    height: (Dimensions.get('window').width / 4) - 12,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
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
    justifyContent: 'space-evenly'
  },
  itemSeparator: {
    height: 15
  },
  draxListContainer: {
    padding: 5,
    height: 200
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