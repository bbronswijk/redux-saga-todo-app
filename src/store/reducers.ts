import {
  createTodoSuccessAction,
  deleteTodoSuccessAction,
  toggleTodoSuccessAction,
  setSelectedFilterAction,
  clearCompletedSuccessAction,
  fetchTodosSuccessAction,
} from '@/store/actions';
import { TodoState } from '@/store/store';

export const activateLoaderReducer = (state: TodoState): TodoState => ({
  ...state,
  loading: true,
});

export const setErrorReducer = (
  state: TodoState,
  { payload }: { payload: string }
): TodoState => ({
  ...state,
  error: payload,
  loading: false,
});

export const fetchSuccessReducer = (
  state: TodoState,
  action: ReturnType<typeof fetchTodosSuccessAction>
): TodoState => ({
  ...state,
  loading: false,
  todos: action.payload,
});

export const createSuccessReducer = (
  state: TodoState,
  action: ReturnType<typeof createTodoSuccessAction>
): TodoState => ({
  ...state,
  loading: false,
  todos: [action.payload, ...state.todos],
});

export const deleteSuccessReducer = (
  state: TodoState,
  action: ReturnType<typeof deleteTodoSuccessAction>
): TodoState => ({
  ...state,
  todos: state.todos.filter((todo) => todo.id !== action.payload),
  loading: false,
});

export const toggleSuccessReducer = (
  state: TodoState,
  action: ReturnType<typeof toggleTodoSuccessAction>
): TodoState => ({
  ...state,
  todos: state.todos.map((todo) =>
    todo.id === action.payload.id ? action.payload : todo
  ),
  loading: false,
});

export const setSelectedFilterReducer = (
  state: TodoState,
  action: ReturnType<typeof setSelectedFilterAction>
): TodoState => ({
  ...state,
  selectedFilter: action.payload,
  loading: false,
});

export const clearCompletedSuccessReducer = (
  state: TodoState,
  action: ReturnType<typeof clearCompletedSuccessAction>
): TodoState => ({
  ...state,
  todos: state.todos.filter((todo) => !action.payload.includes(todo.id)),
  loading: false,
});
