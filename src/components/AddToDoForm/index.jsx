import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context';
import { addToDo } from '../../requests/todos';

export default function AddToDoForm() {

  const { createNewToDo } = useContext(Context);

  const submit = event => {
    event.preventDefault();
    const { todo } = event.target;
    addToDo({
      todo: todo.value,
      completed: false,
      userId: 26
    }, createNewToDo);
    todo.value = '';
  }

  return (
    <form onSubmit={submit} className={s.add_todo_form}>
      <input type='text' name='todo' placeholder='Task' />
      <button>Add to do</button>
    </form>
  )
}