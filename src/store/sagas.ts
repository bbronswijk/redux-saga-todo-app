import {
  DeleteManyTodosRequest,
  Todo,
} from '@bbronswijk/kotlin-todo-api-client';
import { call, put } from 'redux-saga/effects';
import {
  deleteTodoApi,
  deleteTodosApi,
  getTodosApi,
  patchTodoApi,
  postTodoApi,
  toggleTodoApi,
} from '@/api/api';
import {
  clearCompletedAction,
  clearCompletedFailedAction,
  clearCompletedSuccessAction,
  createTodoAction,
  createTodoFailedAction,
  createTodoSuccessAction,
  deleteTodoAction,
  deleteTodoFailedAction,
  deleteTodoSuccessAction,
  fetchTodosFailedAction,
  fetchTodosSuccessAction,
  toggleTodoAction,
  toggleTodoFailedAction,
  toggleTodoSuccessAction,
  updateTodoAction,
  updateTodoFailedAction,
  updateTodoSuccessAction,
} from '@/store/actions';

export function* fetchTodosSaga() {
  try {
    const todos: Todo[] = yield call(getTodosApi);
    yield put(fetchTodosSuccessAction(todos));
  } catch (e) {
    yield put(fetchTodosFailedAction('Failed to fetch todos'));
  }
}

export function* createTodoSaga({
  payload,
}: ReturnType<typeof createTodoAction>) {
  try {
    const todo: Todo = yield call(postTodoApi, payload);
    yield put(createTodoSuccessAction(todo));
  } catch (e) {
    yield put(createTodoFailedAction('Failed to create todo'));
  }
}

export function* updateTodoSaga({
  payload,
}: ReturnType<typeof updateTodoAction>) {
  try {
    const todo: Todo = yield call(patchTodoApi, payload);
    yield put(updateTodoSuccessAction(todo));
  } catch (e) {
    yield put(updateTodoFailedAction('Failed to update todo'));
  }
}

export function* deleteTodoSaga({
  payload,
}: ReturnType<typeof deleteTodoAction>) {
  try {
    const todoId: string = yield call(deleteTodoApi, payload.id);
    yield put(deleteTodoSuccessAction(todoId));
  } catch (e) {
    yield put(deleteTodoFailedAction('Failed to delete todo'));
  }
}

export function* toggleTodoSaga({
  payload,
}: ReturnType<typeof toggleTodoAction>) {
  try {
    const todo: Todo = yield call(toggleTodoApi, payload);
    yield put(toggleTodoSuccessAction(todo));
  } catch (e) {
    yield put(toggleTodoFailedAction('Failed to toggle todo'));
  }
}

export function* clearCompletedSaga({
  payload,
}: ReturnType<typeof clearCompletedAction>) {
  try {
    const deletedIds: DeleteManyTodosRequest['deleteIds'] = yield call(
      deleteTodosApi,
      payload
    );
    yield put(clearCompletedSuccessAction(deletedIds));
  } catch (e) {
    yield put(clearCompletedFailedAction('Failed to clear completed todos'));
  }
}
