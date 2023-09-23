import React from 'react'
import s from './index.module.css'

export default function User({ name, role, avatar }) {
  return (
    <div className={s.user_card}>
      <img alt='avatar' src={avatar} />
      <p>Name: { name }</p>
      <p>Role: { role }</p>
    </div>
  )
}