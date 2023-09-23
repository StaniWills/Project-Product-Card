import React, { useContext } from 'react'
import { Context } from '../../context'
import ToDoItem from '../ToDoItem';
import s from './index.module.css'

export default function ToDoContainer() {

  const { todos } = useContext(Context);

  return (
    <div className={s.todo_container}>
      {
        todos.map(el => <ToDoItem key={el.id} {...el} />)
      }
    </div>
  )
}