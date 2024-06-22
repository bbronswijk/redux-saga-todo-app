'use client';

import React, { useEffect } from 'react';
import TodoRow from '@/ui/todoRow';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodosAction } from '@/store/actions';
import {
  selectError,
  selectFilteredTodos,
  selectSelectedFilter,
  selectTodos,
} from '@/store/selectors';
import { Todo } from '@bbronswijk/kotlin-todo-api-client';

const TodoList = () => {
  const dispatch = useDispatch();
  const selectedFilter = useSelector(selectSelectedFilter);
  const todos: Todo[] = useSelector(selectTodos);
  const error: string | undefined = useSelector(selectError);
  const filteredTodos = selectFilteredTodos(selectedFilter, todos);

  useEffect(() => {
    dispatch(fetchTodosAction());
  }, []);

  if (error) {
    return (
      <div className='border-b border-border p-6 text-center'>
        Create a todo and start being productive! 🤓
      </div>
    );
  }

  if (filteredTodos.length === 0) {
    return (
      <div className='border-b border-border p-6 text-center'>
        Create a todo and start being productive! 🤓
      </div>
    );
  }

  return (
    <div>
      {filteredTodos.map((todo) => (
        <TodoRow key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
