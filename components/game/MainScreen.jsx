import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Button title='IMAGE' onPress={() => navigation.navigate('GameLevel', { levelType: 'IMAGE'})} />
      </View>
      <View>
        <Button title='WORD' onPress={() =>  navigation.navigate('GameLevel', { levelType: 'WORD'})} />
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