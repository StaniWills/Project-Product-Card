import React from 'react'
import s from './index.module.css'

export default function ToDoItem({ todo, completed }) {

  const todo_style = {
    border: completed ? '2px dashed green' : '2px dashed red'
  }

  return (
    <div className={s.todo_item} style={todo_style}>
      <p>Task: { todo }</p>
      <p>Status: { completed ? 'done' : 'not done' }</p>
    </div>
  )
}