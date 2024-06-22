import { FormEvent, useState } from 'react';
import Checkbox from './checkbox';
import { useDispatch } from 'react-redux';
import { createTodoAction } from '@/store/actions';

const CreateForm = () => {
  const dispatch = useDispatch();
  const [completed, setCompleted] = useState(false);
  const [title, setTitle] = useState('');

  const save = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createTodoAction({ completed, title }));
    resetForm();
  };

  const resetForm = () => {
    setCompleted(false);
    setTitle('');
  };

  return (
    <form
      onSubmit={save}
      className='relative flex rounded-lg bg-card text-card-foreground shadow-lg md:rounded'
    >
      <Checkbox
        checked={completed}
        onChange={setCompleted}
        className='absolute left-6 top-1/2 -translate-y-1/2'
      />
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type='text'
        className='w-full border-none bg-transparent py-5 pl-16 pr-6 text-card-foreground focus:outline-none'
        placeholder='Create a new todo...'
      />
    </form>
  );
};

export default CreateForm;
