import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Modal, Image } from 'react-native';

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText("")
    }

    return (
        <Modal visible={props.visible} animationType='fade' transparent={true} >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Image style={styles.image} source={require('../assets/goal.png')}/>
                    <TextInput placeholder='Your course goal' style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoalText} placeholderTextColor="white" />
                    <View style={styles.buttonStyle}>
                        <View style={{width: "40%"}}>
                            <Button title='Add goal' onPress={addGoalHandler} color="white" /> 
                        </View>
                        <View style={{width: "40%"}}>
                            <Button title='Cancel' onPress={props.notVisible} color="white" /> 
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: "white",
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    buttonStyle: {
        flexDirection: 'row',
        margin: 15,
    },
    modalView: {
        margin: 20,
        backgroundColor: "#333",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 6,
        width: 250,
        height: 40,
        padding: 5,
        textAlign: "center",
        marginBottom: 10,
        color: "white" // Установка белого цвета текста
    }
})

export default GoalInput;
