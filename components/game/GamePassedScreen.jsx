import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';

export default function GamePassedScreen({visible}) {
  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.container}>
        <Text>
          Passed!
        </Text>
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