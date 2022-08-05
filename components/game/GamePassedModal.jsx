import React from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';

export default function GamePassedModal({ visible, onNext, onRequestClose }) {
  return (
    <Modal 
      visible={visible} 
      animationType='slide'
      presentationStyle='pageSheet'
      onRequestClose={onRequestClose}
    >
      <View style={styles.container}>
        <Text>
          Passed!
        </Text>
        {onNext &&
          <Button title='Next' onPress={onNext} />
        }
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});