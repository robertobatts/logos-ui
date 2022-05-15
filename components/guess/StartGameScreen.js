import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from './Card';
import Colors from '../../constants/colors';
import Input from './Input';

const StartGameScreen = () => {
    const [enteredValue, setEnteredValue] = useState('');

    const handleNumberInput = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input
                        style={styles.input}
                        keyboardType='number-pad'
                        maxLength={2}
                        blurOnSubmit
                        value={enteredValue}
                        onChangeText={handleNumberInput}
                    />
                    <View style={styles.buttonContainer}>
                        <Button styles={styles.button} title='Reset' color={Colors.secondary} onPress={() => { }} />
                        <Button styles={styles.button} title='Confirm' color={Colors.primary} onPress={() => { }} />
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    }
});

export default StartGameScreen;