import React from 'react'
import clsx from 'clsx'
import UsersList from '../components/users/UsersList'



export default function Users() {
  return (
    <div className={clsx(
      "flex flex-col",
      "min-h-screen",
    )}>
      <UsersList/>
    </div>
  )
}
