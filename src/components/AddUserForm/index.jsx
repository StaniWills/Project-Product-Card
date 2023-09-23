import React, { useContext } from 'react'
import s from './index.module.css'
import { Context } from '../../context';
import { addUser } from '../../requests/users';

export default function AddUserForm() {

  const { createNewUser } = useContext(Context);

  const submit = event => {
    event.preventDefault();
    const { name, role, avatar} = event.target;
    addUser({
      name: name.value,
      role: role.value,
      avatar: avatar.value,
      email: 'example@gmail.com',
      password: 1234
    }, createNewUser);
    name.value = '';
    role.value = '';
    avatar.value = '';
  }

  return (
    <form onSubmit={submit} className={s.add_user_form}>
      <input type='text' name='name' placeholder='Name' />
      <input type='text' name='role' placeholder='Role' />
      <input type='text' name='avatar' placeholder='Avatar' />
      <button>Add user</button>
    </form>
  )
}