import React from 'react'
import clsx from 'clsx'
import avatar from '../../assets/avatar1.jpg'

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
            <tr>
              <td className={clsx(
                "flex items-center",
              )}>
                <img 
                  className={clsx(
                    "rounded-full",
                    "mr-4"
                  )}
                  src={avatar} 
                  alt="avatar" 
                  width={40}/>
                  <p className={clsx(
                    "text-slate-500"
                  )}>Susan Carol</p>
              </td>
              <td>
                <p className={clsx(
                    "text-slate-400"
                  )}>2 Jun 2023</p>
              </td>
              <td>
                <p className={clsx(
                    "text-slate-400"
                  )}>$ 99.00</p>
              </td>
              <td>
                <div className={clsx(
                    "text-xs",
                    "text-green-500",
                    "bg-green-100",
                    "py-1 px-2",
                    "rounded-full",
                    "w-fit"
                  )}>Approved</div>
              </td>
            </tr>
          </table>
        </div>
    </div>
  )
}
