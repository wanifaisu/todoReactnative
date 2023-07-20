import {
  AnyAction,
  Reducer,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {authReducer} from './slices/auth';
import {todoReducer} from './slices/todo';

const middlewares = [thunk];

const combinedReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  console.log(action.type, 'type');
  if (action.type === 'auth/logout') {
    state = {} as RootState;
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof combinedReducer>;
