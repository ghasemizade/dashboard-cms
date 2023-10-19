import React from 'react'
import userDataJson from '../../data'
import { useState } from 'react'
import userRows from '../../data'



export default function UsersList() {
    const [userData, setUserData] = useState(userRows)

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'user',
            header: 'User',
            width: 200,
            renderCell: (params) => {
                console.log(params);
            }
        }
    ]
  return (
    <></>
  )
}
