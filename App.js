import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const handleAddGoal = (enteredGoal) => {
    if (enteredGoal) {
      setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
      setIsAddMode(false);
    }
  }

  const handleDeleteGoal = (index) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal, i) => i !== index);
    })
  }

  return (
    <View style={styles.screen}>
      <Button title='Add new goal' onPress={() => setIsAddMode(true)}/>
      <GoalInput onAddGoal={handleAddGoal} visible={isAddMode} onClose={() => setIsAddMode(false)}/>
      <FlatList
        data={courseGoals}
        keyExtractor={(item, index) => index}
        renderItem={itemData => <GoalItem title={itemData.item} onDelete={() => handleDeleteGoal(itemData.index)} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
