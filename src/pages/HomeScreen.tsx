import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import TodoItem from '../components/TodoItem';

import AddTodo from '../components/AddTodo';
import {addTodo, removeTodo} from '../redux/slices/todo';
import {useDispatch, useSelector} from 'react-redux';
export default function Main() {
  const dispatch = useDispatch();
  const todoList = useSelector((state: any) => state.todo?.todoArr);

  const [todos, setTodos] = useState<any>([]);

  const renderItem = ({item}: any) => {
    const deleteHandler = (id: any) => {
      dispatch(removeTodo(id));
    };
    return <TodoItem key={item.id} item={item} deleteHandler={deleteHandler} />;
  };

  const submitHandler = (text: any) => {
    if (text.length > 3) {
      let todoObj = {id: todoList.length + 1, name: text};
      dispatch(addTodo(todoObj));
      setTodos([...todos, {id: todos.length + 1, name: text}]);
    } else {
      Alert.alert('Oops!', 'Todo must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed')},
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('Dismiss Keyboard');
      }}>
      <View style={styles.container}>
        <View style={styles.content}>
          {/* to form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todoList}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              //   showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    paddingHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
