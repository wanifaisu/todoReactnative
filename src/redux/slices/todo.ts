import {createSlice, PayloadAction} from '@reduxjs/toolkit';
interface Todo {
  id: number;
  name: string;
}
const initialState: {todoArr: Todo[]} = {
  todoArr: [],
};

export const todoSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todoArr.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      const idToRemove = action.payload;
      state.todoArr = state.todoArr.filter(todo => todo.id !== idToRemove);
    },
    resetTodo: (state, action) => {
      state.todoArr = [];
    },
  },
});
export const {addTodo, removeTodo, resetTodo} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
