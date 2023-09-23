import React from 'react'
import { Link } from 'react-router-dom'
import AddUserForm from '../../components/AddUserForm'
import UsersContainer from '../../components/UsersContainer'

export default function UsersPage() {
  return (
    <div>
      <Link to='/'>
        <button>Main page</button>
      </Link>
      <AddUserForm />
      <UsersContainer />
    </div>
  )
}