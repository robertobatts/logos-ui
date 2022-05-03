import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View, Modal } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const handleAddGoal = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Type a goal'
                    style={styles.input}
                    onChangeText={setEnteredGoal}
                    value={enteredGoal}
                />
                <Button title='ADD' onPress={handleAddGoal} />
            </View>
            <Button title='Cancel' color='red' onPress={props.onClose} />
        </Modal>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        margin: 10
    }
});