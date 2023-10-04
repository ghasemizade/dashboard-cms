import React from 'react'
import clsx from 'clsx'
import Customerrow from './Customerrow'
import avatar1 from '../../assets/avatar1.jpg'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.jpg'

export default function Lasttransaction() {
  return (
    <div className={clsx(
      "bg-slate-50",
      "shadow",
      "rounded",
      "p-2 ml-3",
      "w-2/3"
  )}>
    <h3 className={clsx(
            "text-2xl font-semibold"
        )}>Latest Transactions</h3>
        <div className={clsx(
          "my-8 mx-5"
        )}>
          <table className={clsx(
            "text-left",
            "w-full",
          )}>
            <tr>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
            <Customerrow 
              cusName={"Sauson Carol"}
              avatar={avatar1}
              date={"4 Jul 2023"}
              amount={"99.00"}
              status={"Approved"}
              textStatus={"text-green-500"}
              bgStatus={"bg-green-100"}/>

              <Customerrow 
              cusName={"Sarah Carol"}
              avatar={avatar2}
              date={"10 Jul 2023"}
              amount={"120.00"}
              status={"Declined"}
              textStatus={"text-red-500"}
              bgStatus={"bg-red-100"}/>

              <Customerrow 
              cusName={"Sauson Carol"}
              avatar={avatar3}
              date={"15 Jul 2023"}
              amount={"59.00"}
              status={"Pending"}
              textStatus={"text-blue-500"}
              bgStatus={"bg-blue-100"}/>
          </table>
        </div>
    </div>
  )
}
