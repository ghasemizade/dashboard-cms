import React from 'react'
import Statusreq from './Statusreq'
import Avatar from './Avatar'
import clsx from 'clsx'


export default function Customerrow({cusName, avatar, date, amount, status, textStatus, bgStatus}) {
  return (
    <>
        <tr> 
          <td className={clsx(
            "flex items-center",
            "py-2"
          )}>
            <Avatar name={cusName} imgsrc={avatar}/>
          </td>
          <td>
            <p className={clsx(
                "text-slate-400"
              )}>{date}</p>
          </td>
          <td>
            <p className={clsx(
                "text-slate-400"
              )}>$ {amount}</p>
          </td>
          <td>
            <Statusreq title={status} textColor={textStatus} bgColor={bgStatus}/>
          </td>
        </tr>
    </>
  )
}
