import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PlannerContext } from '../contexts/PlannerContext';
import { Swipeable } from 'react-native-gesture-handler';

export default function App() {
  const [todoItem, setTodoItem] = useState('');
  const [isInputValid, setIsInputValid] = useState(true); 
  const plannerContext = useContext(PlannerContext);

  const handleAddTodo = () => {
    if (todoItem !== '') {
      setIsInputValid(true); 
      const tempTodos = [...plannerContext.todos, { id: Date.now(), text: todoItem }];
      plannerContext.addTodos(tempTodos);
      setTodoItem('');
    } else {
      setIsInputValid(false); 
    }
  };

  const handleRemoveTodo = (id) => {
    const updatedTodos = plannerContext.todos.filter((todo) => todo.id !== id);
    plannerContext.addTodos(updatedTodos);
    console.log('Todo item removed successfully.');
  };

  const saveTodoList = async () => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(plannerContext.todos));
      console.log('Todo List saved successfully.');
    } catch (error) {
      console.log('Error Saving todo list:', error);
    }
  };

  useEffect(() => {
    const loadTodoList = async () => {
      try {
        const savedTodos = await AsyncStorage.getItem('todos');
        if (savedTodos !== null) {
          plannerContext.addTodos(JSON.parse(savedTodos));
        }
      } catch (error) {
        console.log('Error Loading todo list:', error);
      }
    };

    loadTodoList();

    return () => {
      saveTodoList();
    };
  }, []);

  useEffect(() => {
    saveTodoList();
  }, [plannerContext.todos]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTodoItem(text)}
          value={todoItem}
          placeholder="Enter a todo item"
        />

        <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {!isInputValid && (
        <Text style={styles.validationText}>Please enter a todo</Text>
      )}

      {plannerContext.todos.length === 0 ? (
        <Text style={styles.emptyText}>Empty list</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={plannerContext.todos}
          renderItem={({ item }) => (
            <Swipeable
              renderRightActions={() => (
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => handleRemoveTodo(item.id)}
                >
                  <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
              )}
            >
              <View style={styles.todoItem}>
                <Text style={styles.todoText}>{item.text}</Text>
              </View>
            </Swipeable>
          )}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: "Pacifico",
    fontSize: 28,
    textAlign: "center",
    padding: 5,
    color: "#A54CAB",
    marginBottom: 20
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#746091',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
    marginTop: 10,
  },
  todoItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  todoText: {
    flex: 1,
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: '#9c89b8',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    paddingVertical: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: '#ccc',
  },
  validationText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  separator: {
    height: 10, 
  },
});
