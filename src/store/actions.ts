import { DeleteTodoResponse, Todo } from '@bbronswijk/kotlin-todo-api-client';
import { FilterType } from '@/store/store';
import { DeleteManyResponse } from '@bbronswijk/kotlin-todo-api-client/src/models/DeleteManyResponse';

export enum ActionType {
  FETCH = 'FETCH',
  FETCH_SUCCESS = 'FETCH_SUCCESS',
  FETCH_FAILED = 'FETCH_FAILED',

  CREATE = 'CREATE',
  CREATE_SUCCESS = 'CREATE_SUCCESS',
  CREATE_FAILED = 'CREATE_FAILED',

  UPDATE = 'UPDATE',
  UPDATE_SUCCESS = 'UPDATE_SUCCESS',
  UPDATE_FAILED = 'UPDATE_FAILED',

  DELETE = 'DELETE',
  DELETE_SUCCESS = 'DELETE_SUCCESS',
  DELETE_FAILED = 'DELETE_FAILED',

  TOGGLE = 'TOGGLE',
  TOGGLE_SUCCESS = 'TOGGLE_SUCCESS',
  TOGGLE_FAILED = 'TOGGLE_FAILED',

  SET_SELECTED_FILTER = 'SET_SELECTED_FILTER',

  CLEAR_COMPLETED = 'CLEAR_COMPLETED',
  CLEAR_COMPLETED_SUCCESS = 'CLEAR_COMPLETED_SUCCESS',
  CLEAR_COMPLETED_FAILED = 'CLEAR_COMPLETED_FAILED',
}

export type TodoActions =
  | ReturnType<typeof fetchTodosAction>
  | ReturnType<typeof fetchTodosSuccessAction>
  | ReturnType<typeof fetchTodosFailedAction>
  | ReturnType<typeof createTodoAction>
  | ReturnType<typeof createTodoSuccessAction>
  | ReturnType<typeof createTodoFailedAction>
  | ReturnType<typeof updateTodoAction>
  | ReturnType<typeof updateTodoSuccessAction>
  | ReturnType<typeof updateTodoFailedAction>
  | ReturnType<typeof deleteTodoAction>
  | ReturnType<typeof deleteTodoSuccessAction>
  | ReturnType<typeof deleteTodoFailedAction>
  | ReturnType<typeof toggleTodoAction>
  | ReturnType<typeof toggleTodoSuccessAction>
  | ReturnType<typeof toggleTodoFailedAction>
  | ReturnType<typeof clearCompletedSuccessAction>
  | ReturnType<typeof clearCompletedFailedAction>
  | ReturnType<typeof setSelectedFilterAction>;

export const fetchTodosAction = () => ({ type: ActionType.FETCH });

export const fetchTodosSuccessAction = (todos: Todo[]) => ({
  type: ActionType.FETCH_SUCCESS,
  payload: todos,
});

export const fetchTodosFailedAction = (error: string) => ({
  type: ActionType.FETCH_FAILED,
  payload: error,
});

export const createTodoAction = (
  payload: Pick<Todo, 'title' | 'completed'>
) => ({
  type: ActionType.CREATE,
  payload,
});

export const createTodoSuccessAction = (todo: Todo) => ({
  type: ActionType.CREATE_SUCCESS,
  payload: todo,
});

export const createTodoFailedAction = (error: string) => ({
  type: ActionType.CREATE_FAILED,
  payload: error,
});

export const updateTodoAction = (payload: Pick<Todo, 'id' | 'title'>) => ({
  type: ActionType.UPDATE,
  payload,
});

export const updateTodoSuccessAction = (todo: Todo) => ({
  type: ActionType.UPDATE_SUCCESS,
  payload: todo,
});

export const updateTodoFailedAction = (error: string) => ({
  type: ActionType.UPDATE_FAILED,
  payload: error,
});

export const deleteTodoAction = (payload: Pick<Todo, 'id'>) => ({
  type: ActionType.DELETE,
  payload,
});

export const deleteTodoSuccessAction = (id: DeleteTodoResponse['data']) => ({
  type: ActionType.DELETE_SUCCESS,
  payload: id,
});

export const deleteTodoFailedAction = (error: string) => ({
  type: ActionType.DELETE_FAILED,
  payload: error,
});

export const clearCompletedAction = (payload: string[]) => ({
  type: ActionType.CLEAR_COMPLETED,
  payload,
});

export const clearCompletedSuccessAction = (
  ids: DeleteManyResponse['data']
) => ({
  type: ActionType.CLEAR_COMPLETED_SUCCESS,
  payload: ids,
});
export const clearCompletedFailedAction = (error: string) => ({
  type: ActionType.CLEAR_COMPLETED_FAILED,
  payload: error,
});

export const toggleTodoAction = (payload: Pick<Todo, 'id' | 'completed'>) => ({
  type: ActionType.TOGGLE,
  payload,
});

export const toggleTodoSuccessAction = (todo: Todo) => ({
  type: ActionType.TOGGLE_SUCCESS,
  payload: todo,
});

export const toggleTodoFailedAction = (error: string) => ({
  type: ActionType.TOGGLE_FAILED,
  payload: error,
});

export const setSelectedFilterAction = (
  payload: FilterType
): { type: ActionType.SET_SELECTED_FILTER; payload: FilterType } => ({
  type: ActionType.SET_SELECTED_FILTER,
  payload,
});
