/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect, useReducer} from 'react';
import {SafeAreaView, StyleSheet, FlatList, View, Text} from 'react-native';
import Header from './src/components/Header'
import TaskCard from './src/components/TaskCard';
import InputBox from './src/components/InputBox'





function App(): JSX.Element {

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD TASK":
        setCounter(counter+1)
        setNumberOfActiveTasks(numberOfActiveTasks+1)
        return [...state, {id: counter, name: action.name, done: false}]
      case "REMOVE TASK":
        setCounter(counter-1)
        return state.filter(item=>{
          if (item.id == action.id) {
            if (!item.done)
              setNumberOfActiveTasks(numberOfActiveTasks-1)
          }
          else {
            return item
          }
        })
      case "UPDATE TASK STATUS":
        return state.map(item=>{
          if (item.id == action.id) {
            item.done = action.done;
            if (action.done)
              setNumberOfActiveTasks(numberOfActiveTasks-1)
            else
              setNumberOfActiveTasks(numberOfActiveTasks+1)
            return item
          }
          else  
            return item
        })
      default:
        return state
    }
  }

  const [counter, setCounter] = useState(0);
  const [toDoList, setToDoList] = useState([ ]);
  const [numberOfActiveTasks, setNumberOfActiveTasks] = useState(0);
  const [list, dispatcher] = useReducer(reducer, toDoList);

  useEffect(()=>{console.log("Hello")}, [toDoList])

  const partialDispacther = (action) => {
    function wrapper(args) {
      return dispatcher({type: action, ...args})
    }
    return wrapper;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Yapılacaklar" numOfTasks={numberOfActiveTasks} />
      <FlatList 
        data={list} 
        renderItem={item=><TaskCard
                            taskItem={item.item}
                            updateTaskStatus={partialDispacther("UPDATE TASK STATUS")} 
                            deleteTask={partialDispacther("REMOVE TASK")} />}
        keyExtractor={item=>item.id}
        ItemSeparatorComponent={()=><View style={{height: 15}} />}
        ListFooterComponent={()=><View style={{paddingBottom: 10}} />}
        ListHeaderComponent={()=><View style={{paddingBottom: 10}} />} />
      <Text style={{color: "white"}}>{Object.keys(toDoList)}</Text>
      <InputBox addTask={partialDispacther("ADD TASK")}  />
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%"
  }
})


export default App;
