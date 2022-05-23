import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from './Card';
import Colors from '../../constants/colors';
import Input from './Input';

const StartGameScreen = () => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');

    const handleNumberInput = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const handleResetInput = () => {
        setEnteredValue('');
        setConfirmed(false);
        Keyboard.dismiss();
    };

    const handleConfirmInput = () => {
        const number = parseInt(enteredValue);
        if (isNaN(number) || number <= 0 || number >= 100) {
            Alert.alert('Invalid Number!', 'Number must be between 1 and 99', [{ text: 'Okay', style: 'destructive' }]);
            setConfirmed(false);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(number);
        setEnteredValue('');
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>You selected</Text>
                <View>
                    <Text>{selectedNumber}</Text>
                </View>
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number between 1 and 99</Text>
                    <Input
                        style={styles.input}
                        keyboardType='number-pad'
                        maxLength={2}
                        blurOnSubmit
                        value={enteredValue}
                        onChangeText={handleNumberInput}
                    />
                    <View style={styles.buttonContainer}>
                        <Button styles={styles.button} title='Reset' color={Colors.secondary} onPress={handleResetInput} />
                        <Button styles={styles.button} title='Confirm' color={Colors.primary} onPress={handleConfirmInput} />
                    </View>
                </Card>
                {confirmedOutput}
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
    },
    summaryContainer: {
        marginTop: 20
    }
});

export default StartGameScreen;