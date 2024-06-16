import { Todo } from '@bbronswijk/kotlin-todo-api-client';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from '@redux-devtools/extension';
import {
  clearCompletedSuccessReducer,
  createSuccessReducer,
  deleteSuccessReducer,
  fetchSuccessReducer,
  setSelectedFilterReducer,
  toggleSuccessReducer,
} from '@/store/reducers';
import {
  clearCompletedSaga,
  createTodoSaga,
  deleteTodoSaga,
  fetchTodosSaga,
  toggleTodoSaga,
  updateTodoSaga,
} from '@/store/sagas';
import { handleActions } from 'redux-actions';
import { ActionType, TodoActions } from '@/store/actions';
import { takeEvery } from 'redux-saga/effects';

export enum FilterType {
  All = 'All',
  Active = 'Active',
  Completed = 'Completed',
}

export interface TodoState {
  todos: Todo[];
  selectedFilter: FilterType;
}

export const initialState: TodoState = {
  todos: [],
  selectedFilter: FilterType.All,
};

const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield takeEvery(ActionType.FETCH, fetchTodosSaga);
  yield takeEvery(ActionType.CREATE, createTodoSaga);
  yield takeEvery(ActionType.UPDATE, updateTodoSaga);
  yield takeEvery(ActionType.DELETE, deleteTodoSaga);
  yield takeEvery(ActionType.TOGGLE, toggleTodoSaga);
  yield takeEvery(ActionType.CLEAR_COMPLETED, clearCompletedSaga);
}

export const store = createStore(
  handleActions<TodoState, TodoActions>(
    {
      [ActionType.FETCH_SUCCESS]: fetchSuccessReducer,
      [ActionType.CREATE_SUCCESS]: createSuccessReducer,
      [ActionType.DELETE_SUCCESS]: deleteSuccessReducer,
      [ActionType.TOGGLE_SUCCESS]: toggleSuccessReducer,
      [ActionType.SET_SELECTED_FILTER]: setSelectedFilterReducer,
      [ActionType.CLEAR_COMPLETED_SUCCESS]: clearCompletedSuccessReducer,
    },
    initialState
  ),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
