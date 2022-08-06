import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/game/HomeScreen';
import GameLevel from './components/game/GameLevel';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Main'
          component={HomeScreen}
          options={{ 
            headerShown: false, 
          }}
        />
        <Stack.Screen name='GameLevel'
          component={GameLevel}
          options={{ 
            headerShown: false, 
            gestureDirection: 'vertical'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;