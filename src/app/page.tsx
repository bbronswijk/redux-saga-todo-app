'use client';

import DarkModeToggle from '@/ui/dark-mode-toggle';
import CreateForm from '@/ui/create-form';
import TodoList from '@/ui/todo-list';
import Footer from '@/ui/footer';
import Filter from '@/ui/filter';
import React from 'react';
import { store } from '@/store/store';
import { Provider } from 'react-redux';
import { Loading } from '@/ui/loading';
import { Error } from '@/ui/error';

export default function Home() {
  return (
    <Provider store={store}>
      <header className='-z-10 h-72 w-full bg-[url(/images/bg-desktop-light.jpg)] bg-cover bg-center dark:bg-[url(/images/bg-desktop-dark.jpg)]' />
      <main className='relative mx-auto -mt-72 w-full max-w-[500px] space-y-8 px-4'>
        <h1 className='flex justify-between pb-10 pt-16 text-5xl font-bold leading-none tracking-[.25em] text-white'>
          TODO
          <DarkModeToggle />
        </h1>
        <Error />

        <CreateForm />

        <section className='rounded-lg bg-card text-card-foreground shadow-lg md:rounded'>
          <TodoList />
          <Footer />
        </section>

        <Filter className='mt-8 block rounded-lg bg-card px-6 py-4 text-center text-xs shadow-lg md:hidden md:rounded' />
        <Loading />
      </main>
    </Provider>
  );
}
