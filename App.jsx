import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './components/game/MainScreen';
import GameLevel from './components/game/GameLevel';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Main' 
          component={MainScreen}
          options={{ title: 'Home' }} />
        <Stack.Screen name='GameLevel' component={GameLevel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;