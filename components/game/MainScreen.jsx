import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function MainScreen({ onChoseLevelType }) {
  return (
    <View style={styles.container}>
      <View>
        <Button title='IMAGE' onPress={() => onChoseLevelType('IMAGE')} />
      </View>
      <View>
        <Button title='WORD' onPress={() => onChoseLevelType('WORD')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});