import React, {useState} from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const handleAddGoal = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('')
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Write something here'
                style={styles.input}
                onChangeText={setEnteredGoal}
                value={enteredGoal}
            />
            <Button title='ADD' onPress={handleAddGoal} />
        </View>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    flex: 1,
  }
});