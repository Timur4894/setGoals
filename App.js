import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/goalItem';
import GoalInput from './components/goalInput';

export default function App() {
  const [coursGoals, setCoursGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function startAddGoalHandler(){
    setModalIsVisible(true)
  }

  function endAddGoalHandler(){
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCoursGoals([...coursGoals, { text: enteredGoalText, id: Math.random().toString() }])
    setModalIsVisible(false)
  }

  function deleteGoalHandler(id){
    setCoursGoals(coursGoals => {
      return coursGoals.filter((goal)=>goal.id !== id)
    })
  }

  return ( 
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#333" onPress={startAddGoalHandler}/>
      {modalIsVisible && <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} notVisible={endAddGoalHandler}/>}
      <View style={styles.goalsContainer}>
        <FlatList
          data={coursGoals}
          renderItem={itemData => {
            return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id}/>;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 30,
  },
});
